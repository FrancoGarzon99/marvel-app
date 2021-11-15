import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { Box, Text, useToast } from "@chakra-ui/react";

import CardFav from "../../components/CardFav";
import GoBack from "../../components/GoBack";
interface PropsFavoritos {}

const Favoritos: NextPage<PropsFavoritos> = () => {
  const toast = useToast();
  const [favoritesList, setFavoritesList] = useState<Array<any>>();

  function GetDataStorage() {
    const data = localStorage.getItem("fav") || "null";
    setFavoritesList(JSON.parse(data));
  }

  useEffect(() => {
    GetDataStorage();
  }, []);

  function DeleteHero(id: number) {
    const filterElements = favoritesList?.filter((s) => s.id !== id);
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
    <Box p={6}>
      <GoBack />
      <Text fontSize="20px" py={2} textAlign="center">
        Mis Superheroes Favoritos
      </Text>
      <Box>
        {favoritesList &&
          favoritesList?.map(
            (superhero: { id: number; name: string; image: string }) => (
              <CardFav
                key={superhero.id}
                DeleteHero={DeleteHero}
                superheroe={superhero}
              />
            )
          )}
      </Box>
    </Box>
  );
};
export default Favoritos;
