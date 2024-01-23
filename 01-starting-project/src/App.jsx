import componentsImg from "./assets/components.png";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
    </>
  );
}

export default App;
