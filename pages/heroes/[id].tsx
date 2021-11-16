import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import {
  Box,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { DataHeroSelect, ListSuperHeroes } from "../../services/Endpoints";
import { ModelDataMarvelGet } from "../../types";
import HeroData from "../../components/HeroData";
import GoBack from "../../components/GoBack";

interface PropsHeroPageStatic {
  dataHero: {
    character: ModelDataMarvelGet;
    comics: ModelDataMarvelGet;
    series: ModelDataMarvelGet;
    stories: ModelDataMarvelGet;
    events: ModelDataMarvelGet;
  };
}
const HeroPageStatic: NextPage<PropsHeroPageStatic> = ({ dataHero }) => {
  const character = dataHero.character.data.results;
  const comics = dataHero.comics.data.results;
  const series = dataHero.series.data.results;
  const stories = dataHero.stories.data.results;
  const events = dataHero.events.data.results;
  return (
    <Box>
      <GoBack />
      {/* Character */}
      <Box>
        {character.map((h) => (
          <Box key={h.id}>
            <Stack
              align="center"
              direction={["column", "column", "column", "column", "row"]}
              justify="center"
            >
              <Box>
                <Image
                  alt={h.name}
                  h="400px"
                  src={`${h.thumbnail.path}.${h.thumbnail.extension}`}
                  w="500px"
                />
              </Box>
              <Box>
                <Text fontSize="30px" fontWeight="semibold">
                  {h.name}
                </Text>
                <Text>{h.description}</Text>
              </Box>
            </Stack>
          </Box>
        ))}
      </Box>
      {/* Comics */}
      <HeroData dataArray={comics} typeTitle="Comics" />
      {/* Series */}
      <HeroData dataArray={series} typeTitle="Series" />
      {/* Stories */}
      <HeroData dataArray={stories} typeTitle="Stories" />
      {/* Events */}
      <HeroData dataArray={events} typeTitle="Events" />
    </Box>
  );
};

export default HeroPageStatic;

export const getStaticPaths: GetStaticPaths = async () => {
  const heroList = await ListSuperHeroes();
  const paths = heroList.data.results.map(({ id }: any) => ({ params: { id: `${id}` } }));
  return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const dataHeroSelect = await DataHeroSelect(params?.id);
  const PropsData = {
    character: dataHeroSelect[0],
    comics: dataHeroSelect[1],
    series: dataHeroSelect[2],
    stories: dataHeroSelect[3],
    events: dataHeroSelect[4],
  };
  return {
    props: {
      dataHero: PropsData,
    },
  };
};
// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//   const data = await DataHeroSelect(query?.id);
//   const PropsData = {
//     character: data[0],
//     comics: data[1],
//     series: data[2],
//     stories: data[3],
//     events: data[4],
//   };
//   return {
//     props: {
//       dataHero: PropsData,
//     },
//   };
// };
