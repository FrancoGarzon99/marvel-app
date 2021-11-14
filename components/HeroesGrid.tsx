import { ModelDataMarvelGet } from '../types';
import { Box, SimpleGrid, Text, useToast } from '@chakra-ui/react';
import CardHero from './CardHero';

interface PropsHeroGrid {
  heroesList: ModelDataMarvelGet;
}

const HeroesGrid = ({ heroesList }: PropsHeroGrid) => {
  const toast = useToast();

  function addFavorite(id: number, name: string, image: string) {
    let data = window.localStorage.getItem("fav") ? JSON.parse(window.localStorage.getItem("fav") || "null") : [],
      isExist = data.findIndex((obj: any) => {
        return obj.id == id && obj.name == name;
      }) != -1;
    if (isExist) {
      toast({
        title: "¡Ya exite!",
        description: "El superheroe seleccionado ya existe en tus favoritos.",
        status: "error",
        duration: 6000,
        isClosable: true,
      });

    } else {
      data.push({ id, name, image });
      localStorage.setItem('fav', JSON.stringify(data));
      toast({
        title: "¡Agregado con exito!",
        description: "Superheroe agregado a mis favotitos.",
        status: "success",
        duration: 6000,
        isClosable: true,
      });
    }
  }

  return (
    <Box>
      <Text fontSize={"20px"} py={6} textAlign={"center"}>Tus Superheroes Favoritos</Text>
      <SimpleGrid columns={4} minChildWidth="280px" p={8} spacing={"20px"}>
        {heroesList && heroesList?.data?.results.map(hero => (
          <CardHero key={hero.id} addFav={addFavorite} hero={hero} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HeroesGrid;
