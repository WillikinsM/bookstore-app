import { chakra, Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

import Category from "./category";

export const aux = [
  {
    name: "Science Fiction",
    description:
      "fiction that deals principally with the impact of actual or imagined science upon society or individuals.",
    image:
      "https://1.bp.blogspot.com/-fOGg6tS7LmU/XTIIyJcvdHI/AAAAAAAAfsM/syj8BZN6q4sYe_T6HJ5DpmUiYXUfx2i4wCLcBGAs/s1600/post%2Blegende%2Bnew%2Bcopy.jpg",
  },
  {
    name: "Biography",
    description:
      "A biography, or simply bio, is a detailed description of a person's life",
    image:
      "https://cropper.watch.aetnd.com/cdn.watch.aetnd.com/sites/4/2020/01/biography_on_black_background_1920x1080.jpg",
  },
  {
    name: "TI books",
    description: "books that are related to technology",
    image:
      "https://www.valentir.com.br/wp-content/uploads/2018/11/binary-code-475664_640.jpg",
  },
];

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
      {aux.map((category, index) => (
        <Category
          key={index}
          name={category.name}
          description={category.description}
          image={category.image}
        />
      ))}
    </Flex>
  );
});

export default Categories;
