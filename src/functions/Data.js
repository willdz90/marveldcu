import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";


// const { REACT_APP_SERVER } = process.env;
const REACT_APP_SERVER = "https://gateway.marvel.com/";
const REACT_APP_PUBLIC = "84319dd0fede317df25f60367dca2880";
const REACT_APP_HASH = "e18f405b4993489806185de4fe2553ac";
const REACT_APP_COMPLEMENTURL = "v1/public/comics";
const REACT_APP_TS = "1684794419"

export async function fetchingData(
        offset = 0,
        limit = 5,

    ) {
      try {
        const dataTest = await axios.get(
          `${REACT_APP_SERVER}/${REACT_APP_COMPLEMENTURL}?ts=${REACT_APP_TS}&apikey=${REACT_APP_PUBLIC}&hash=${REACT_APP_HASH}&offset=${offset}&limit=${limit}`
        );
    
        return dataTest;
      } catch (error) {
        return error;
      }
    }

export const useFetchPets = (filters) => {
  return useQuery(["pets", filters], async () => await fetchingData(filters), {
    refetchOnWindowFocus: false,
  });
};

// function passArrayByUrl(filterArray) {
//   var auxString = "{";
//   if (filterArray.length !== 0) {
//     filterArray.forEach((g) => {
//       auxString += `%22${g}%22,`;
//     });
//     auxString = auxString.substring(0, auxString.length - 1);
//     auxString += "}";
//   }
//   return auxString;
// }

// async function favoritesPetsDetails({ id }) {
//   let dataFavorites =
//     id && id.map((id) => axios.get(`${REACT_APP_SERVER}/pets/${id}`));
//   const arrayDetails = await Promise.all(dataFavorites);
//   return arrayDetails;
// }
