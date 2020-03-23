import React, { CSSProperties } from "react";
import "./FancyHeading.css";

interface IProps {
  color?: string;
}

export const FancyHeading: React.FC<IProps> = ({ children, color }) => {
  return <h1 className="FancyHeading" style={{'--fancy-heading-color': color || '#ffffff'} as CSSProperties}>{children}</h1>;
};

export default FancyHeading;
