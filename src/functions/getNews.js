//funcion para hacer la peticion a la API con fetch

export const getNews = async (search, page, pageSize) => {
  const API_KEY = "af966e62b0174766ae2ec5c45a67e439";
  const API_HOST = "https://newsapi.org/v2/everything";
  try {
    const respuesta = await fetch(
      `${API_HOST}?q=${search}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}&language=es`
    );
    return respuesta.json();
  } catch (error) {
    return { isError: true };
  }
};
