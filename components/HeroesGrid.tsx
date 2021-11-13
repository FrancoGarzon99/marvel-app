import React from 'react';
import { ModelDataMarvelGet } from '../types';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import CardHero from './CardHero';

interface PropsHeroGrid {
  heroesList: ModelDataMarvelGet;
}

const HeroesGrid = ({ heroesList }: PropsHeroGrid) => {
  return (
    <Box>
      <Text fontSize={"20px"} py={6} textAlign={"center"}>Tus Superheroes Favoritos</Text>
      <SimpleGrid columns={8} minChildWidth="280px" spacing={"20px"}>
        {heroesList && heroesList?.data?.results.map(hero => (
          <CardHero key={hero.id} {...hero} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HeroesGrid;
