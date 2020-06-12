import React from "react";
import "./BingoCardPage.css";

interface IProps { }

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

function sample<T>(src: Array<T>, count: number): Array<T> {
  let extracted: Array<T> = [];

  for(let i = 0; i < count; i++) {
    const pick = Math.random() * (src.length - 1);
    extracted = [...extracted, ...src.splice(pick, 1)];
  }

  return extracted;
}

export const BingoCardPage: React.FC<IProps> = () => {
  const rows: Array<Array<string>> = [];

  for(let i = 0; i < 3; i++) {
    if(i === 1) {
      rows.push([...sample(entries, 1), "FREE SPACE", ...sample(entries, 1)]);
    } else {
      rows.push(sample(entries, 3));
    }
  }

  return (<table className="BingoCard">
    {rows.map(row => <tr>{row.map(e => <td>{e}</td>)}</tr>)}
  </table>);
};

export default BingoCardPage;
