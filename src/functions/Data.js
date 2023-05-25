import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "dotenv/config";

const {REACT_APP_SERVER} = process.env;
const {REACT_APP_PUBLIC} = process.env;
const {REACT_APP_HASH} = process.env;
const {REACT_APP_COMPLEMENTURL} = process.env;
const {REACT_APP_COMPLEMENTURLDETAILS} = process.env;
const {REACT_APP_TS} = process.env;

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
