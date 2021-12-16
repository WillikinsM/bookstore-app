import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Books from "../components/books/index.";
import Categories from "../components/categories";
import Header from "../components/header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Books />
    </>
  );
};

export default Home;
