import axios from 'axios';
export const fetchStarshipData = async (searchText) => {

  const responseData = axios
  .get("https://swapi.dev/api/starships/", {
    params: searchText ? { search: searchText } : {},
  })
  .then((response) => {return response.data});

  return responseData;
}
