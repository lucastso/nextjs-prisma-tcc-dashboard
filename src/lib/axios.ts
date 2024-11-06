import axios from "axios";

export const api = axios.create({
  baseURL: "https://nextjs-prisma-tcc-server.onrender.com",
  headers: {
    'Content-Type': 'application/json'
  }
});
