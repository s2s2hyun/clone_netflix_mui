import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import Header from "../components/Pages/Home/Header";
import Features from "../components/Pages/Home/Features";
import FAQ from "../components/Pages/Home/FAQ";
import Footer from "../components/Pages/Home/Footer";
import LoginModal from "../components/Pages/Home/LoginModal";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header openModal={() => setOpen(true)} />
      <Features />
      <FAQ />
      <Footer />
      <LoginModal open={open} CloseModal={() => setOpen(false)} />
    </>
  );
}
