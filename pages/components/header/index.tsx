import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  MenuButton,
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
            <Stack spacing={4}>
              <Button
                leftIcon={<BiCategory />}
                bg="white"
                color="black"
                variant="solid"
                size="lg"
              >
                Categories
              </Button>
              <Button
                leftIcon={<BiBookAlt />}
                bg="white"
                color="black"
                variant="solid"
                size="lg"
              >
                Books
              </Button>
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
