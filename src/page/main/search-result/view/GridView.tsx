import React from "react";

export interface IGridViewProps {
  children: JSX.Element[];
}

const GridView: React.FC<IGridViewProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default GridView;

