import { expect } from 'chai';
import * as actions from '../../src/actions/techniqueActions';
import * as types from '../../src/actions/actionTypes';

describe('actions', () => {
  it('should create an action to add a technique', () => {
    const newTechnique = {
      name: 'Foo',
      description: 'Bar',
      position: 'Closed Guard',
    };
    const expectedAction = {
      technique: newTechnique,
      type: types.ADD_TECHNIQUE,
    };
    expect(actions.addTechnique(newTechnique)).to.deep.equal(expectedAction);
  });
});
