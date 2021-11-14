import { useState, useEffect } from 'react';
import { Box, Text, Image as ChakraImage } from '@chakra-ui/react';
import { ModelHeroData } from '../types';
import NextLink from 'next/link';

interface PropsCardHero {
  hero: ModelHeroData;
  addFav: (id: number, name: string, image: string) => void;
}

const CardHero = ({ hero, addFav }: PropsCardHero) => {
  const image = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
  return (
    <Box cursor="pointer" position={"relative"}>
      <Box cursor="pointer" h="25px" left={2} position={"absolute"} top={2} w="25px" zIndex="999" onClick={() => addFav(hero.id, hero.name, image)}>
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" fillRule="evenodd" />
        </svg>
      </Box>
      <NextLink passHref
        href={`/heroe/${hero.id}`}>
        <Box>
          <ChakraImage src={image} />
          <Text>{hero.name}</Text>
        </Box>
      </NextLink>
    </Box>
  );
};

export default CardHero;
