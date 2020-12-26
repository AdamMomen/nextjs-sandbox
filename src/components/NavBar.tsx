import { Box, Flex, Heading, Spacer, Text, Image } from "@chakra-ui/react";
import React, { FunctionComponent as FC, useState } from "react";

const MenuItems: FC = ({ children }) => (
  <Text color="black" fontSize={12} fontWeight={600} mr={2} display="block">
    {children}
  </Text>
);

function NavBar(props: any) {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="2em"
      bg="white"
      color="white"
      shadow="14px 14px 40px 0 rgba(118, 126, 173, 0.08)"
      minW={80}
    >
      <Spacer />
      <Heading
        flexGrow={1}
        color="black"
        as="h1"
        size="lg"
        letterSpacing={"-.1rem"}
      >
        <Image src={require("../static/otter-logo.png")} />
      </Heading>
      <Box d="flex" as="nav" alignItems="center" flexGrow={1}>
        <MenuItems>ABOUT</MenuItems>
        <MenuItems>CLIENTS</MenuItems>
        <MenuItems>PROCESS</MenuItems>
        <MenuItems>RATES</MenuItems>
        <MenuItems>MEDIA</MenuItems>
        <MenuItems>APPLY</MenuItems>
      </Box>
    </Flex>
  );
}

export default NavBar;
