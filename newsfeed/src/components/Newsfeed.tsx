import * as React from "react";
import { useLazyLoadQuery, usePaginationFragment } from "react-relay";
import { graphql } from "relay-runtime";
import InfiniteScrollTrigger from "./InfiniteScrollTrigger";
import Story from "./Story";
import type { NewsfeedQuery as NewsfeedQueryType } from "./__generated__/NewsfeedQuery.graphql";
import type { NewsfeedContentsFragment$data } from "./__generated__/NewsfeedContentsFragment.graphql";
import {
  NewsfeedContentsRefetchQuery,
  NewsfeedContentsRefetchQuery$data,
} from "./__generated__/NewsfeedContentsRefetchQuery.graphql";

const NewsfeedQuery = graphql`
  query NewsfeedQuery {
    ...NewsfeedContentsFragment
  }
`;

const NewsfeedContentsFragment = graphql`
  fragment NewsfeedContentsFragment on Query
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 3 }
  )
  @refetchable(queryName: "NewsfeedContentsRefetchQuery") {
    viewer {
      newsfeedStories(after: $cursor, first: $count)
        @connection(key: "NewsfeedContentsFragment_newsfeedStories") {
        edges {
          node {
            id
            ...StoryFragment
          }
        }
      }
    }
  }
`;

export default function Newsfeed() {
  const query = useLazyLoadQuery<NewsfeedQueryType>(NewsfeedQuery, {});
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment<
    NewsfeedContentsRefetchQuery,
    NewsfeedContentsRefetchQuery$data
  >(NewsfeedContentsFragment, query);
  const onEndReached = () => loadNext(3);
  const storyEdges = (data as NewsfeedContentsFragment$data).viewer
    .newsfeedStories.edges;

  return (
    <div className="newsfeed">
      {storyEdges.map((storyEdge) => (
        <Story story={storyEdge.node} key={storyEdge.node.id} />
      ))}
      <InfiniteScrollTrigger
        onEndReached={onEndReached}
        hasNext={hasNext}
        isLoadingNext={isLoadingNext}
      />
    </div>
  );
}
