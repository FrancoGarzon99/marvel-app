import type { NextPage, GetServerSideProps } from 'next';
import { Box, Container, Image, Stack, Text, SimpleGrid } from '@chakra-ui/react';
import { DataHeroSelect } from '../../services/Endpoints';
import { ModelDataMarvelGet } from '../../types';
import HeroData from '../../components/HeroData';
import GoBack from '../../components/GoBack';

interface PropsHeroPage {
  dataHero: {
    character: ModelDataMarvelGet;
    comics: ModelDataMarvelGet;
    series: ModelDataMarvelGet;
    stories: ModelDataMarvelGet;
    events: ModelDataMarvelGet;
  };
}
const HeroPage: NextPage<PropsHeroPage> = ({ dataHero }) => {
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
        {character.map(h => (
          <Box key={h.id}>
            <Stack align="center" direction={["column", "column", "column", "column", "row"]} justify="center">
              <Box>
                <Image alt={h.name} h="400px" src={`${h.thumbnail.path}.${h.thumbnail.extension}`} w="500px" />
              </Box>
              <Box>
                <Text fontSize="30px" fontWeight="semibold" >{h.name}</Text>
                <Text >{h.description}</Text>
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

export default HeroPage;
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const data = await DataHeroSelect(query?.id);
  const PropsData = {
    character: data[0],
    comics: data[1],
    series: data[2],
    stories: data[3],
    events: data[4],
  };
  return {
    props: {
      dataHero: PropsData
    }
  };
};