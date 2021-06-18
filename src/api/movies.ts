import { config } from "dotenv";
import axios from "../axios";

config();

const API_KEY = process.env.REACT_APP_API_KEY;

export const getMovieId = async (exp: string) => {
  try {
    const response = await axios.get(`SearchMovie/${API_KEY}/${exp}`);
    return response.data.results[0].id;
  } catch (error) {
    console.log(error);
  }
};

export const getMovie = async (exp: string) => {
  try {
    const movieId = await getMovieId(exp);
    const response = await axios.get(`Title/${API_KEY}/${movieId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
