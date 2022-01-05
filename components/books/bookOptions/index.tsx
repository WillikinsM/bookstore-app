import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  useColorModeValue,
  SimpleGrid,
  Box,
  chakra,
  Button,
  Image,
  useDisclosure,
  Modal,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import dataStore from "../../../stores/DataStore";
import DeleteOption from "./delete";
import UpdateBook from "./update";

const BookOptions = observer(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const book: any = dataStore.book;

  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Options for {book.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            shadow="xl"
            bg={useColorModeValue("white", "gray.800")}
            px={8}
            py={20}
            mx="auto"
          >
            <SimpleGrid
              alignItems="start"
              columns={{ base: 1, md: 2 }}
              mb={24}
              spacingY={{ base: 10, md: 32 }}
              spacingX={{ base: 10, md: 24 }}
            >
              <Box>
                <chakra.h2
                  mb={4}
                  fontSize={{ base: "2xl", md: "4xl" }}
                  fontWeight="extrabold"
                  letterSpacing="tight"
                  textAlign={{ base: "center", md: "left" }}
                  color={useColorModeValue("gray.900", "gray.400")}
                  lineHeight={{ md: "shorter" }}
                  textShadow="2px 0 currentcolor"
                >
                  {book.title}
                </chakra.h2>
                <chakra.p
                  mb={5}
                  textAlign={{ base: "center", sm: "left" }}
                  color={useColorModeValue("gray.600", "gray.400")}
                  fontSize={{ md: "lg" }}
                >
                  {book.text}
                </chakra.p>
                <Button
                  w={{ base: "full", sm: "auto" }}
                  size="lg"
                  bg={useColorModeValue("gray.900", "gray.700")}
                  _hover={{ bg: useColorModeValue("gray.700", "gray.600") }}
                  color={useColorModeValue("white", "gray.200")}
                  onClick={onOpen}
                >
                  Update
                  <Modal onClose={onClose} size={"md"} isOpen={isOpen}>
                    <Button onClick={onClose}>Close</Button>
                    <UpdateBook />
                  </Modal>
                </Button>

                {<DeleteOption id={book.id} />}
              </Box>
              <Image
                h="auto"
                w="auto"
                fit="cover"
                mt={2}
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ad352c45728713.583b609560cfb.jpg"
                alt="Book cover"
              />
              <Text mr={-328} ml={327} mt={-127}>
                {book.authorName}
              </Text>
            </SimpleGrid>
          </Box>
        </ModalBody>
      </ModalContent>
    </>
  );
});

export default BookOptions;
