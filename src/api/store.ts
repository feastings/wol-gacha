import { type UserData } from '@context/UserContext';

async function fetchUserData(): Promise<UserData> {
  const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
  await delay(2000);
  const partnerCharacterId = localStorage.getItem('partnerCharacterId')
    || `${Math.floor(Math.random() * 3) + 1}`.padStart(2, '0');
  return {
    nickname: localStorage.getItem('nickname') || 'please set a nickname',
    partnerCharacterId
  };
}

async function updateUserData(userData: UserData): Promise<void> {
  const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
  await delay(3000);

  if (userData?.nickname) {
    localStorage.setItem('nickname', userData.nickname);
  }
  if (userData?.partnerCharacterId) {
    localStorage.setItem('partnerCharacterId', userData.partnerCharacterId);
  }
}

export { fetchUserData, updateUserData };
