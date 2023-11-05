import axios from "axios";
import {Config} from "../config/config";

export const dgsiteAxios = axios.create({
  baseURL: Config.SERVER_URL
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

export const getPosts = async () => {
  const result = await dgsiteAxios({
    method: 'get',
    url: '/all'
  });
  return result;
}

export const getPostById = async (postId) => {
  const result = await dgsiteAxios({
    method: 'get',
    url: `/board/${postId}`,
  })
  console.log('getPostById', result);
  return result;
};

export const getPostsByCategory = async (category) => {
  const result = await dgsiteAxios({
    method: 'get',
    url: 'category',
    params: {
      what: category
    }
  })
}