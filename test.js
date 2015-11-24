import { expect, assert } from 'chai';
import deepKeys from './deep-keys';

describe('deep keys', function() {
  it('should return all the keys on the Object', function() {
      const obj = {
          thing: {
              thing1: {
                  thing2: {
                      thing3: 'cat'
                  }
              }
          }
      };

      expect(deepKeys(obj)).to.eql(['thing', 'thing1', 'thing2', 'thing3']);

  });

  it('should return just one key if an object of depth one is passed', function() {
    const obj = {thing: '1'};
    expect(deepKeys(obj)).to.eql(['thing']);
  });

  it('should throw error if no object is supplied', function() {
      assert.throw(function() {
          deepKeys();
      }, Error);
  });

  it('should throw error if a string is supplied', function() {
      assert.throw(function() {
          deepKeys('string');
      }, Error);
  });

  it('should throw error if an array is supplied', function() {
      assert.throw(function() {
          deepKeys(['array']);
      }, Error);
  });


});
