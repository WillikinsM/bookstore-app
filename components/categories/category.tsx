import { Box, chakra, Flex, useColorModeValue } from "@chakra-ui/react";

interface Props {
  name: string;
  description: string;
  image: string;
}

const Category = ({ name, description, image }: Props) => {
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
          backgroundImage: `url(${image})`,
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
          >
            see books
          </chakra.button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Category;
