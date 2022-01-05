import {
  Box,
  Button,
  chakra,
  Flex,
  Image,
  Modal,
  useDisclosure,
} from "@chakra-ui/react";
import dataStore from "../../stores/DataStore";
import BookOptions from "./bookOptions";

interface Props {
  title: string;
  id: number;
}

const Book = ({ title, id }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    dataStore.findBookById(id);
    onOpen();
  };

  return (
    <Box
      maxW="xs"
      minW="xs"
      mx="auto"
      bg="black"
      shadow="lg"
      rounded="lg"
      marginTop={10}
    >
      <Box px={4} py={2}>
        <chakra.h1
          color="white"
          fontWeight="bold"
          fontSize="xl"
          textTransform="uppercase"
        >
          {title}
        </chakra.h1>
      </Box>

      <Image
        h={48}
        w="full"
        fit="cover"
        mt={2}
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ad352c45728713.583b609560cfb.jpg"
        alt="BookCover"
      />

      <Flex
        alignItems="center"
        justifyContent="center"
        px={4}
        py={2}
        bg="gray.900"
        roundedBottom="lg"
      >
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
          onClick={handleClick}
        >
          See more
          <Modal onClose={onClose} size={"2xl"} isOpen={isOpen}>
            <Button onClick={onClose}>Close</Button>
            <BookOptions />
          </Modal>
        </chakra.button>
      </Flex>
    </Box>
  );
};

export default Book;
