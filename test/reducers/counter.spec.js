import { expect } from 'chai';
import reducer from '../../src/reducers/counter';
import * as types from '../../src/actions/actionTypes';

describe('counter reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).to.deep.equal({
      count: 0,
    });
  });

  it('should handle INCREMENT', () => {
    expect(
      reducer(undefined, { type: 'INCREMENT' })
    ).to.deep.equal({
      count: 1,
    });
  });

  it('should handle DECREMENT', () => {
    expect(
      reducer({ count: 2 }, { type: 'DECREMENT' })
    ).to.deep.equal({
      count: 1,
    });
  });
});
