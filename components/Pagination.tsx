import { useEffect } from "react";
import { useRouter } from "next/router";
import { ModelDataMarvelGet } from "../types";
import { Box, Stack, Button } from "@chakra-ui/react";

interface PropsPagination {
  heroesList: ModelDataMarvelGet;
}

const Pagination = ({ heroesList }: PropsPagination) => {
  const router: any = useRouter();
  useEffect(() => {
    if (!router.query.page) {
      router.push("/?page=0");
    }
  }, [router]);
  const pageNumber = parseInt(router.query.page);
  const numbersPages = Math.ceil(heroesList.data.total / heroesList.data.limit);
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
    <Box>
      <Stack
        align="center"
        direction="row"
        justify="center"
        mt="35px"
        spacing={4}
      >
        {pageNumber !== 0 ? (
          <Box>
            <Button onClick={previusPage}>Anterior Pagina</Button>
          </Box>
        ) : (
          <></>
        )}
        {pageNumber < numbersPages && (
          <Box>
            <Button onClick={nextPage}>Siguiente Pagina</Button>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default Pagination;
