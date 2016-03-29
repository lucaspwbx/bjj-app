import { expect } from 'chai';
import reducer from '../../src/reducers/techniques';
// import * as types from '../../src/actions/actionTypes';

describe('techniques reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      techniques: [],
    };
    expect(
      reducer(undefined, {})
    ).to.deep.equal(expectedState);
  });

  it('should handle ADD_TECHNIQUE', () => {
    const newTechnique = {
      name: 'Foo',
      description: 'Bar',
      position: 'Closed Guard',
    };
    const expectedState = {
      techniques: [newTechnique],
    };
    expect(
      reducer(undefined, { technique: newTechnique, type: 'ADD_TECHNIQUE' })
    ).to.deep.equal(expectedState);
  });
});
