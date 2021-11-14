import { Box, Text } from '@chakra-ui/react';
import { ModelHeroData } from '../types';
import NextLink from 'next/link';
import { motion } from "framer-motion";


interface PropsCardHero {
  hero: ModelHeroData;
  addFav: (id: number, name: string, image: string) => void;
  activeFn: boolean;
}

const CardHero = ({ hero, addFav, activeFn = true }: PropsCardHero) => {

  const MotionBox = motion(Box);

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const image = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
  return (
    <Box cursor="pointer" position={"relative"}>
      <MotionBox
        height="350px"
        variants={item}
        whileHover={{ translateY: -7, boxShadow: "5px 10px 20px 0px rgba(19,39,118,0.2)" }}
      >
        {activeFn && <MotionBox color="red" cursor="pointer" h="30px" position={"absolute"} right={5} top={5} w="30px" whileTap={{ scale: 0.6 }} zIndex="2" onClick={() => addFav(hero.id, hero.name, image)}>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" fillRule="evenodd" />
          </svg>
        </MotionBox>
        }
        {activeFn ? <NextLink passHref
          href={`/heroe/${hero.id}`}>
          <Box
            borderRadius={7}
            boxSizing="border-box"
            h="350px"
            position="relative"
            shadow="3px 5px 10px rgba(0, 0, 0, 0.1)"
          >
            <Box>
              <Box
                bgImage={`url(${image})`}
                bgPos="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                borderRadius="7px 7px 7px 7px"
                h="350px"
                w="100%"
              />
            </Box>
            <Text color="#fff" fontFamily={"primary"} fontSize={"20px"} fontWeight={"semibold"} left={5} position={"absolute"} textShadow="2px 2px #000" top={310} >{hero.name || hero.title}</Text>
          </Box>

        </NextLink>
          :
          <Box
            borderRadius={7}
            boxSizing="border-box"
            h="350px"
            position="relative"
            shadow="3px 5px 10px rgba(0, 0, 0, 0.1)"
          >
            <Box>
              <Box
                bgImage={`url(${image})`}
                bgPos="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                borderRadius="7px 7px 7px 7px"
                h="350px"
                w="100%"
              />
            </Box>
            <Text color="#fff" fontFamily={"primary"} fontSize={"20px"} fontWeight={"semibold"} left={5} position={"absolute"} textShadow="2px 2px #000" top={310} >{hero.name || hero.title}</Text>
          </Box>
        }
      </MotionBox >
    </Box >
  );
};

export default CardHero;
