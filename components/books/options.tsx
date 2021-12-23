import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import dataStore from "../../stores/DataStore";

const BookOptions = observer(() => {
  const book: any = dataStore.book;

  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Options for {book.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{book.text}</Text>
        </ModalBody>
        <ModalFooter>
          <Text>{book.authorName}</Text>
        </ModalFooter>
      </ModalContent>
    </>
  );
});

export default BookOptions;
