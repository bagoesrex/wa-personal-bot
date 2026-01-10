import axios from "axios";

export function createAxiosClient({ baseURL, headers = {} }) {
  return axios.create({
    baseURL,
    headers,
  });
}
