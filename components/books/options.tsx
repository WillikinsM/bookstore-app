import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Flex,
  useColorModeValue,
  SimpleGrid,
  Box,
  chakra,
  Button,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  ButtonGroup,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import dataStore from "../../stores/DataStore";

const BookOptions = observer(() => {
  const book: any = dataStore.book;

  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Options for {book.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            bg={useColorModeValue("#F9FAFB", "gray.600")}
            p={20}
            w="full"
            justifyContent="center"
            alignItems="center"
          >
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
                  <Text ml={350}>{book.authorName}</Text>
                  <Button
                    w={{ base: "full", sm: "auto" }}
                    size="lg"
                    bg={useColorModeValue("gray.900", "gray.700")}
                    _hover={{ bg: useColorModeValue("gray.700", "gray.600") }}
                    color={useColorModeValue("white", "gray.200")}
                    as="a"
                  >
                    Update
                  </Button>

                  <Popover>
                    <PopoverTrigger>
                      <Button
                        w={{ base: "full", sm: "auto" }}
                        size="lg"
                        bg={useColorModeValue("red.500", "red.200")}
                        _hover={{ bg: useColorModeValue("red.900", "red.600") }}
                        color={useColorModeValue("white", "gray.200")}
                        as="a"
                        ml={2}
                      >
                        Delete
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Confirmation!</PopoverHeader>
                      <PopoverBody>
                        Are you sure you want to delete this book?
                      </PopoverBody>
                      <PopoverFooter d="flex" justifyContent="flex-end">
                        <ButtonGroup size="sm">
                          <Button variant="outline">Cancel</Button>
                          <Button colorScheme="red">Delete</Button>
                        </ButtonGroup>
                      </PopoverFooter>
                    </PopoverContent>
                  </Popover>
                </Box>
                <Image
                  h="full"
                  w="full"
                  fit="cover"
                  mt={2}
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ad352c45728713.583b609560cfb.jpg"
                  alt="Book cover"
                />
              </SimpleGrid>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </>
  );
});

export default BookOptions;
