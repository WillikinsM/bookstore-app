import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import dataStore from "../../../../stores/DataStore";
import { FormBook } from "./bookForm";
import FormCategory from "./categoryForm";

const FormWrapper = observer(() => {
  const [isOpen, setIsOpen] = useState("");
  let formChange = dataStore.modalHandler;

  useEffect(() => {
    setIsOpen(formChange);
  }, [formChange]);

  return isOpen === "book" ? (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new {isOpen}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormBook />
        </ModalBody>
      </ModalContent>
    </>
  ) : (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new {isOpen}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormCategory />
        </ModalBody>
      </ModalContent>
    </>
  );
});

export default FormWrapper;
