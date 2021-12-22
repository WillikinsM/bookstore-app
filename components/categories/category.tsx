import { Box, chakra, Flex, useColorModeValue } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import dataStore from "../../stores/DataStore";

interface Props {
  name: string;
  description: string;
  image: string;
  id: number;
}

const Category = observer(({ name, description, image, id }: Props) => {
  const handleClick = () => {
    dataStore.findBookByCategory(id);
  };

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      w="sm"
      mx="auto"
      marginTop={10}
    >
      <Box
        bg="black"
        h={64}
        w="full"
        rounded="lg"
        shadow="md"
        bgSize="contain"
        bgPos="center"
        style={{
          backgroundImage: `url(https://1.bp.blogspot.com/-fOGg6tS7LmU/XTIIyJcvdHI/AAAAAAAAfsM/syj8BZN6q4sYe_T6HJ5DpmUiYXUfx2i4wCLcBGAs/s1600/post%2Blegende%2Bnew%2Bcopy.jpg)`,
        }}
      ></Box>

      <Box
        w={{ base: 56, md: 64 }}
        bg="white"
        mt={-10}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <chakra.h3
          py={2}
          textAlign="center"
          fontWeight="bold"
          textTransform="uppercase"
          color="black"
          letterSpacing={1}
        >
          {name}
        </chakra.h3>

        <Flex
          alignItems="center"
          justifyContent="space-between"
          py={2}
          px={3}
          bg="black"
        >
          <chakra.span fontWeight="bold" color="white" textOverflow="ellipsis">
            {description}
          </chakra.span>
          <chakra.button
            bg="gray.800"
            fontSize="xs"
            fontWeight="bold"
            color="white"
            px={2}
            py={1}
            rounded="lg"
            textTransform="uppercase"
            _hover={{
              bg: useColorModeValue("gray.700", "gray.600"),
            }}
            _focus={{
              bg: useColorModeValue("gray.700", "gray.600"),
              outline: "none",
            }}
            onClick={handleClick}
          >
            see books
          </chakra.button>
        </Flex>
      </Box>
    </Flex>
  );
});

export default Category;
