import { Box, chakra, Flex, SimpleGrid, Image } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import Head from "next/head";

import styles from "../../../styles/Home.module.css";
import dataStore from "../../stores/DataStore";
import Book from "./book";

export const Test = [
  {
    authorName: "Asimov",
    title: "I,Robot",
    description:
      "I, Robot (stylized as i,robot) is a 2004 American science fiction action film directed by Alex Proyas.",
    text: "I, Robot (stylized as i,robot) is a 2004 American science fiction action film directed by Alex Proyas. The screenplay by Jeff Vintar and Akiva Goldsman is from a screen story by Vintar, based on his original screenplay , and suggested by Isaac Asimov's 1950 short-story collection of the same name. The film stars Will Smith, Bridget Moynahan, Bruce Greenwood, James Cromwell, Chi McBride, and Alan Tudyk. In 2035, highly intelligent robots fill public service positions throughout the dystopian[3] world, operating under three rules to keep humans safe. Detective Del Spooner (Smith) investigates the alleged suicide of U.S. Robotics founder Alfred Lanning (Cromwell) and believes that a human-like robot (Tudyk) murdered him.",
  },
  {
    authorName: "Asimov",
    title: "I,Robot",
    description:
      "I, Robot (stylized as i,robot) is a 2004 American science fiction action film directed by Alex Proyas.",
    text: "I, Robot (stylized as i,robot) is a 2004 American science fiction action film directed by Alex Proyas. The screenplay by Jeff Vintar and Akiva Goldsman is from a screen story by Vintar, based on his original screenplay , and suggested by Isaac Asimov's 1950 short-story collection of the same name. The film stars Will Smith, Bridget Moynahan, Bruce Greenwood, James Cromwell, Chi McBride, and Alan Tudyk. In 2035, highly intelligent robots fill public service positions throughout the dystopian[3] world, operating under three rules to keep humans safe. Detective Del Spooner (Smith) investigates the alleged suicide of U.S. Robotics founder Alfred Lanning (Cromwell) and believes that a human-like robot (Tudyk) murdered him.",
  },
  {
    authorName: "Asimov",
    title: "I,Robot",
    description:
      "I, Robot (stylized as i,robot) is a 2004 American science fiction action film directed by Alex Proyas.",
    text: "I, Robot (stylized as i,robot) is a 2004 American science fiction action film directed by Alex Proyas. The screenplay by Jeff Vintar and Akiva Goldsman is from a screen story by Vintar, based on his original screenplay , and suggested by Isaac Asimov's 1950 short-story collection of the same name. The film stars Will Smith, Bridget Moynahan, Bruce Greenwood, James Cromwell, Chi McBride, and Alan Tudyk. In 2035, highly intelligent robots fill public service positions throughout the dystopian[3] world, operating under three rules to keep humans safe. Detective Del Spooner (Smith) investigates the alleged suicide of U.S. Robotics founder Alfred Lanning (Cromwell) and believes that a human-like robot (Tudyk) murdered him.",
  },
  {
    authorName: "Asimov",
    title: "I,Robot",
    description:
      "I, Robot (stylized as i,robot) is a 2004 American science fiction action film directed by Alex Proyas.",
    text: "I, Robot (stylized as i,robot) is a 2004 American science fiction action film directed by Alex Proyas. The screenplay by Jeff Vintar and Akiva Goldsman is from a screen story by Vintar, based on his original screenplay , and suggested by Isaac Asimov's 1950 short-story collection of the same name. The film stars Will Smith, Bridget Moynahan, Bruce Greenwood, James Cromwell, Chi McBride, and Alan Tudyk. In 2035, highly intelligent robots fill public service positions throughout the dystopian[3] world, operating under three rules to keep humans safe. Detective Del Spooner (Smith) investigates the alleged suicide of U.S. Robotics founder Alfred Lanning (Cromwell) and believes that a human-like robot (Tudyk) murdered him.",
  },
  {
    authorName: "string",
    title: "string",
    description: "string",
    text: "string",
  },
  {
    authorName: "string",
    title: "string",
    description: "string",
    text: "string",
  },
  {
    authorName: "string",
    title: "string",
    description: "string",
    text: "string",
  },
];

const Books = observer(() => {
  return (
    <Flex
      bg="white"
      p={50}
      w="full"
      alignItems="flex-end"
      justifyContent="center"
      wrap="wrap"
    >
      {dataStore.bookList.map((book: any, index) => (
        <Book key={index} title={book.title} />
      ))}
    </Flex>
  );
});

export default Books;
