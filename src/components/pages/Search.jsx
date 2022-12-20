//Pagina de busqueda de noticias

import Searcher from "../Searcher";
import { Grid } from "@mui/material";
import ButtonGoTop from "../ButtonGoTop";
import { useState } from "react";
import * as React from "react";
import "../../App.css";
import NewsList from "../NewsList";

const Search = () => {
  const [search, setSearch] = useState("");
  const onSearch = (criterio) => {
    setSearch(criterio);
  };

  return (
    <Grid
    container
    direction="column"
    className="home"
    justifyContent="center"
    alignItems="center"
    >
    <div className="title"></div>
      <h1>¿Qué Buscamos?</h1>
      <Searcher onSearch={onSearch} />
      <NewsList search={search} />
      <ButtonGoTop />
    </Grid>
  );
}

export default Search;
