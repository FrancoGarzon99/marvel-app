import Head from 'next/head';
import type { NextPage, GetServerSideProps } from 'next';
import HeroesGrid from '../components/HeroesGrid';
import MenuNav from '../components/MenuNav';
import { ListSuperHeroes } from '../services/Endpoints';
import { ModelDataMarvelGet } from '../types';
import Pagination from '../components/Pagination';

interface PropsIndex {
  heroList: ModelDataMarvelGet;
}
const Home: NextPage<PropsIndex> = ({ heroList }) => {



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
        <Pagination heroesList={heroList} />
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