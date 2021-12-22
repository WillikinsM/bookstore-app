import { Flex } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import dataStore from "../../stores/DataStore";
import Category from "./category";

const Categories = observer(() => {
  return (
    <Flex
      bg="white"
      p={50}
      w="full"
      alignItems="flex-start"
      justifyContent="center"
      wrap="wrap"
    >
      {dataStore.categoryList.map((category: any, index) => (
        <Category
          key={index}
          name={category.name}
          description={category.description}
          image={category.image}
          id={category.id}
        />
      ))}
    </Flex>
  );
});

export default Categories;
