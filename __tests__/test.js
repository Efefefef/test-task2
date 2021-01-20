import { parse, process } from '../src/generate';
import { readFixtureFile } from '../src/io';

const isArrayUnique = arr => new Set(arr).size === arr.length;

describe('Generator results tests', () => {
  const result = process(parse(readFixtureFile('names.json')), parse(readFixtureFile('names1.json')));

  it('Should generate correct result', () => {
    const expected = parse(readFixtureFile('output.json'));
    expect(result).toEqual(expected);
  })

  it.each(result.map(obj => obj["Names1"]))('Should not have duplicates in Names1', (...nameSet) => {
    expect(isArrayUnique(nameSet)).toBeTruthy();
  });
})
