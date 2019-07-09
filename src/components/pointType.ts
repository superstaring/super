interface pointType {
  point: {
    x: number;
    y: number;
    radius: number;
    color: string;
    act?: boolean;
    move: () => void;
  };
}

export default pointType;
