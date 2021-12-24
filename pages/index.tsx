import type { NextPage } from "next";

import Books from "../components/books";
import Categories from "../components/categories";
import Header from "../components/header";
import dataStore from "../stores/DataStore";
import { observer } from "mobx-react-lite";

const Home: NextPage = observer(() => {
  let shouldRender: boolean = dataStore.bookIsActive;

  return (
    <>
      <Header />
      {(shouldRender === true && <Books />) ||
        (shouldRender === false && <Categories />)}
    </>
  );
});

export default Home;
