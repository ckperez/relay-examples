// External dependencies
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";
import * as React from "react";
// Internal dependencies
import Card from "./Card";
import Heading from "./Heading";
import Image from "./Image";
import StoryLikeButton from "./StoryLikeButton";
import PosterByline from "./PosterByline";
import StoryCommentsSection from "./StoryCommentsSection";
import StorySummary from "./StorySummary";
import Timestamp from "./Timestamp";
// Types
import type { StoryFragment$key } from "./__generated__/StoryFragment.graphql";

type StoryProps = {
  story: StoryFragment$key;
};

const StoryFragment = graphql`
  fragment StoryFragment on Story {
    title
    summary
    createdAt
    thumbnail {
      ...ImageFragment @arguments(width: 400)
    }
    poster {
      ...PosterBylineFragment
    }
    ...StoryCommentsSectionFragment
    ...StoryLikeButtonFragment
  }
`;

export default function Story({ story }: StoryProps): React.ReactElement {
  const data = useFragment(StoryFragment, story);
  return (
    <Card>
      <PosterByline poster={data.poster} />
      <Heading>{data.title}</Heading>
      <Timestamp time={data.createdAt} />
      <Image image={data.thumbnail} width={400} height={400} />
      <StorySummary summary={data.summary} />
      <StoryLikeButton story={data} />
      <StoryCommentsSection story={data} />
    </Card>
  );
}
