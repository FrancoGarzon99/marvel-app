import { Box, Text, SimpleGrid, Image } from "@chakra-ui/react";

interface Props {
  dataArray: Array<any>;
  typeTitle: string;
}

const HeroData = ({ dataArray, typeTitle }: Props) => {
  return (
    <Box>
      <Text fontSize="30px" fontWeight={"bold"}>
        {typeTitle}
      </Text>
      <SimpleGrid columns={4} minChildWidth="280px" p={8} spacing={"20px"}>
        {dataArray.length > 0 ? (
          dataArray.map((c) => (
            <Box key={c.id}>
              <Image
                alt={c.name}
                h="400px"
                src={`${c.thumbnail.path}.${c.thumbnail.extension}`}
                w="400px"
              />
              <Text fontSize="16px" fontWeight="medium">
                {c.title}
              </Text>
            </Box>
          ))
        ) : (
          <Text>No se encontraron resultados</Text>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default HeroData;
