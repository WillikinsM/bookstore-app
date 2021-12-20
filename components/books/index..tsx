import { Flex } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

import dataStore from "../../stores/DataStore";
import Book from "./book";

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
