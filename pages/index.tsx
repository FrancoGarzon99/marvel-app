import Head from 'next/head';
import { useEffect, useState } from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import HeroesGrid from '../components/HeroesGrid';
import MenuNav from '../components/MenuNav';
import { ListSuperHeroes } from '../services/Endpoints';
import { Box, Stack, Button } from '@chakra-ui/react';
import { ModelDataMarvelGet } from '../types';

interface PropsIndex {
  heroList: ModelDataMarvelGet;
}
const Home: NextPage<PropsIndex> = ({ heroList }) => {
  const router: any = useRouter();
  useEffect(() => {
    if (!router.query.page) {
      router.push("/?page=0");
    }
  }, [router]);
  const pageNumber = parseInt(router.query.page);
  const numbersPages = Math.ceil(heroList.data.total / heroList.data.limit);
  function nextPage() {
    router.push(`/?page=${pageNumber + 1}`);
  }
  function previusPage() {
    if (router?.query?.page !== "1") {
      router.push(`/?page=${pageNumber - 1}`);
    }
    return;
  }
  return (
    <>
      <Head>
        <title>Marvel App</title>
        <meta content="Marvel App" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main>
        <MenuNav />
        <HeroesGrid heroesList={heroList} />
        <Box>
          <Stack align="center" direction="row" justify="center" mt="35px" spacing={4}>
            {pageNumber !== 0 ? (
              <Box>
                <Button onClick={previusPage}>
                  Anterior Pagina
                </Button>
              </Box>

            ) : (<></>)}
            {pageNumber < numbersPages && <Box>
              <Button onClick={nextPage}>
                Siguiente Pagina
              </Button>
            </Box>
            }
          </Stack>
        </Box>
      </main>
    </>
  );
};

export default Home;


export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const numberPage = query.page;
  const heroList = await ListSuperHeroes(numberPage);
  return {
    props: {
      heroList
    }
  };
};