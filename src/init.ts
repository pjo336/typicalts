import path from 'path';
import { writeFile } from './util/writeFile';

interface InitArgs {
  projectName: string;
}

export const init = async (): Promise<void> => {
  const projectName = path.basename(path.resolve('./'));
  runInit({projectName});
};

export const runInit = async(initArgs: InitArgs): Promise<void> => {
  const result = await writeFile('package.json', packageTemplate(initArgs));
  console.log('Remember to run `npm install` before running anything!');
}

const packageTemplate = ({ projectName }: InitArgs): string => {
  return`{
  "name": "${projectName}",
  "version": "0.1.0",
  "description": "",
  "main": "dist/index.js",
  "repository": "",
  "contributors": [],
  "scripts": {
    "build": "tsc"
  },
  "dependencies": {
    "express": "^4.16.3"
  },
  "devDependencies": {
    "@types/node": "^9.6.5",
    "typescript": "^2.8.1"
  }
}`;
};
