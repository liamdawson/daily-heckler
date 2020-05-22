export interface TeamMember {
  name: string;
  away?: boolean;
}

export interface Team {
  id: string;
  name: string;
  color: string;
  members: Array<TeamMember>;
}

export const Teams: Array<Team> = [
  {
    id: "neutron",
    name: "Neutron",
    color: "#c377e0",
    members: [
      { name: "Karen" },
      { name: "Kieran" },
      { name: "Liam" },
      { name: "Mac" },
      { name: "Shervin" },
    ]
  },
  {
    id: "proton",
    name: "Proton",
    color: "#ff78cb",
    members: [
      { name: "Damien" },
      { name: "Glenn" },
      { name: "Melissa" },
      { name: "Usama" },
    ]
  }
];
