'use strict';

const LeftJoin = (synonym, antonym) => {
  let results = [];
  for (var i=0; i<synonym.length; i++) {
    var found = false;
    for (var j=0; j<antonym.length; j++) {
      if (synonym[i].key === antonym[j].key) {
        results[results.length] = [synonym[i].key, synonym[i].value, antonym[j].value];
        found = true;
        break;
      }
    }
    if (found === false) {
      results[results.length] = [synonym[i].key, synonym[i].value, null];

    }
  }
  return results;
};

module.exports = LeftJoin;
     