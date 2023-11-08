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
};

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
  });
  return result;
};

export const getRoadMap = async (category) => {
  const result = await dgsiteAxios({
    method: 'get',
    url: `/roadmap/node/category?what=${category}`,
  });

  let superNodeList = [];
  let childNodeList = [];

  result.data.data.forEach((i) => {
    const {id, text, nodeType, category, xpos, ypos} = i;
    const ss = {
      id: id,
      xPos: xpos,
      yPos: ypos,
      text: text,
    }
    if (nodeType == 0) {
      superNodeList.push(ss);
    } else if (nodeType == 1) {
      childNodeList.push(ss);
    }
  });
  return {
    superNodeList: superNodeList,
    childNodeList: childNodeList
  };
};

export const addNode = async (text, nodeType, category, xpos, ypos) => {
  console.log(text, nodeType, category, xpos, ypos);
  const result = await dgsiteAxios({
    method: 'post',
    url: `/roadmap/node/`,
    data: {
      text: text,
      nodeType: nodeType,
      category: category,
      xpos: xpos,
      ypos: ypos,
    }
  })
  return result;
};

export const fixNode = async (node) => {
  const result = await dgsiteAxios({
    method: 'put',
    url: `/roadmap/node/`,
    data: node,
  });
  return result;
}

export const removeNode = async (id) => {
  const result = await dgsiteAxios({
    method: 'delete',
    url: `/roadmap/node/${id}`,
  })
  return result;
}


export const getPath = async (category) => {
  const result = await dgsiteAxios({
    method: 'get',
    url: `/roadmap/path/category?what=${category}`
  });
  console.log(result.data.data);
  return result.data.data;
};

export const addPath = async (startNodeId, endNodeId, type, category) => {
  const result = await dgsiteAxios({
    method: 'post',
    url: `/roadmap/path/`,
    data: {
      startNodeId: startNodeId,
      endNodeId: endNodeId,
      type: type,
      category
    }
  });
  return result;
}

export const addNodeBoard = async (nodeId, url) => {
  const result = await dgsiteAxios({
    method: 'post',
    url: `/roadmap/board/`,
    data: {
      nodeId: nodeId,
      url: url,
    }
  });
  return result;
};

export const getNodeBoard = async (nodeId) => {
  const result = await dgsiteAxios({
    method: 'get',
    url: `/roadmap/board/${nodeId}`
  });
  return result.data.data;
};