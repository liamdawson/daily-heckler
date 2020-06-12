import { TeamMember, Team, TeamsFile } from "./team";
import teamsFileJson from "./teams.json";

const teamsFile = teamsFileJson as TeamsFile;
console.log(teamsFile);

const teamIds = Object.keys(teamsFile['teams']);
export const Teams: Array<Team> = teamIds.map((id) => ({id, ...teamsFile['teams'][id]}));
export type { Team, TeamMember };
