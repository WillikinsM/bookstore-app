import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BiCategory, BiBookAlt } from "react-icons/bi";
import styles from "../styles/header.module.css";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  /* const handleToggle = () => (isOpen ? onClose() : onOpen()); */
  const btnRef = React.useRef(null);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding={6}
      bg="black"
      color="white"
    >
      <Box ref={btnRef} onClick={onOpen} _hover={{ cursor: "pointer" }}>
        <HamburgerIcon />
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
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
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
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
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Flex mr={2}>
        <Heading as="h1" size="md" letterSpacing={"tight"}>
          Bookstore
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Header;
