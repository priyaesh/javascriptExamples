var assert = require('assert');
var isValidWalk = require('../walkingDir.js');

describe("Solution", function() {
    it("Example Tests", function() {
        assert.equal(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
        //assert.equal(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
        //assert.equal(!isValidWalk(['w','e']), 'should return true');
        //assert.equal(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');
    });
});