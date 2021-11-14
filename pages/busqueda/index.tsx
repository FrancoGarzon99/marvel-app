import React, { useState } from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import NextLink from 'next/link';
import { Box, Button, Input, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { ModelDataMarvelGet } from '../../types';
import { Search } from '../../services/Endpoints';
import { useRouter } from 'next/dist/client/router';

interface PropsBusqueda {

}
type HtmlEvent = React.ChangeEvent<HTMLSelectElement>;


const Busqueda: NextPage<PropsBusqueda> = () => {
  const route = useRouter();
  const [value, setValue] = useState("all");
  const [inputText, setInputText] = useState<string>("");
  const [numberPage, setNumberPage] = useState<number>(0);
  const [heroSearch, setHeroSearch] = useState<ModelDataMarvelGet>();
  function InputTextFn(e: React.ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value);
  }
  function SubmitHeroSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    Search(inputText, numberPage).then((res: any) => setHeroSearch(res));
  }

  return (
    <Box>
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
            <Radio value="all">Todos</Radio>
            <Radio value="comics">Comics</Radio>
            <Radio value="series">Series</Radio>
            <Radio value="events">Eventos</Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </Box>
  );
};
export default Busqueda;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  };
};