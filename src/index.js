/**
 * Chance
 *
 * Give you a result from random calculation by decimal scoring
 *
 * @param {Array} weights List of all object with "weight" parameter
 * @param {*} options Option to show detail or not
 */
const Chance = (weights, options) => {
  /**
   * Prevent not Array given as weight
   */
  if (typeof weights !== 'object') {
    throw Error(
      'Only single Array with contents of object allowed as parameter'
    );
  }

  /**
   * Prevent zero weight on parameter
   */
  if (weights.length === 0) {
    throw Error('Cannot operate with no configuration for weight');
  }

  /**
   * Temporary Weight
   */
  const tempWeight = [];

  /**
   * Create stack of all weight value (ex. 3.20, 0.0001 etc.)
   */
  weights.map(({ weight }) => {
    tempWeight.push(weight);
  });

  /**
   * Calculation process
   *
   * @param {Array} tempWeight Stack of all weight value
   */
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

    /**
     * Send detail if enabled in option
     */
    if (options && options.detail) {
      return Object.assign(weights[index], {
        index: index
      });
    }

    return index;
  };

  /**
   * Return result
   */
  return calculate(tempWeight);
};

export default Chance;
