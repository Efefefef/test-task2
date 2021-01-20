import { parse, process } from '../src/generate';
import { readFixtureFile } from '../src/io';

test('Should generate correct output.json file', () => {
  const result = process(parse(readFixtureFile('names.json')), parse(readFixtureFile('names1.json')));
  const expected = parse(readFixtureFile('output.json'));
  expect(result).toEqual(expected);
});
