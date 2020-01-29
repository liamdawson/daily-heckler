import React from "react";
import "./TeamOrder.css";

interface IMember {
  name: string;
}

interface IProps {
  members: Array<IMember>;
  dayNumber: number;
}

const reverseRing = (start: number, length: number): Array<number> => {
  let maxIndex = length - 1;

  // start: 3 => 3, 2, 1, 0
  const indices = Array(start + 1)
    .fill(start)
    .map((s, ind) => s - ind);

  // start: 3, length: 6 => 5, 4
  const wrapped = Array(maxIndex - start)
    .fill(maxIndex)
    .map((s, ind) => s - ind);

  return indices.concat(wrapped);
};

export const TeamOrder: React.FC<IProps> = ({ members, dayNumber }) => {
  let offset = Math.floor(dayNumber) % members.length;

  return (
    <ul className="TeamOrder">
      {reverseRing(offset, members.length).map(index => (
        <li key={index}>{members[index].name}</li>
      ))}
    </ul>
  );
};

export default TeamOrder;
