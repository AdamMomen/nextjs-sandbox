import { Box, Flex, Image, Link } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface MenuItemsProps {
  children: ReactNode;
}
const MenuItems = ({ children }: MenuItemsProps) => (
  <Link mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Link>
);
const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="white"
      color="teal.300"
      borderBottom="1px solid black"
    >
      <Flex align="center" mr={5}>
        {/* <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          Chakra UI & React
        </Heading> */}
        <Image src="https://uploads-ssl.webflow.com/5f96d37adfe170593d658cbf/5f96e016c07b280c33adf0ef_otter-logo.png" />
      </Flex>

      <Box
        display="flex"
        width="auto"
        alignItems="center"
        flexGrow={1}
        color="teal.300"
      >
        <MenuItems>Home</MenuItems>
        <MenuItems>Blogs</MenuItems>
        <MenuItems>About</MenuItems>
        <MenuItems>Contact</MenuItems>
      </Box>
    </Flex>
  );
};

export default Navbar;
