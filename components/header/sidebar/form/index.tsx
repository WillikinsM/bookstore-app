import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import dataStore from "../../../../stores/DataStore";
import { FormBook } from "./bookForm";
import FormCategory from "./categoryForm";

const FormWrapper = observer(() => {
  let formChange = dataStore.modalHandler;
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new {formChange}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {formChange === "book" ? (
            <FormBook />
          ) : formChange === "category" ? (
            <FormCategory />
          ) : null}
        </ModalBody>
      </ModalContent>
    </>
  );
});

export default FormWrapper;
