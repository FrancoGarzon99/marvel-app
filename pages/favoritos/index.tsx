import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { Box, Text, Button, useToast, Avatar, Stack } from '@chakra-ui/react';
import NextLink from 'next/link';
interface PropsFavoritos {

}
const Favoritos: NextPage<PropsFavoritos> = () => {
  const toast = useToast();
  const [favoritesList, setFavoritesList] = useState<Array<any>>();

  function GetDataStorage() {
    const data = localStorage.getItem('fav') || "null";
    setFavoritesList(JSON.parse(data));
  }

  useEffect(() => {
    GetDataStorage();
  }, []);

  function DeleteHero(id: number) {
    const filterElements = favoritesList?.filter(s => s.id !== id);
    toast({
      title: "¡Superheroe Eliminado!",
      description: "El superheroe seleccionado se elimino de tus favoritos.",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
    localStorage.setItem("fav", JSON.stringify(filterElements));
    GetDataStorage();
  }
  return (
    <Box p={6} >
      <Box cursor={"pointer"}>
        <NextLink passHref href={"/"}>
          <Text>Volver</Text>
        </NextLink>
      </Box>
      <Text fontSize="20px" py={2} textAlign="center">Mis Superheroes Favoritos</Text>
      <Box>
        {favoritesList && favoritesList?.map((s: { id: number, name: string, image: string; }) => (
          <Box key={s.id} border="1px solid #fff" m={6} p={4}>
            <Stack align="center" direction={["column", "column", "column", "row"]} justify="space-between" spacing={2} >
              <Stack align="center" direction={["column", "column", "column", "row"]} justify="center" spacing={4}>
                <Avatar name={s.name} size="xl" src={s.image} />
                <Text fontSize="18px">{s.name}</Text>
              </Stack>
              <Button colorScheme="red" w="200px" onClick={() => DeleteHero(s.id)}> Eliminar</Button>
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>

  );
};
export default Favoritos;
