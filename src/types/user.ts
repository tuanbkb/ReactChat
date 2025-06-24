export interface User {
  uid: string;
  username: string;
  email: string;
  profilePicturePath: string | undefined;
  createdAt: Date;
}
