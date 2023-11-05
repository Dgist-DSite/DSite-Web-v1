import axios from "axios";
import {Config} from "../config/config";

const dgsiteAxios = axios.create({
  baseURL: Config.SERVER_URL
});

const newsAxios = axios.create({
  baseURL: Config.URL
});

export const getNews = async () => {
  const result = newsAxios({
    method: 'get',
    url: '/everything',
    params: {
      apiKey: Config.NEWS_API_KEY,
      q: '인공지능'
    }
  });
  return result;
};

export const getBoards = async () => {
  const result = await dgsiteAxios({
    method: 'get',
    url: '/all'
  });
  return result;
};

export const getBoardById = async (postId) => {
  const result = await dgsiteAxios({
    method: 'get',
    url: `/board/${postId}`,
  })
  return result;
};

export const getBoardsByCategory = async (category) => {
  const result = await dgsiteAxios({
    method: 'get',
    url: '/category',
    params: {
      what: category
    }
  })
  return result;
}

export const uploadBoard = async (content, category, url) => {
  const result = await dgsiteAxios({
    method: 'post',
    url: '/create',
    data: {
      userName: "익명의 대소고인",
      url: url,
      content: content,
      category: category,
    }
  })
  return result
}