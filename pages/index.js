import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import Header from "../components/Pages/Home/Header";
import Features from "../components/Pages/Home/Features";
import FAQ from "../components/Pages/Home/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <Features />
      <FAQ />
    </>
  );
}