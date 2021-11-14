import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { Box, Text, useToast, } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import CardFav from '../../components/CardFav';
interface PropsFavoritos {

}
const MotionBox = motion(Box);

const Favoritos: NextPage<PropsFavoritos> = () => {
  const router = useRouter();
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
      <MotionBox cursor="pointer" h="50px" w="50px" whileTap={{ scale: 0.6 }} onClick={() => router.back()} >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" fillRule="evenodd" />
        </svg>
      </MotionBox>
      <Text fontSize="20px" py={2} textAlign="center">Mis Superheroes Favoritos</Text>
      <Box>
        {favoritesList && favoritesList?.map((superhero: { id: number, name: string, image: string; }) => (
          <CardFav key={superhero.id} DeleteHero={DeleteHero} superheroe={superhero} />
        ))}
      </Box>
    </Box>

  );
};
export default Favoritos;
