import React from 'react';
import Prando from 'prando';
import moment from 'moment';

interface IMember {
  name: string;
}

interface IProps {
  name: string;
  members: Array<IMember>;
  dateSeed: Date;
}

const BASE_SEED = 1337;

const getYearOrder = (members: Array<IMember>): Array<IMember> => {
  let rng = new Prando(BASE_SEED);
  let final: Array<IMember> = [];

  while (final.length < 366) {
    let copy = Object.assign([], members);

    while (copy.length > 0) {
      let nextIndex = rng.nextInt(0, copy.length - 1);

      final.push(copy[nextIndex]);
      copy.splice(nextIndex, 1);
    }
  }

  console.log(final.map(m => m.name));

  return final;
}

export const TeamOrder: React.FC<IProps> = ({ name, members, dateSeed }) => {
  let distance = moment(dateSeed).dayOfYear() - 1;
  let order = getYearOrder(members);

  return <section>
    <header>{name}</header>
    <ul>
      <li>{order[distance].name}</li>
    </ul>
  </section>
};

export default TeamOrder;
