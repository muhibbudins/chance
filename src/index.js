const Chance = options => {
  if (typeof options !== 'object') {
    throw Error(
      'Only single Array with contents of object allowed as parameter'
    );
  }

  if (options.length === 0) {
    throw Error('Cannot operate with no configuration for weight');
  }

  const tempWeight = [];
  const tempAction = [];

  options.map(({ weight, action }) => {
    tempWeight.push(weight);
    tempAction.push(action);
  });

  const getRandom = tempWeight => {
    const temp = [],
      rand = Math.random();
    let index,
      summary = 0;

    for (index = 0; index < tempWeight.length - 1; index++) {
      summary += tempWeight[index] / 100.0;
      temp[index] = summary;
    }

    for (index = 0; index < temp.length && rand >= temp[index]; index++);

    return index;
  };

  return getRandom(tempWeight);
};

export default Chance;
