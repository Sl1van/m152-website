import type { AppProps } from "next/app";
import React from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
