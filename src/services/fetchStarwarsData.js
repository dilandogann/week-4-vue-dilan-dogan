import axios from 'axios';
export const fetchStarwarsData = async (searchText) => {

  const responseData = axios
  .get("https://swapi.dev/api/starships/", {
    params: searchText ? { search: searchText } : {},
  })
  .then((response) => {return response.data.results});
  
  return responseData;
}
