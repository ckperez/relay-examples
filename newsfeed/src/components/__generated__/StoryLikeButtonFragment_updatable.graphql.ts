/**
 * @generated SignedSource<<3abe7ebd9a989b33e80d3ee245394919>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { UpdatableFragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StoryLikeButtonFragment_updatable$data = {
  doesViewerLike: boolean | null;
  likeCount: number | null;
  readonly " $fragmentType": "StoryLikeButtonFragment_updatable";
};
export type StoryLikeButtonFragment_updatable$key = {
  readonly " $data"?: StoryLikeButtonFragment_updatable$data;
  readonly $updatableFragmentSpreads: FragmentRefs<"StoryLikeButtonFragment_updatable">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StoryLikeButtonFragment_updatable",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "likeCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "doesViewerLike",
      "storageKey": null
    }
  ],
  "type": "Story",
  "abstractKey": null
};

(node as any).hash = "e6f00105046a2504bde8936602ac4559";

export default node;
