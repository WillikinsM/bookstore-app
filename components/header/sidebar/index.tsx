import { BiCategory, BiBookAlt } from "react-icons/bi";
import {
  Stack,
  Heading,
  Button,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Modal,
} from "@chakra-ui/react";
import dataStore from "../../../stores/DataStore";
import FormWrapper from "./form";

const SideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton color="white" />
        <DrawerHeader bg="black" color="white" align="center" padding={6}>
          <Heading as="h2" size="md">
            Options
          </Heading>
        </DrawerHeader>
        <DrawerBody>
          <Stack spacing={2}>
            <Menu isLazy>
              <MenuButton
                as={Button}
                leftIcon={<BiCategory />}
                bg="white"
                color="black"
                variant="solid"
                size="lg"
                display="inline-box"
              >
                Categories
              </MenuButton>
              <MenuList>
                <MenuItem
                  as={Button}
                  marginBottom={2}
                  bg="black"
                  color="white"
                  variant="solid"
                  _hover={{ bg: "gray.500" }}
                  _focus={{ bg: "gray.500" }}
                >
                  All Categories
                </MenuItem>
                <MenuItem
                  as={Button}
                  bg="black"
                  color="white"
                  variant="solid"
                  _hover={{ bg: "gray.500" }}
                  _focus={{ bg: "gray.500" }}
                >
                  Add new Category
                </MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton
                as={Button}
                leftIcon={<BiBookAlt />}
                bg="white"
                color="black"
                variant="solid"
                size="lg"
                display="inline-box"
              >
                Books
              </MenuButton>
              <MenuList>
                <MenuItem
                  as={Button}
                  marginBottom={2}
                  bg="black"
                  color="white"
                  variant="solid"
                  _hover={{ bg: "gray.500" }}
                  _focus={{ bg: "gray.500" }}
                  onClick={() => dataStore.fetchBookList()}
                >
                  All Books
                </MenuItem>
                <MenuItem
                  as={Button}
                  bg="black"
                  color="white"
                  variant="solid"
                  _hover={{ bg: "gray.500" }}
                  _focus={{ bg: "gray.500" }}
                  onClick={onOpen}
                >
                  Add new Book
                  <Modal isOpen={isOpen} onClose={onClose}>
                    <FormWrapper />
                  </Modal>
                </MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </>
  );
};
export default SideBar;
