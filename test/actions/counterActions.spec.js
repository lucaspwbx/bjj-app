import { expect } from 'chai';
import * as actions from '../../src/actions/counterActions';
import * as types from '../../src/actions/actionTypes';

describe('actions', () => {
  it('should create an action to increment counter', () => {
    const expectedAction = {
      type: types.INCREMENT,
    };
    expect(actions.increment()).to.deep.equal(expectedAction);
  });

  it('should create an action to decrement counter', () => {
    const expectedAction = {
      type: types.DECREMENT,
    };
    expect(actions.decrement()).to.deep.equal(expectedAction);
  });
});
