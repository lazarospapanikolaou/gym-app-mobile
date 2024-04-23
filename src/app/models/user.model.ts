export interface User {
    id: number,
    email: string;
    firstName?: string;
    lastName?: string;
    accessToken: string;
    token?: string | null;
  }
  