import React from "react";
import "./BingoCardPage.css";
import { useState } from "react";

interface IProps {}
interface IState {
  selected: Array<string>;
}

function sample<T>(src: Array<T>, count: number): Array<T> {
  let extracted: Array<T> = [];

  for (let i = 0; i < count; i++) {
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
    "Someone's cat is visible",
  ];

  const rows = [];

  for (let i = 0; i < 3; i++) {
    if (i === 1) {
      rows.push([...sample(entries, 1), "FREE SPACE", ...sample(entries, 1)]);
    } else {
      rows.push(sample(entries, 3));
    }
  }

  return rows;
}

function toggleSelected(selections: Array<string>, key: string): Array<string> {
  const newSelections = [...selections];
  const indexOf = newSelections.indexOf(key);

  if (indexOf === -1) {
    newSelections.push(key);
  } else {
    newSelections.splice(indexOf, 1);
  }

  return newSelections;
}

export const BingoCardPage: React.FC<IProps> = () => {
  const [rows] = useState(generateRows());
  const [selected, setSelected] = useState([] as Array<string>);

  return (
    <table className="BingoCard">
      <tbody>
        {rows.map((row, i) => (
          <tr key={`row-${i}`}>
            {row.map((e, j) => (
              <td
                className={
                  selected.includes(`row-${i}-cell-${j}`) ? "selected" : ""
                }
                key={`row-${i}-cell-${j}`}
                onClick={() => setSelected(
                  toggleSelected(selected, `row-${i}-cell-${j}`)
                )}
              >
                {e}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BingoCardPage;
