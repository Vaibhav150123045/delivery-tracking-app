// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
const baseUrl =
  "http://ec2-3-144-21-198.us-east-2.compute.amazonaws.com:8080/single-day-delivery";

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

export const createOrder = (data) =>
  api.post(`${baseUrl}/order_creation/`, data);

//   {
//     "count": 1,
//     "order_details" : {
//         "seller_id": 9,
//         "society_id": 456,
//         "weight" : 15
//     }
// }

/* seller apis */
export const getAllSellerOrders = (seller_shop_id) =>
  api.get(`${baseUrl}/seller/orders/?seller_shop_id=${seller_shop_id}`);

export const sellerReceive = (data) =>
  api.post(`${baseUrl}/seller/receive/`, data);
//   {
//     "order_number": "ODR-KMWHGXE"
// }

export const sellerMarkTransit = (data) =>
  api.post(`${baseUrl}/order/transit/`, data);

//   {
//     "order_number": "ODR-SJ4H9LA"
// }

/* hub apis */

export const getHubDetails = (hub_id) =>
  api.get(`${baseUrl}/hub/dashboard/?hub_id=${hub_id}`);

export const getAllHubs = () => api.get(`${baseUrl}/hub/all/`);

export const receiveOrder = (data) => api.post(`${baseUrl}/hub/receive/`, data);

export const transitBag = (data) => api.post(`${baseUrl}/bag/transit/`, data);

export const markBagReceive = (data) =>
  api.post(`${baseUrl}/bag/receive/`, data);

export const markBagOfd = (data) => api.post(`${baseUrl}/bag/ofd/`, data);
// {
//   "bag_code": "BAG-QITPJ"
// }

export const orderDelivered = (data) =>
  api.post(`${baseUrl}/order/delivered/`, data);

//   {
//     "order_number": "ODR-KMWHGXE"
// }

export default {
  getHubDetails,
  getAllHubs,
  receiveOrder,
  transitBag,
  markBagReceive,
  markBagOfd,
  orderDelivered,
  getAllSellerOrders,
  sellerReceive,
  sellerMarkTransit,
  createOrder,
};
