(function(exports) {
  var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      } else {
        console.log("Test passes")
      }
    },

    isEqual: function(assertiontoCheck, equalityCheck) {
      if(!assertiontoCheck === equalityCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      } else {
        console.log("IsEqual test passes")
      }
    },

    isEquivalent: function(a, b) {
      if (a.length !== b.length) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      } else {
        console.log("isEquivalent test passes")
      }
    },
  };

  exports.assert = assert;
})(this);
