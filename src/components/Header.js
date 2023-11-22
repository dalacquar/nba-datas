import React from "react";
import { Box, Button } from "@chakra-ui/react";

function Header() {
  return (
    <Box
      bg="gray.700"
      color="white"
      p={4}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height="100%"
    >
      NBA Stats
      <Box>
        <Button mr={2} colorScheme="red" variant="outline">
          Botão 1
        </Button>
        <Button colorScheme="red">Botão 2</Button>
      </Box>
    </Box>
  );
}

export default Header;
