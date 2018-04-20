import fs from 'fs';
import { promisify } from 'util';

const promisifiedWriteFile = promisify(fs.writeFile);

export const writeFile = (path: string, data: any): Promise<void> => {
  console.log('Creating', path);
  return promisifiedWriteFile(path, data);
};