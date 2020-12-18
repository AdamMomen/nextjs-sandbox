import { Box, Flex, Container } from "@chakra-ui/react";
import React from "react";
function Navbar() {
  return (
    <Flex
      as="nav"
      wrap="wrap"
      align="center"
      bg="white"
      //   justify="space-evenly"
      padding="2.0rem"
      color="black"
      shadow="14px 14px 40px 0 rgba(118, 126, 173, 0.08)"
    >
      <Box mr="4rem"></Box>
      <Box color="green">test</Box>
    </Flex>
  );
}

export default Navbar;
