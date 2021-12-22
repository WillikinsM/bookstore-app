import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
} from "@chakra-ui/react";

interface Props {
  title: string;
  id: number;
}

const BookOptions = ({ title, id }: Props) => {
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Options for {title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{id}</Text>
        </ModalBody>
        <ModalFooter>
          <Text>{id}</Text>
        </ModalFooter>
      </ModalContent>
    </>
  );
};

export default BookOptions;
