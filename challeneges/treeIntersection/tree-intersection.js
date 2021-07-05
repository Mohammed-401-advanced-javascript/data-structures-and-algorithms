'use strict'; 

const tree_intersection = (firstTree, secondTree) => {

  let treeIntersection = [];

  let firstArray = firstTree.preOrder();
  let secondArray = secondTree.preOrder();
    
  for(let i=0; i<=firstArray.length; i++){
    if(firstArray.includes(secondArray[i])){
      treeIntersection[treeIntersection.length] = secondArray[i];
    }
  }
  return treeIntersection;
};

module.exports = tree_intersection;