const Chance = (weights, options) => {
  if (typeof weights !== 'object') {
    throw Error(
      'Only single Array with contents of object allowed as parameter'
    );
  }

  if (weights.length === 0) {
    throw Error('Cannot operate with no configuration for weight');
  }

  const tempWeight = [];

  weights.map(({ weight }) => {
    tempWeight.push(weight);
  });

  const calculate = tempWeight => {
    const temp = [],
      rand = Math.random();
    let index,
      summary = 0;

    for (index = 0; index < tempWeight.length - 1; index++) {
      summary += tempWeight[index] / 100.0;
      temp[index] = summary;
    }

    for (index = 0; index < temp.length && rand >= temp[index]; index++);

    if (options && options.detail) {
      return Object.assign(weights[index], {
        index: index
      });
    }

    return index;
  };

  return calculate(tempWeight);
};

export default Chance;
