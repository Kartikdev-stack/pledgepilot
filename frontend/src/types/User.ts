export interface User {
  firstName: string;
  lastName: string;
  role?: string;
  emailAddress: string;
  profilePicture?: Buffer;
  aboutMe?: string;
  projectsFollowed: string[]; // Array of Campaign IDs
  createdProjects: string[]; // Array of Campaign IDs
  accountCreationDate?: string;
  hashedPassword: string;
  refreshToken?: string;
  salt: string;
  stats?: {
    totalPledged: number;
    successfulBackedProjects: number;
    createdProjectsCount: number;
    totalRaised: number;
  };
}