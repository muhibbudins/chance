const Chance = require('../src/index').default;
const config = [
  {
    weight: 0.00001,
    action: () => {
      return 'Gift A';
    }
  },
  {
    weight: 3.4,
    action: () => {
      return 'Gift B';
    }
  },
  {
    weight: 21.58,
    action: () => {
      return 'Gift C';
    }
  },
  {
    weight: 48.6,
    action: () => {
      return 'Gift D';
    }
  },
  {
    weight: 26.4199,
    action: () => {
      return 'Gift E';
    }
  }
];

describe('Benchmark', () => {
  it('Test with 10.000.000 operation', async (done) => {
    let count = [
      0,
      0,
      0,
      0,
      0,
      0
    ];
    const result = {};

    for (let i = 0; i < 10000000; i++) {
      count[Chance(config)]++;
    }

    config.map((item, index) => {
      result[item.weight] = count[index];
    });

    console.log(
      JSON.stringify(
        result,
        false,
        2
      )
    );

    await done();
  }).timeout(10000);
});
