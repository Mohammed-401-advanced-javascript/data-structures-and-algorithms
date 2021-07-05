'use strict';

let Node = require('../node.js');
let BinaryTree = require('../binary-tree.js');
let tree_intersection = require ('../tree-intersection.js');

describe('Tree intersection Tests', () => {
  let firstTree = null;
  let secondTree = null;

  beforeAll( () => {
    let firstNode = new Node(150);
    let secondNode = new Node(100);
    let thirdNode = new Node(250);
    let fourthNode = new Node(75);
    let fifthNode = new Node(160);
    let sixthNode = new Node(200);
    let seventhNode = new Node(350);
    let eigthNode = new Node (125);
    let ninthNode = new Node (175);
    let tenthNode = new Node (300);
    let eleventhNode = new Node (500);
        
    let nodeOne = new Node(42);
    let nodeTwo = new Node(100);
    let nodeThree = new Node(600);
    let nodeFour = new Node(15);
    let nodeFive = new Node(160);
    let nodeSix = new Node(200);
    let nodeSeven = new Node(350);
    let nodeEight = new Node(125);
    let nodeNine = new Node(175);
    let nodeTen = new Node(4);
    let nodeEleven = new Node(500);
    
    
    firstNode.left = secondNode;
    firstNode.right = thirdNode;
    secondNode.left = fourthNode;
    secondNode.right = fifthNode;
    thirdNode.left = sixthNode;
    thirdNode.right = seventhNode;
    fifthNode.left = eigthNode;
    fifthNode.right = ninthNode;
    seventhNode.left = tenthNode;
    seventhNode.left = eleventhNode;
    
    nodeOne.left = nodeTwo;
    nodeOne.right = nodeThree;
    nodeTwo.left = nodeFour;
    nodeTwo.right = nodeFive;
    nodeThree.left = nodeSix;
    nodeThree.right = nodeSeven;
    nodeFive.left = nodeEight;
    nodeFive.right = nodeNine;
    nodeSeven.left = nodeTen;
    nodeSeven.right = nodeEleven;
    
    

    firstTree = new BinaryTree(firstNode);
    secondTree = new BinaryTree(nodeOne);

    console.log(firstTree.preOrder());
    console.log(secondTree.preOrder());

    console.log(tree_intersection(firstTree, secondTree));
  });

  it('Node(): Instantiate a new node with a value and a left and right', () => {
    let testNode = new Node(5);
    expect(testNode.value).toEqual(5);
    expect(testNode.left).toBe(null);
    expect(testNode.right).toBe(null);
  });

  it('Binary Tree: Creates a tree with left and right children', () => {
    let nodeWithChildren = new Node('A');
    let leftChild = new Node('B');
    let rightChild = new Node('C');

    nodeWithChildren.left = leftChild;
    nodeWithChildren.right = rightChild;
   
    expect(nodeWithChildren.value).toEqual('A');
    expect(nodeWithChildren.left.value).toEqual('B');
    expect(nodeWithChildren.right.value).toEqual('C');
  });

  it('Binary Tree: can successfully traverse through the trees in a breadthIn method', () => {
    let expectedOutput = [150, 100, 75, 160, 125, 175, 250, 200, 350, 500];
    let preOrder = firstTree.preOrder();
    expect(preOrder).toEqual(expectedOutput);
  });

  it('tree_intersection(): successfully accepts two binary trees, and returns the values that are found in both trees', () => {
    let expectedOutput = [100, 160, 125, 175, 200, 350, 500];
    let treeIntersection = tree_intersection(firstTree, secondTree);
    expect(treeIntersection).toEqual(expectedOutput);
  });
});