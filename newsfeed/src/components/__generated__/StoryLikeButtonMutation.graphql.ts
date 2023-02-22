/**
 * @generated SignedSource<<f3ddbafedb5655f81429a21373974a60>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StoryLikeButtonMutation$variables = {
  doesLike: boolean;
  id: string;
};
export type StoryLikeButtonMutation$data = {
  readonly likeStory: {
    readonly story: {
      readonly " $fragmentSpreads": FragmentRefs<"StoryLikeButtonFragment">;
    } | null;
  } | null;
};
export type StoryLikeButtonMutation = {
  response: StoryLikeButtonMutation$data;
  variables: StoryLikeButtonMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "doesLike"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = [
  {
    "kind": "Variable",
    "name": "doesLike",
    "variableName": "doesLike"
  },
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "StoryLikeButtonMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "StoryMutationResponse",
        "kind": "LinkedField",
        "name": "likeStory",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Story",
            "kind": "LinkedField",
            "name": "story",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "StoryLikeButtonFragment"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "StoryLikeButtonMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "StoryMutationResponse",
        "kind": "LinkedField",
        "name": "likeStory",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Story",
            "kind": "LinkedField",
            "name": "story",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
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
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2f68b4d7d380e5f13ad3b3e22f3ce24a",
    "id": null,
    "metadata": {},
    "name": "StoryLikeButtonMutation",
    "operationKind": "mutation",
    "text": "mutation StoryLikeButtonMutation(\n  $id: ID!\n  $doesLike: Boolean!\n) {\n  likeStory(id: $id, doesLike: $doesLike) {\n    story {\n      ...StoryLikeButtonFragment\n      id\n    }\n  }\n}\n\nfragment StoryLikeButtonFragment on Story {\n  id\n  likeCount\n  doesViewerLike\n}\n"
  }
};
})();

(node as any).hash = "4372660566b2e9e4ec22ceb6ee3c20a6";

export default node;
