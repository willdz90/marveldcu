import { useQuery } from "@tanstack/react-query";
import axios from "axios";


// const { REACT_APP_SERVER } = process.env;
const REACT_APP_SERVER = "https://gateway.marvel.com/";
const REACT_APP_PUBLIC = "84319dd0fede317df25f60367dca2880";
const REACT_APP_HASH = "e18f405b4993489806185de4fe2553ac";
const REACT_APP_COMPLEMENTURL = "v1/public/characters";
const REACT_APP_COMPLEMENTURLDETAILS = "v1/public/characters";
const REACT_APP_TS = "1684794419"

const urlById = "https://gateway.marvel.com/v1/public/characters/1009146?ts=1684794419&apikey=84319dd0fede317df25f60367dca2880&hash=e18f405b4993489806185de4fe2553ac"

export async function fetchingData(
        limitInf,
        limit,
    ) {
      try {
        const dataTest = await axios.get(
          `${REACT_APP_SERVER}/${REACT_APP_COMPLEMENTURL}?ts=${REACT_APP_TS}&apikey=${REACT_APP_PUBLIC}&hash=${REACT_APP_HASH}&limit=${limit}`
        );
        const response = dataTest.data.data.results;
        const infoRequested = response.slice(limitInf, limit)
        return infoRequested;
      } catch (error) {
        return error;
      }
}

export async function fetchingComicDetails(id){
  try {
    if(id){
      const comicDetails = await axios.get(
        `${REACT_APP_SERVER}/${REACT_APP_COMPLEMENTURLDETAILS}/${id}?ts=${REACT_APP_TS}&apikey=${REACT_APP_PUBLIC}&hash=${REACT_APP_HASH}`
      );
      console.log('comicDetails :>> ', comicDetails);
      return comicDetails
    }
  } catch (error) {
    return error
  }
}

export const useFetchData = (limitInf, limit) => {
  return useQuery(["data"], async () => await fetchingData(limitInf, limit), {
    refetchOnWindowFocus: false,
  });
};

export const useFetchDetails = (id) => {
  return useQuery(["data"], async () => await fetchingComicDetails(id),{
    refetchOnWindowFocus: false,
  })
}

// async function favoritesPetsDetails({ id }) {
//   let dataFavorites =
//     id && id.map((id) => axios.get(`${REACT_APP_SERVER}/pets/${id}`));
//   const arrayDetails = await Promise.all(dataFavorites);
//   return arrayDetails;
// }
