export interface TeamsFile {
  slack?: {
    teamId: string;
  };
  teams: {[k: string]: TeamDetails};
}

export interface Team extends TeamDetails {
  id: string;
}

export interface TeamDetails {
  slack?: {
    teamId?: string;
    channelId: string;
  };
  name: string;
  color: string;
  boardUrl?: string;
  members: Array<TeamMember>;
}

export interface TeamMember {
  name: string;
  slack?: {
    userId: string;
  };
  away?: boolean;
}
