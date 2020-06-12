import React from "react";
import "./BingoCardPage.css";

interface IProps { }

function sample<T>(src: Array<T>, count: number): Array<T> {
  let extracted: Array<T> = [];

  for(let i = 0; i < count; i++) {
    const pick = Math.random() * (src.length - 1);
    extracted = [...extracted, ...src.splice(pick, 1)];
  }

  return extracted;
}

function generateRows(): Array<Array<string>> {
  const entries = [
    "Lots of meetings",
    "Reviewed PRs",
    "Forgot to move the working agreement",
    "What did I do yesterday?",
    "Forgot to unmute",
    "Need PR reviews",
    'Stunned silence after "When did we last do this?"',
    "Someone's cat is visible"
  ];

  const rows = [];

  for(let i = 0; i < 3; i++) {
    if(i === 1) {
      rows.push([...sample(entries, 1), "FREE SPACE", ...sample(entries, 1)]);
    } else {
      rows.push(sample(entries, 3));
    }
  }

  return rows;
}

export const BingoCardPage: React.FC<IProps> = () => {
  const rows = generateRows();

  return (<table className="BingoCard">
    <tbody>
      {rows.map((row, i) => <tr key={`row-${i}`}>{row.map((e, j) => <td key={`row-${i}-cell-${j}`}>{e}</td>)}</tr>)}
    </tbody>
  </table>);
};

export default BingoCardPage;
