import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import Form from "./formikTest";

const FormWrapper = () => {
  return (
    <>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Form />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Submit
          </Button>
          <Button colorScheme="red">Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </>
  );
};

export default FormWrapper;
