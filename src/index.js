import generate from './generate';
import { readFixtureFile, writeResultToOutputFile } from './io';

writeResultToOutputFile(generate(readFixtureFile('names.json'), readFixtureFile('names1.json')));
