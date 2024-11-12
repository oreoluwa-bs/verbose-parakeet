import axios from "axios";
import attractionService from "./hotel";
import hotelService from "./activity";
import flightService from "./flight";

export const API_ENDPOINT = import.meta.env.VITE_BOOKING_COM_API_URL;
export const api = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 30000,
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_BOOKING_COM_API_KEY ?? "",
    "x-rapidapi-host": import.meta.env.VITE_BOOKING_COM_API_HOST ?? "",
  },
});

api.interceptors.response.use(
  function (response) {
    if (!response.data && !response) {
      throw new Error(
        process.env.NODE_ENV === "development"
          ? "No response"
          : "An unexpected error occured"
      );
    }
    return response;
  },
  async function (error) {
    const { response } = error;

    if (process.env.NODE_ENV === "development") {
      console.error(error.response ?? "Error");
    }

    let message = "An unexpected error occurred";
    if (response) {
      if (response.data) {
        message = response.data.message;
        return Promise.reject(message);
      }
      return Promise.reject(message);
    }
    // return Promise.reject(message);
  }
);

export const booking = Object.freeze({
  attraction: attractionService({ api }),
  hotel: hotelService({ api }),
  flight: flightService({ api }),
  // projects: projectsService({ api }),
});
