import { UnitTest } from './unit-test';

describe('unit-test', () => {
  const unitTestObj = new UnitTest();

  it('should have counter set to 0', () => {
    expect(unitTestObj.counter).toBe(0);
  });

  it('should have increment the counter by 1 when increaseCounter is excuted', () => {
    unitTestObj.increaseCounter();
    expect(unitTestObj.counter).toBe(1);
  });

});

