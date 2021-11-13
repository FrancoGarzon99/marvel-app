import type { NextPage, GetServerSideProps } from 'next';
import { Box, Container, Stack, Text } from '@chakra-ui/react';
import { DataHeroSelect } from '../../services/Endpoints';
import { ModelDataMarvelGet } from '../../types';

interface PropsHeroPage {
  heroData: ModelDataMarvelGet;
}
const HeroPage: NextPage<PropsHeroPage> = ({ heroData }) => {
  const dataHero = heroData.data.results[0];
  return (
    <Box>
      <Stack align={"center"} justify={"center"} pb={20}>
        <Box>
          <Text>{dataHero.name}</Text>
          <Text>{dataHero.description}</Text>
        </Box>
        <Box>
          <Box bgImage={`url(${dataHero.thumbnail.path}.${dataHero.thumbnail.extension})`} bgRepeat="no-repeat" bgSize="cover" h="400px" w="400px" />
        </Box>
      </Stack>
      <Stack direction={"row"} spacing={4}>
        <Box>
          <Stack>
            <Text>
              Comics
            </Text>
            {dataHero.comics.items.map(c => (
              <Box key={c.name}>
                <Text>{c.name}</Text>
              </Box>
            ))}
          </Stack>
        </Box>
        <Box>
          <Stack>
            <Text>
              Stories
            </Text>
            {dataHero.stories.items.map(c => (
              <Box key={c.name}>
                <Text>{c.name}</Text>
              </Box>
            ))}
          </Stack>
        </Box>
        <Box>
          <Stack>
            <Text>
              Series
            </Text>
            {dataHero.series.items.map(c => (
              <Box key={c.name}>
                <Text>{c.name}</Text>
              </Box>
            ))}
          </Stack>
        </Box>
        <Box>
          <Stack>
            <Text>
              Events
            </Text>
            {dataHero.events.items.map(c => (
              <Box key={c.name}>
                <Text>{c.name}</Text>
              </Box>
            ))}
          </Stack>
        </Box>

      </Stack>
    </Box>
  );
};

export default HeroPage;
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const heroData = await DataHeroSelect(query?.id);
  return {
    props: { heroData }
  };
};