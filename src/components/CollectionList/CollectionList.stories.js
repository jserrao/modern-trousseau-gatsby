import React from "react";
import { storiesOf } from "@storybook/react";

import CollectionList from "./CollectionList";

import imageFile1 from "../../assets/images/Fall-2020-1.png";
import imageFile2 from "../../assets/images/Fall-2020-2.png";
import imageFile3 from "../../assets/images/Spring-2020-1.jpeg";
import imageFile4 from "../../assets/images/Spring-2020-2.jpeg";
import imageFile5 from "../../assets/images/Trending-Now-1.jpeg";
import imageFile6 from "../../assets/images/Trending-Now-2.jpeg";
import imageFile7 from "../../assets/images/Classics-1.jpeg";
import imageFile8 from "../../assets/images/Classics-2.jpeg";

const slideData = [
  {
    title: "Fall 2020 Collection",
    imga: imageFile1,
    imgb: imageFile2,
    labela: "LUCA",
    labelb: "VIDA",
    index: 0
  },
  {
    title: "Fall 2020 Collection",
    imga: imageFile3,
    imgb: imageFile4,
    labela: "AlWAYS",
    labelb: "BELIZE",
    index: 1
  },
  {
    title: "Fall 2020 Collection",
    imga: imageFile5,
    imgb: imageFile6,
    labela: "ALICE",
    labelb: "EVELYN",
    index: 2
  },
  {
    title: "Fall 2020 Collection",
    imga: imageFile7,
    imgb: imageFile8,
    labela: "AINSLEY",
    labelb: "ANNIE",
    index: 3
  }
];

storiesOf("Collection List", module).add("Collection List", () => (
  <CollectionList slideData={slideData} title="Classics"></CollectionList>
));