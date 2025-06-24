import { createContext } from 'react';

export type UserData = {
  nickname: string,
  partnerCharacterId: string,
} | null;

const UserContext = createContext<UserData>(null);

export default UserContext;
