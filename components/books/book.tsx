import { Box, chakra, Flex, Image } from "@chakra-ui/react";

interface Props {
  title: string;
}

const Book = ({ title }: Props) => {
  return (
    <Box maxW="xs" mx="auto" bg="black" shadow="lg" rounded="lg" marginTop={10}>
      <Box px={4} py={2}>
        <chakra.h1
          color="white"
          fontWeight="bold"
          fontSize="3xl"
          textTransform="uppercase"
        >
          {title}
        </chakra.h1>
        <chakra.p mt={1} fontSize="sm" color="white" textOverflow="ellipsis">
          description
        </chakra.p>
      </Box>

      <Image
        h={48}
        w="full"
        fit="cover"
        mt={2}
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ad352c45728713.583b609560cfb.jpg"
        alt="NIKE AIR"
      />

      <Flex
        alignItems="center"
        justifyContent="space-between"
        px={4}
        py={2}
        bg="gray.900"
        roundedBottom="lg"
      >
        <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
          authorName
        </chakra.h1>
        <chakra.button
          px={2}
          py={1}
          bg="white"
          fontSize="xs"
          color="gray.900"
          fontWeight="bold"
          rounded="lg"
          textTransform="uppercase"
          _hover={{
            bg: "gray.200",
          }}
          _focus={{
            bg: "gray.400",
          }}
        >
          Add to cart
        </chakra.button>
      </Flex>
    </Box>
  );
};

export default Book;
