import {RoadmapContainer, Node, DetailNode, NodeContainer, PathContainer} from "./RoadmapStyle";
import {Body} from "../common/TextStyle";

const nodeList = [
  {
    id: 0,
    xPos: 5,
    yPos: 10,
    text: '인터넷'
  }, {
    id: 3,
    xPos: 26,
    yPos: 12,
    text: '언어배우기'
  }, {
    id: 4,
    xPos: 26,
    yPos: 30,
    text: '데이터베이스'
  }, {
    id: 5,
    xPos: 10,
    yPos: 56,
    text: '운영체제'
  }, {
    id: 6,
    xPos: 16,
    yPos: 70,
    text: 'API'
  }, {
    id: 7,
    xPos: 50,
    yPos: 66,
    text: '웹 보안'
  }
]

const detailList = [
  {
    id: 1,
    xPos: 11,
    yPos: 15,
    text: 'HTTP란 무엇인가?'
  }, {
    id: 2,
    xPos: 11,
    yPos: 18,
    text: '인터넷 작동 원리'
  }, {
    id: 8,
    xPos: 36,
    yPos: 15,
    text: 'javascript'
  }, {
    id: 9,
    xPos: 36,
    yPos: 18,
    text: 'python'
  }, {
    id: 10,
    xPos: 36,
    yPos: 21,
    text: 'java'
  }, {
    id: 11,
    xPos: 26,
    yPos: 43,
    text: 'RDBMS'
  }, {
    id: 12,
    xPos: 26,
    yPos: 40,
    text: 'NoSQL'
  }, {
    id: 13,
    xPos: 36,
    yPos: 40,
    text: 'ORM'
  }, {
    id: 14,
    xPos: 36,
    yPos: 43,
    text: 'DB 개론'
  }, {
    id: 15,
    xPos: 26,
    yPos: 67,
    text: 'REST'
  }, {
    id: 16,
    xPos: 26,
    yPos: 64,
    text: 'JSON'
  }, {
    id: 17,
    xPos: 26,
    yPos: 61,
    text: 'Auth'
  }, {
    id: 18,
    xPos: 20,
    yPos: 56,
    text: 'OS 작동 원리'
  }, {
    id: 19,
    xPos: 20,
    yPos: 50,
    text: '메모리'
  }, {
    id: 20,
    xPos: 20,
    yPos: 53,
    text: '프로세스'
  }, {
    id: 21,
    xPos: 60,
    yPos: 60,
    text: '해싱알고리즘'
  }, {
    id: 22,
    xPos: 60,
    yPos: 57,
    text: 'SSL/TLS'
  }, {
    id: 23,
    xPos: 60,
    yPos: 54,
    text: 'CORS'
  }
]

const pathList = [
  {
    startNodeId: 0,
    endNodeId: 1,
    type: 3
  }, {
    startNodeId: 0,
    endNodeId: 2,
    type: 3
  }, {
    startNodeId: 3,
    endNodeId: 4,
    type: 1
  }, {
    startNodeId: 0,
    endNodeId: 3,
    type: 1
  }, {
    startNodeId: 4,
    endNodeId: 5,
    type: 0
  }, {
    startNodeId: 5,
    endNodeId: 6,
    type: 3
  }, {
    startNodeId: 6,
    endNodeId: 7,
    type: 2
  }, {
    startNodeId: 3,
    endNodeId: 8,
    type: 3
  }, {
    startNodeId: 3,
    endNodeId: 9,
    type: 3
  }, {
    startNodeId: 3,
    endNodeId: 10,
    type: 3
  }, {
    startNodeId: 4,
    endNodeId: 11,
    type: 1
  }, {
    startNodeId: 4,
    endNodeId: 14,
    type: 1
  }, {
    startNodeId: 5,
    endNodeId: 19,
    type: 2
  }, {
    startNodeId: 6,
    endNodeId: 17,
    type: 2
  }, {
    startNodeId: 7,
    endNodeId: 23,
    type: 2
  }
]

export default function Roadmap() {

  function getNodeById(id) {
    let result;
    nodeList.forEach((i) => {
      if (i.id == id) {
        result = i;
      }
    })
    detailList.forEach((i) => {
      if (i.id == id) {
        result = i;
      }
    })

    return result;
  }

  function generatePath(type) {
    let result;
    switch (type) {
      case 0:
        result = [2, 0, 0, 2];
        break;
      case 1:
        result = [2, 2, 0, 0];
        break;
      case 2:
        result = [0, 2, 2, 0];
        break;
      case 3:
        result = [0, 0, 2, 2];
        break;
    }
    return result;
  }

  return (
    <RoadmapContainer>
      <NodeContainer>
        {nodeList.map((node) => (
          <Node style={{
            left: node.xPos + 'rem',
            top: node.yPos + 'rem'
          }}>
            <Body style={{
              fontSize: '16px'
            }}>{node.text}</Body>
          </Node>
        ))}
        {detailList.map((node) => (
          <DetailNode style={{
            left: node.xPos + 'rem',
            top: node.yPos + 'rem'
          }}>
            <Body>
              {node.text}
            </Body>
          </DetailNode>
        ))}
        {pathList.map((path) => {
          const startNode = getNodeById(path.startNodeId);
          const endNode = getNodeById(path.endNodeId);

          const midStartXPos = startNode.xPos + 4.5;
          const midStartYPos = startNode.yPos + 1.4;

          const midEndXPos = endNode.xPos + 4.5;
          const midEndYPos = endNode.yPos + 1.4;

          const width = Math.abs(midStartXPos - midEndXPos);
          const height = Math.abs(midStartYPos - midEndYPos);

          const startX = Math.min(midStartXPos, midEndXPos);
          const startY = Math.min(midStartYPos, midEndYPos);

          const pathType = generatePath(path.type);

          console.log(pathType[0]);

          const color = '#ddd'

          return (
            <PathContainer style={{
              left: startX + 'rem',
              top: startY + 'rem',
              width: width + 'rem',
              height: height + 'rem',
              borderTop: `${pathType[0]}px solid ${color}`,
              borderRight: `${pathType[1]}px solid ${color}`,
              borderBottom: `${pathType[2]}px solid ${color}`,
              borderLeft: `${pathType[3]}px solid ${color}`,
            }}>

            </PathContainer>
          )
        })}
      </NodeContainer>
    </RoadmapContainer>
  );
}