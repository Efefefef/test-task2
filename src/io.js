import fs from 'fs';
import path from 'path';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const outputFileName = 'output.json';
const getOutputPath = () => path.join(__dirname, '..', 'output', outputFileName);

export const readFixtureFile = (filename) => {
  try {
    return fs.readFileSync(getFixturePath(filename), 'utf-8');
  } catch {
    console.log(`Failure reading fixture file ${filename}`);
  }
}

export const writeResultToOutputFile = (json) => {
  try {
    fs.writeFileSync(getOutputPath(), json);
    console.log('The Result is generated. Please find it in "output" directory')
  } catch {
    console.log('Failure writing the result into file')
  }

}

