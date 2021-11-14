import React, { useState } from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import { Box, Button, Input, Radio, RadioGroup, Stack, Text, SimpleGrid } from '@chakra-ui/react';
import { ModelDataMarvelGet } from '../../types';
import { Search } from '../../services/Endpoints';
import CardHero from '../../components/CardHero';
import GoBack from '../../components/GoBack';

interface PropsBusqueda {

}
const Busqueda: NextPage<PropsBusqueda> = () => {

  const [value, setValue] = useState("character");
  const [inputText, setInputText] = useState<string>("");
  const [numberPage, setNumberPage] = useState<number>(0);
  const [heroSearch, setHeroSearch] = useState<ModelDataMarvelGet>();

  function InputTextFn(e: React.ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value);
  }
  function SubmitHeroSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    Search(inputText, numberPage, value).then((res: any) => setHeroSearch(res));
  }
  function addFavType() {

  }
  return (
    <Box>
      <GoBack />
      <Stack align="center" direction={"row"} justify="space-between" py={6} spacing={2}>
        <Box alignItems={"center"} display={"flex"}>
          <form onSubmit={SubmitHeroSearch}>
            <Box display={"flex"} pl={4} >
              <Input list="heroes" name="heroes" position="relative" onChange={InputTextFn} />
              <Button colorScheme="blue" ml={2} type="submit">Buscar</Button>
            </Box>
          </form>
        </Box>
        <Box>
          <RadioGroup value={value} onChange={setValue}>
            <Stack direction="row">
              <Radio value="character">Personaje</Radio>
              <Radio value="comics">Comics</Radio>
              <Radio value="series">Series</Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </Stack>
      <Box>
        <SimpleGrid columns={4} minChildWidth="280px" p={8} spacing={"20px"}>
          {heroSearch?.data.total === 0 ? <Text>No se encontraron resultados</Text> : heroSearch?.data?.results.map(data => (
            <CardHero key={data.id} activeFn={false} addFav={addFavType} hero={data} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
export default Busqueda;