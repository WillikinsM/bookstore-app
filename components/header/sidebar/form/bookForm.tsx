import { Box, ButtonGroup, Spacer } from "@chakra-ui/react";
import { Formik } from "formik";
import {
  InputControl,
  PercentComplete,
  ResetButton,
  SelectControl,
  SubmitButton,
  TextareaControl,
} from "formik-chakra-ui";
import { observer } from "mobx-react-lite";
import * as React from "react";
import { useEffect } from "react";
import * as Yup from "yup";
import dataStore from "../../../../stores/DataStore";

const sleep = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = (values: any) => {
  dataStore.addNewBook(
    values.authorName,
    values.title,
    values.text,
    values.category
  );
  sleep(1100).then(() => {
    window.alert(JSON.stringify("Book Added ", null, 2));
  });
};

const initialValues = {
  authorName: "",
  text: "",
  title: "",
  category: 0,
};
const validationSchema = Yup.object({
  authorName: Yup.string().required().min(3).max(30),
  text: Yup.string().required().min(4).max(3000),
  title: Yup.string().required().min(3).max(50),
  category: Yup.number().required(),
});

const FormBook = observer(() => {
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
          <InputControl name="authorName" label="Author Name" />
          <InputControl name="title" label="Title" />
          <TextareaControl name="text" label="Text" />
          <Spacer mt={10} />
          <SelectCategory />
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

export { FormBook };

export const SelectCategory = observer(() => {
  useEffect(() => {
    dataStore.fetchCategoryList();
  }, []);

  return (
    <SelectControl
      name="category"
      selectProps={{ placeholder: "Select a Category" }}
    >
      {dataStore.categoryList.map((category: any) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </SelectControl>
  );
});
