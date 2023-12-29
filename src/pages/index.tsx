import { MainLayout } from "@/components/layouts/Main";
import Films from "@/components/templates/Films/index";
import { useState } from 'react';
import { FilmsContext } from "@/components/templates/Films/FilmsContext";

const App = () => {
  const [search, useSearch] = useState("");
  const [genre, useGenre] = useState("all");

  return (
    <FilmsContext.Provider value={{ search, useSearch, genre, useGenre }}>
      <MainLayout>
        <Films />
      </MainLayout>
    </FilmsContext.Provider>
  );
};

export default App;
