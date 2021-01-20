export const parse = json => JSON.parse(json);
export const stringify = obj => JSON.stringify(obj, null, 2);

const findNamesById = (obj2, id) => obj2.find(obj => obj[id])[id]["Names1"];

export const process = (obj1, obj2) => obj1.map(({ Names1: ids, Names2 }) => {
  const namesByIds = ids.reduce((acc, id) => ([...acc, ...findNamesById(obj2, id)]), []);
  return { "Names1": namesByIds, Names2 };
});

const generate = (json1, json2) => stringify(process(parse(json1), parse(json2)));

export default generate;
