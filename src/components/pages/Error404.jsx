//Pagina de error 404 que evita que el usuario entre a una ruta no existente
import { Grid } from "@mui/material";

const Error404 = () => {
  return (
    <Grid
      container
      direction="column"
      className="error-404"
      justifyContent="center"
      alignItems="center"
    >
      <h1>Error 404</h1>
      <h2>Page not found</h2>
    </Grid>
  );
}
export default Error404;
