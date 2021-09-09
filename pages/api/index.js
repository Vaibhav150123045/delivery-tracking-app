// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
// const baseUrl = "https://ba41-103-138-22-2.ngrok.io/single-day-delivery";
const baseUrl = "http://0db7-103-138-22-2.ngrok.io/single-day-delivery";

export function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

const api = axios.create({
  baseURL: baseUrl,
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//on successful response
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("response error", error);
    return Promise.reject(error);
  }
);

export const getHubDetails = (hub_id) =>
  api.get(`${baseUrl}/hub/dashboard/?hub_id=${hub_id}`);

export const getAllHubs = () => api.get(`${baseUrl}/hub/all/`);

export default {
  getHubDetails,
  getAllHubs,
};
