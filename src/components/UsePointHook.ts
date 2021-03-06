import { useState } from "react";
import { createContainer } from "unstated-next";
import Point from "./Point";

interface Props {
  x: number;
  y: number;
  radius: number;
  color: string;
  act?: boolean;
}

const colorFun = () => {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
  var colorNew = color.length === 7 ? color : color + "0";
  return colorNew;
};

const pointArr: Array<Props> = [];

for (var i = 0; i < 100; i++) {
  const point = new Point(
    Math.random() * (587 + 1 - 0) + 0,
    Math.random() * (587 + 1 - 0) + 0,
    5,
    colorFun()
  );
  pointArr.push(point);
}

function UsePointHook() {
  const [show, setShow] = useState(false);

  const [cir, setCir] = useState(pointArr);

  return { show, setShow, cir, setCir, pointArr };
}

const PointContainer = createContainer(UsePointHook);

export default PointContainer;
