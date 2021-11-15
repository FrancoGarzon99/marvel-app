import NextLink from "next/link";
import { Box, Button, Stack } from "@chakra-ui/react";

const MenuNav = () => {
  return (
    <Stack direction={"row"} justifyContent={"space-around"} p={8}>
      <Box>
        <NextLink passHref href="/busqueda">
          <Button colorScheme={"blue"} size={"lg"}>
            Buscar Superheroe
          </Button>
        </NextLink>
      </Box>
      <Box>
        <NextLink passHref href="/favoritos">
          <Button colorScheme="gray" size={"lg"}>
            Mis Favoritos
          </Button>
        </NextLink>
      </Box>
    </Stack>
  );
};

export default MenuNav;
