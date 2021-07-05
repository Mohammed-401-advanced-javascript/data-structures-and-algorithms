'use strict';

class BinaryTree {
  constructor(root=null) {
    this.root = root;
  }
  preOrder(){
    let traverseArray = []; 
    let _traverse = (node) => {
      traverseArray[traverseArray.length] = node.value;
  
      if(node.left) _traverse(node.left);
      if(node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return traverseArray;
  }
}

module.exports = BinaryTree;