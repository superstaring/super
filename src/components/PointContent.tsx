import React from "react";
import styled from "styled-components";
import PointContainer from "./UsePointHook";
import Canvas from "./Canvas";

const Button = styled.button`
  border: 1px solid #eee;
  cursor: pointer;
  background: #fff;
  min-width: 100px;
  height: 40px;
  line-height: 40px;
  margin: 5px auto;
`;

function PointContent() {
  const { show, setShow } = PointContainer.useContainer();

  const onClick = () => {
    setShow(!show);
  };

  return (
    <>
      <Button onClick={onClick}>按钮</Button>
      {show && <Canvas />}
    </>
  );
}

export default PointContent;
