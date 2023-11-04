import axios from "axios";
import {Config} from "../config/config";

export const dgsiteAxios = axios.create({
  baseURL: "http://localhost:3000"
});

console.log(Config.NEWS_API_KEY)

export const newsAxios = axios.create({
  baseURL: Config.URL
})

export const getNews = async () => {
  const result = await newsAxios({
    method: 'get',
    url: '/everything',
    params: {
      apiKey: Config.NEWS_API_KEY,
      q: '인공지능'
    }
  })
  console.log(result.data.articles);
}