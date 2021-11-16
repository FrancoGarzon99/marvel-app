import Head from "next/head";
import type { NextPage, GetStaticProps } from "next";
import { ModelDataMarvelGet } from "../../types";
import { ListSuperHeroes } from "../../services/Endpoints";
import HeroesGridStatic from '../../components/HeroesGridStatic';

interface PropsIndex {
  heroList: ModelDataMarvelGet;
}
const Heroes: NextPage<PropsIndex> = ({ heroList }) => {
  return (
    <>
      <Head>
        <title>Marvel App</title>
        <meta content="Marvel App" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main>
        <HeroesGridStatic heroesList={heroList} />
      </main>
    </>
  );
};

export default Heroes;

export const getStaticProps: GetStaticProps = async () => {
  const heroList = await ListSuperHeroes();
  return {
    props: { heroList }, // will be passed to the page component as props
  };
};
// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//   const numberPage = query.page;
//   const heroList = await ListSuperHeroes(numberPage);
//   return {
//     props: {
//       heroList,
//     },
//   };
// };
