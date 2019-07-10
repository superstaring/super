import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import PointContainer from "./UsePointHook";
import pointType from "./pointType";

const Div = styled.div`
  width: 598px;
  height: 598px;
  margin: 10px auto;
  position: relative;
  border: 1px solid #eee;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 0.2;
  }


  50% {
    transform: rotate(180deg);
    opacity: 0.6;
  }

  100% {
    transform: rotate(360deg);
    opacity: 1;
  }
`;

const pCss = css`
  animation: ${rotate} 2s linear infinite;
`;

const P = styled.p`
  position: absolute;
  width: ${(props: pointType) => props.point.radius * 2}px;
  height: ${(props: pointType) => props.point.radius * 2}px;
  border-radius: ${(props: pointType) => props.point.radius * 4}px;
  background: ${(props: pointType) => props.point.color};
  left: ${(props: pointType) => props.point.x}px;
  top: ${(props: pointType) => props.point.y}px;
  margin: 0;
  ${(props: pointType) => props.point.act && pCss};
`;

const colorFun = () => {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
  var colorNew = color.length === 7 ? color : color + "0";
  return colorNew;
};

export default function Canvas() {
  const { cir, setCir, pointArr } = PointContainer.useContainer();

  useEffect(() => {
    setCir(pointArr);
  }, [pointArr]);

  const onClick = (point: any, index: number) => {
    const arr = [
      ...cir.slice(0, index),
      point
        .move(
          Math.floor(Math.random() * 21 + 4),
          Math.floor(Math.random() * 21 + 4)
        )
        .changeColor(colorFun())
        .changeRadius(Math.floor(Math.random() * 17 + 4))
        .changeAct(false),

      ...cir.slice(index + 1)
    ];

    const beginArr = [
      ...cir.slice(0, index),
      point.changeAct(true),
      ...cir.slice(index + 1)
    ];

    setCir(beginArr);

    setTimeout(() => {
      setCir(arr);
    }, 1500);

    console.log(arr);
  };

  return (
    <Div>
      {cir.map((point: any, index: number) => (
        <P key={index} point={point} onClick={() => onClick(point, index)} />
      ))}
    </Div>
  );
}
