import { Box, Stack, Avatar, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface PropsFavCard {
  superheroe: { id: number; name: string; image: string };
  DeleteHero: (id: number) => void;
}
const CardFav = ({ superheroe, DeleteHero }: PropsFavCard) => {
  const MotionBox = motion(Box);

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <MotionBox
      border="1px solid #fff"
      borderRadius={7}
      boxSizing="border-box"
      m={6}
      p={4}
      position="relative"
      shadow="3px 5px 10px rgba(0, 0, 0, 0.1)"
      variants={item}
      whileHover={{
        translateY: -7,
        boxShadow: "5px 10px 20px 0px rgba(19,39,118,0.2)",
      }}
    >
      <Box>
        <Stack
          align="center"
          direction={["column", "column", "column", "row"]}
          justify="space-between"
          spacing={2}
        >
          <Stack
            align="center"
            direction={["column", "column", "column", "row"]}
            justify="center"
            spacing={4}
          >
            <Avatar name={superheroe.name} size="xl" src={superheroe.image} />
            <Text fontSize="18px">{superheroe.name}</Text>
          </Stack>
          <Button
            colorScheme="red"
            w="200px"
            onClick={() => DeleteHero(superheroe.id)}
          >
            {" "}
            Eliminar
          </Button>
        </Stack>
      </Box>
    </MotionBox>
  );
};

export default CardFav;
