import {
  RoadmapContainer,
  SuperNode,
  ChildNode,
  NodeContainer,
  PathContainer,
  CategorySelectorContainer, Select, NewSuperNode, PathSelector, NewChildNode, Input, FormContainer
} from "./RoadmapStyle";
import {Body} from "../common/TextStyle";
import {Constant} from "../../util/Constant";
import {Option} from "../post/PostStyle";
import {useEffect, useRef, useState} from "react";
import {addNode, addPath, fixNode, getPath, getRoadMap, removeNode} from "../../service/Service";
import Drawer from "../drawer/Drawer";

const d = false;

export default function Roadmap() {
  const [category, setCategory] = useState(Constant.roadmapList[0]);

  const [pathList, setPathList] = useState([]);
  const [superNodeList, setSuperNodeList] = useState([]);
  const [childNodeList, setChildNodeList] = useState([]);

  const remSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const [remX, setRemX] = useState(0);
  const [remY, setRemY] = useState(0);

  const [mode, setMode] = useState(null); // path, add
  const [isPathing, setIsPathing] = useState(false);

  const [hoveredNode, setHoveredNode] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const [secondNode, setSecondNode] = useState(null);

  const [save, setSave] = useState(0);

  const currentPathType = useRef(0);

  const [isRePath, setIsRePath] = useState(true);

  const [click, setClick] = useState(0);

  const [isSuperNode, setIsSuperNode] = useState(false);
  const [nodeText, setNodeText] = useState('');

  const [clickedPos, setClickedPos] = useState({
    xPos: null,
    yPos: null
  });

  const [clickedNode, setClickedNode] = useState(null);
  const [clickedNodeType, setClickedNodeType] = useState(null);
  const [isDrawer, setIsDrawer] = useState(false);

  function handleClickNode(node, nodeType) {
    setIsDrawer(true);
    if (d) {
      setClickedNodeType(nodeType);
      setClickedNode(node);
      console.log(node);
    }
  }

  function getNodeById(id) {
    let result;
    superNodeList.forEach((i) => {
      if (i.id == id) {
        result = i;
      }
    });

    childNodeList.forEach((i) => {
      if (i.id == id) {
        result = i;
      }
    });

    return result;
  }

  function createNode(nodeText, isSuperNode, clickedPos) {
    let nodeType;
    if (isSuperNode) {
      nodeType = 0;
    } else {
      nodeType = 1;
    }
    addNode(nodeText, nodeType, category, clickedPos.xPos, clickedPos.yPos)
      .then(() => {
        clearAddState();
        node();
      })
      .catch(e => {
        console.log(e);
      });
  }

  function editNode(nodeText, clickedNode) {
    const {id, xPos, yPos} = clickedNode;
    console.log(clickedNode);
    const data = {
      id: id,
      text: nodeText,
      nodeType: clickedNodeType,
      category: category,
      xpos: xPos,
      ypos: yPos,
    }
    console.log(data)
    fixNode(data)
      .then(() => {
        node();
      })
      .catch(e => {
        console.log(e);
      });
  }

  useEffect(() => {
    if (mode === 'add') {
      if (!clickedPos.xPos || !clickedPos.yPos) {
        console.log('clicked new node', isSuperNode, remX, remY);
        setClickedPos({
          xPos: remX,
          yPos: remY
        });
      } else {

      }
    }
  }, [click]);

  function getMixedPathType() {
    if (isRePath) {
      return (currentPathType.current + 2) % 4;
    } else {
      return currentPathType.current;
    }
  }

  function generatePathType(type) {
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

  function generatePathTypeByMouse(startX, startY, endX, endY) {
    if (startX >= endX) {
      if (startY >= endY) {
        return 1;
      } else {
        return 2;
      }
    } else {
      if (startY >= endY) {
        return 0;
      } else {
        return 3;
      }
    }
  }

  useEffect(() => {
    if (mode === 'path') {
      if (secondNode != null) {
        addPath(hoveredNode.id, secondNode.id, getMixedPathType(), category)
          .then((i) => {

          path();
          })
          .catch(e => {
            console.log(e);
          });
      }
      clearPathState();
    }
  }, [save]);

  function clearPathState() {
    setIsPathing(false);
    setIsHovered(false);
    setSecondNode(null);
    setHoveredNode(null);
  }

  function clearAddState() {
    setIsSuperNode(false);
    setNodeText('');
    setClickedPos(() => ({
      xPos: null,
      yPos: null
    }));
  }

  const [key, setkey] = useState('');
  const [keyL, setkeyL] = useState(0);
  useEffect(() => {
    console.log(key);
    if (clickedPos.xPos && clickedPos.yPos) {
      console.log('break');
      return;
    } else {
      console.log('pass');
    }
    if (key === 'q') {
      clearPathState();
      clearAddState();
      setMode('add');
    }
    if (key === 'w') {
      clearPathState();
      clearAddState();
      setMode('path');
    }
    if (key === 'e') {
      clearPathState();
      clearAddState();
      setMode(null);
    }
    if (key === 's') {
      setIsRePath(i => !i);
    }
    if (key === 'a') {
      setIsSuperNode(i => !i);
    }
    if (mode === null) {
      if (key === 'x' && clickedNode) {
        removeNode(clickedNode.id)
          .then(() => {
            node();
          })
          .catch(e => {
            console.log(e);
          });
      }
    }
  }, [keyL]);

  useEffect(() => {
    window.onmouseup = () => {
      setSave(i => i + 1);
    };
    window.onmousedown = () => {
      setClick(i => i + 1);
    }
    window.onkeydown = (e) => {
      if (d) {
        setkey(e.key);
        setkeyL(i => i + 1);
      }
    };
    const handleMouseMove = (e) => {
      setMouseX(e.pageX);
      setMouseY(e.pageY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const calcedX = parseInt(mouseX / remSize) - 14;
    const calcedY = parseInt(mouseY / remSize) - 4;

    if (calcedX != remX || calcedY != remY) {
      setRemX(calcedX);
      setRemY(calcedY);
    }
  }, [mouseX, mouseY]);

  function generatePathData(startNodeId, endNodeId) {
    const startNode = getNodeById(startNodeId);
    const endNode = getNodeById(endNodeId);

    const midStartXPos = startNode.xPos + 4.5;
    const midStartYPos = startNode.yPos + 1.4;

    const midEndXPos = endNode.xPos + 4.5;
    const midEndYPos = endNode.yPos + 1.4;

    const width = Math.abs(midStartXPos - midEndXPos);
    const height = Math.abs(midStartYPos - midEndYPos);

    const startX = Math.min(midStartXPos, midEndXPos);
    const startY = Math.min(midStartYPos, midEndYPos);
    return {startX, startY, width, height};
  }

  function generatePathDataByMouse(startNodeId, endNode) {
    const startNode = getNodeById(startNodeId);

    const midStartXPos = startNode.xPos + 4.5;
    const midStartYPos = startNode.yPos + 1.4;

    const midEndXPos = endNode.xPos;
    const midEndYPos = endNode.yPos;

    const width = Math.abs(midStartXPos - midEndXPos);
    const height = Math.abs(midStartYPos - midEndYPos);

    const startX = Math.min(midStartXPos, midEndXPos);
    const startY = Math.min(midStartYPos, midEndYPos);
    return {startX, startY, width, height};
  }

  function handleCategory(e) {
    const newCategory = e.target.value;
    setCategory(newCategory);
  }

  function node() {
    getRoadMap(category)
      .then((e) => {
        const {superNodeList, childNodeList} = e;
        setChildNodeList(childNodeList);
        setSuperNodeList(superNodeList);
      })
      .catch(e => {
        console.log(e.message);
      });
  }

  function path() {
    getPath(category)
      .then((i) => {
        setPathList(i);
      })
      .catch(e => {
        console.log(e);
      });
  }

  useEffect(() => {
    node();
    path();
  }, [category]);
  return (
    <RoadmapContainer>
      <Drawer isDrawer={isDrawer} setIsDrawer={setIsDrawer}>
      </Drawer>
      <CategorySelectorContainer>
        <Select onChange={handleCategory} value={category}>
          {Constant.roadmapList.map((i) => (
            <Option value={i} key={i}>{i}</Option>
          ))}
        </Select>
      </CategorySelectorContainer>
      {(hoveredNode && isHovered && mode === 'path') || isPathing ?
        <PathSelector
          onMouseDown={() => {
            setIsPathing(true);
          }}
          onMouseOut={() => {
            if (!isPathing) {
              setIsHovered(false);
            }
          }}
          style={{
            left: hoveredNode.xPos + 'rem',
            top: hoveredNode.yPos + 'rem'
          }}/> : null}
      {secondNode ? <PathSelector
        onMouseOut={() => {
          if (secondNode) {
            setSecondNode(null);
          }
        }}
        style={{
          left: secondNode.xPos + 'rem',
          top: secondNode.yPos + 'rem',
        }}
      /> : null}
      {mode === 'add' ? (() => {
        if (isSuperNode) {
          return (
            <NewSuperNode
              style={!clickedPos.xPos || !clickedPos.yPos ? {
                left: remX + 'rem',
                top: remY + 'rem'
              } : {
                left: clickedPos.xPos + 'rem',
                top: clickedPos.yPos + 'rem'
              }}
            >{'new super node'}
            </NewSuperNode>)
        } else {
          return (
            <NewChildNode
              style={!clickedPos.xPos || !clickedPos.yPos ? {
                left: remX + 'rem',
                top: remY + 'rem'
              } : {
                left: clickedPos.xPos + 'rem',
                top: clickedPos.yPos + 'rem'
              }}>
              {'new child node'}
            </NewChildNode>
          );
        };
      })() : null}
      <NodeContainer>
        {(clickedPos.xPos && clickedPos.yPos) || (mode === null && clickedNode) ? (
          <FormContainer style={{
            // left: clickedPos.xPos + 12 + 'rem',
            // top: clickedPos.yPos + 5 + 'rem'
          }}>
          <Input style={{
            zIndex: 300
          }} value={nodeText} onChange={(e) => setNodeText(e.target.value)}/>
          <button style={{
            zIndex: 200
          }} onClick={() => {
            if (mode === null) {
              editNode(nodeText, clickedNode);
            } else {
              createNode(nodeText, isSuperNode, clickedPos);
            }
          }}>
            생성
          </button>
          <button onClick={() => {
            setClickedPos((e) => ({
              xPos: null,
              yPos: null
            }));
          }}>
            취소
          </button>
        </FormContainer>) : null}

        {superNodeList.map((node) => (
          <SuperNode
            onClick={() => {
              handleClickNode(node, 0);
            }}
            onMouseOver={() => {
              setIsHovered(true);
              if (!isPathing) {
                setHoveredNode(node);
              } else {
                setSecondNode(node);
              }
            }}
            style={{
              left: node.xPos + 'rem',
              top: node.yPos + 'rem'
            }}>
            <Body style={{
              fontSize: '16px'
            }}>{node.text}</Body>
          </SuperNode>
        ))}
        {childNodeList.map((node) => (
          <ChildNode
            onClick={() => {
              handleClickNode(node, 1);
            }}
            onMouseOver={() => {
              setIsHovered(true);
              if (!isPathing) {
                setHoveredNode(node);
              } else {
                setSecondNode(node);
              }
            }}
            style={{
              left: node.xPos + 'rem',
              top: node.yPos + 'rem',
            }}>
            <Body>
              {node.text}
            </Body>
          </ChildNode>
        ))}
        {pathList.map((path) => {
          let startX;
          let startY;
          let width;
          let height;
          try {
            const pathData = generatePathData(path.startNodeId, path.endNodeId);
            startX = pathData.startX;
            startY = pathData.startY;
            width = pathData.width;
            height = pathData.height;
          } catch {
            return;
          }
          currentPathType.current = path.type;
          const pathType = generatePathType(path.type);
          const color = '#ddd';
          return (
            <PathContainer
              style={{
                left: startX + 'rem',
                top: startY + 'rem',
                width: width + 'rem',
                height: height + 'rem',
                borderTop: `${pathType[0]}px solid ${color}`,
                borderRight: `${pathType[1]}px solid ${color}`,
                borderBottom: `${pathType[2]}px solid ${color}`,
                borderLeft: `${pathType[3]}px solid ${color}`,
              }}/>
          )
        })}
        {isHovered && isPathing ? (() => {

          let endX;
          let endY;

          if (!secondNode) {
            endX = remX + 0.5;
            endY = remY + 0.5;
          } else {
            endX = secondNode.xPos + 4.5;
            endY = secondNode.yPos + 1.4;
          }

          const {startX, startY, width, height} = generatePathDataByMouse(hoveredNode.id, {
            xPos: endX,
            yPos: endY
          });
          const color = '#097ff6';

          const type = generatePathTypeByMouse(startX, startY, endX, endY);
          currentPathType.current = type;
          const pathType = generatePathType(getMixedPathType());

          return (
            <PathContainer
              style={{
                left: startX + 'rem',
                top: startY + 'rem',
                width: width + 'rem',
                height: height + 'rem',
                borderTop: `${pathType[0]}px solid ${color}`,
                borderRight: `${pathType[1]}px solid ${color}`,
                borderBottom: `${pathType[2]}px solid ${color}`,
                borderLeft: `${pathType[3]}px solid ${color}`,
                borderRadius: 0
              }}/>)
        })() : null}
      </NodeContainer>
    </RoadmapContainer>
  );
};