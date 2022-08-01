var assert = require('assert') 
var baseNpmLib = require('../dist/index');
var sinon = require('sinon');

// describe('Convert number to word', function() {
//   it('should return word', function() {
//     var spy = sinon.spy(console, 'log');
//     baseNpmLib.num2wordKZ(1);
//     assert(spy.calledWith('hello name'));
//     spy.restore();
//   });
// });