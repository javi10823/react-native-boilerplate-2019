export const arrayRemove = (array = [], toRemove) => {
  let tempArray = array.slice();

  if (JSON.stringify(tempArray).includes(JSON.stringify(toRemove))) {
    return JSON.parse(
      JSON.stringify(tempArray)
        .replace(JSON.stringify(toRemove), '')
        .split('},]')
        .join('}]')
        .split('",]')
        .join('"]')
        .split('[,')
        .join('[')
        .split(',,')
        .join(',')
    );
  }
  return tempArray;
};

// the function, by default, overwrites matches
export const arrayAdd = (array = [], toAdd, replace = true) => {
  let tempArray = array.slice();
  if (replace) tempArray = arrayRemove(tempArray, toAdd);
  tempArray.push(toAdd);
  return tempArray;
};
