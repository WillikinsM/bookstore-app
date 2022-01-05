import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

const UpdateBook = () => {
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new</ModalHeader>
        <ModalCloseButton />
        <ModalBody></ModalBody>
      </ModalContent>
    </>
  );
};

export default UpdateBook;
