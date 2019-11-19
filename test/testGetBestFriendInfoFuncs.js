const assert = require("assert");
const makeStucture = require("../src/getBestFriendInfoFuncs.js").makeStucture; 
const checkValidation = require("../src/getBestFriendInfoFuncs.js").checkValidation;

describe("test makeStucture", function(){
  it("should return a object added with given object with the key of given list's first element", function(){
    assert.deepStrictEqual(makeStucture({}, ["rahit", "prabir", "rita", "avirup"]), {rahit : {father : "prabir", mother : "rita", bestFriend : "avirup"}});
  })
})

describe("test checkValidation", function(){
  it("should ")

