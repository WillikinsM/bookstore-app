import { Box, ButtonGroup, Spacer } from "@chakra-ui/react";
import { Formik } from "formik";
import {
  InputControl,
  PercentComplete,
  ResetButton,
  SubmitButton,
  TextareaControl,
} from "formik-chakra-ui";
import { observer } from "mobx-react-lite";
import * as React from "react";
import * as Yup from "yup";
import dataStore from "../../../../stores/DataStore";

const sleep = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = (values: any) => {
  dataStore.addNewCategory(values.name, values.description);
  sleep(1100).then(() => {
    window.alert(JSON.stringify("Category Added ", null, 2));
    dataStore.setView("categories", -1);
  });
};

const initialValues = {
  name: "",
  description: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required().min(3).max(30),
  description: Yup.string().required().min(8).max(1000),
});

const FormCategory = observer(() => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, values, errors }) => (
        <Box
          borderWidth="1px"
          rounded="lg"
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          maxWidth={800}
          p={6}
          m="10px auto"
          as="form"
          onSubmit={handleSubmit as any}
        >
          <InputControl name="name" label="Name" />
          <TextareaControl name="description" label="Description" />
          <Spacer mt={10} />
          <PercentComplete />
          <ButtonGroup>
            <SubmitButton>Submit</SubmitButton>
            <ResetButton>Reset</ResetButton>
          </ButtonGroup>
        </Box>
      )}
    </Formik>
  );
});

export default FormCategory;
