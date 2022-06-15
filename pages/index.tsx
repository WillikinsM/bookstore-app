import type { NextPage } from "next";
import Books from "../components/books";
import Categories from "../components/categories";
import Header from "../components/header";
import dataStore from "../stores/DataStore";
import { observer } from "mobx-react-lite";
import { Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Home: NextPage = observer(() => {
  const [page, setPage] = useState(false);
  let pageChange = dataStore.bookIsActive;

  useEffect(() => {
    setPage(pageChange);
  }, [pageChange]);

  return page ? (
    <>
      <Header />
      <Books />
      <Spacer mb={50} />
    </>
  ) : (
    <>
      <Header />
      <Categories />
      <Spacer mb={50} />
    </>
  );
  
  
});

export default Home;
