import CryptoJS from 'crypto-js';

export const encryptPassword = (password: string, masterKey: string): string => {
  return CryptoJS.AES.encrypt(password, masterKey).toString();
};

export const decryptPassword = (encryptedPassword: string, masterKey: string): string => {
  const bytes = CryptoJS.AES.decrypt(encryptedPassword, masterKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};