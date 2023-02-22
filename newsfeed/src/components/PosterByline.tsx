import * as React from "react";
import { useFragment, useQueryLoader } from "react-relay";
import { graphql } from "relay-runtime";
import Image from "./Image";
import Hovercard from "./Hovercard";
import PosterDetailsHovercardContents from "./PosterDetailsHovercardContents";
import { PosterBylineFragment$key } from "./__generated__/PosterBylineFragment.graphql";
import type { PosterDetailsHovercardContentsQuery as HovercardQueryType } from "./__generated__/PosterDetailsHovercardContentsQuery.graphql";
import { PosterDetailsHovercardContentsQuery } from "./PosterDetailsHovercardContents";

const { useRef } = React;

type PosterBylineProps = {
  poster: PosterBylineFragment$key;
};

const PosterBylineFragment = graphql`
  fragment PosterBylineFragment on Actor {
    id
    name
    profilePicture {
      ...ImageFragment @arguments(width: 60, height: 60)
    }
  }
`;

export default function PosterByline({
  poster,
}: PosterBylineProps): React.ReactElement {
  const data = useFragment(PosterBylineFragment, poster);
  if (data == null) {
    return null;
  }
  const hoverRef = useRef(null);

  const [hovercardQueryRef, loadHovercardQuery] =
    useQueryLoader<HovercardQueryType>(PosterDetailsHovercardContentsQuery);

  const onBeginHover = () => loadHovercardQuery({ posterID: data.id });

  return (
    <div ref={hoverRef} className="byline">
      <Image image={data.profilePicture} className="byline__image" />
      <div className="byline__name">{data.name}</div>
      <Hovercard onBeginHover={onBeginHover} targetRef={hoverRef}>
        <PosterDetailsHovercardContents queryRef={hovercardQueryRef} />
      </Hovercard>
    </div>
  );
}
