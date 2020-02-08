'use strict'

// creating a node class with properties of value and left and right

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
    }
}

// creating a BinaryTree class
//============================================================================
class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    // implementing a preOrder Method

    preOrder() {
        let Arr = [];
        let _search = (node) => {
            Arr.push(bode.value)
            if (node.left) _search(node.left);
            if (node.right) _search(node.right);
        };


        _search(this.root);
        return Arr;
    }


    // Implementing the inOrder method 
    inOrder() {
        let Arr = [];
        let _search = (node) => {
            if (node.left) _search(node.left);
            Arr.push(node.value)
            if (node.right) _search(node.right);
        }
        _search(this.root);
        return Arr;
    }

    // Implementing the POSTORDER Method

    postOrder() {
        let Arr = []
        let _search = (node) => {
            if (node.left) _search(node.left);
            if (node.right) _search(node.right);
            Arr.push(node.value)
        }
        _search(this.root);
        return Arr
    }
}

// Creating a BinarySearchTree Class
//====================================================================
// Not required in the submission
