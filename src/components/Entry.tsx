import React from "react";
import { FancyHeading } from '.';
import "./Entry.css";

export interface IProps {
  title: string;
}

export const Entry: React.FC<IProps> = ({ title }) => (
  <div className="Entry">
    <FancyHeading color="#ffd0ff">{title}</FancyHeading>
  </div>
);

export default Entry;
