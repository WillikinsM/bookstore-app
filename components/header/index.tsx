import React from "react";
import { Box, Heading, Flex, useDisclosure, Drawer } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import SideBar from "./sidebar";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        <SideBar />
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
