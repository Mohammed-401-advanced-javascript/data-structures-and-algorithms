'use strict';

let BinaryTree = require('../binary');

describe('Binary trees tests', () => {
  let tree = null;
   
  beforeAll( () => {
    let firstNode = new Node('A');
    let secondNode = new Node('B');
    let thirdNode = new Node('C');
    let fourthNode = new Node('D');
    let fifthNode = new Node('E');
    let sixthNode = new Node('F');
    let seventhNode = new Node('G');

    firstNode.left = secondNode;
    firstNode.right = thirdNode;
    secondNode.left = fourthNode;
    secondNode.right = fifthNode;
    thirdNode.left = sixthNode;
    thirdNode.right = seventhNode;

    tree = new BinaryTree(firstNode);

    console.log('tree preOrder()',tree.preOrder());
    console.log('tree inOrder()', tree.inOrder());
    console.log('tree postOrder()', tree.postOrder());

  });

  it('Can successfully instantiate an empty tree', () => {
    let testNode = new Node('A'); 
    expect(testNode.value).toEqual('A');
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    let root = new Node('A');

    expect(root.value).toEqual('A');
  });

  it('Can successfully add a left child and right child to a single root node', () => {
    let nodeWithChildren = new Node('A');
    let leftChild = new Node('B');
    let rightChild = new Node('C');

    nodeWithChildren.left = leftChild;
    nodeWithChildren.right = rightChild;
   
    expect(nodeWithChildren.value).toEqual('A');
    expect(nodeWithChildren.left.value).toEqual('B');
    expect(nodeWithChildren.right.value).toEqual('C');
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    let expectedOutput = ['A', 'B', 'D', 'E', 'C', 'F', 'G'];
    let preOrder = tree.preOrder();
    expect(preOrder).toEqual(expectedOutput);
  });
  
  it('Can successfully return a collection from an inorder traversal', () => {
    let expectedOutput = ['D', 'B', 'E', 'A', 'F', 'C', 'G'];
    let inOrder = tree.inOrder();

    expect(inOrder).toEqual(expectedOutput); 
  });
  
  it('Can successfully return a collection from a postorder traversal', () => {
    let expectedOutput = ['D', 'E', 'B', 'F', 'G', 'C', 'A'];
    let postOrder = tree.postOrder();
    
    expect(postOrder).toEqual(expectedOutput);
  });
});


describe('Binary Search Tree tests' , () => {
  let searchTree = null; 
    
  beforeAll( () => {
    let firstNode = new Node(500);
    let secondNode = new Node(400);
    let thirdNode = new Node(600);
    let fourthNode = new Node(350);
    let fifthNode = new Node(450);
    let sixthNode = new Node(550);
    let seventhNode = new Node(650);

    firstNode.left = secondNode;
    firstNode.right = thirdNode;
    secondNode.left = fourthNode;
    secondNode.right = fifthNode;
    thirdNode.left = sixthNode;
    thirdNode.right = seventhNode;
    
    searchTree = new BinarySearchTree(firstNode);
    let output = searchTree.add(375);
    console.log('search tree add()',output);
    console.log('tree inOrder()', searchTree.contain('A'));    
    console.log('tree inOrder(550)', searchTree.contain(550));
  });

  it('Can successfully instantiate an empty tree', () => {
    let testNode = new Node('A'); 
    expect(testNode.value).toEqual('A');
  });

  //   it('Can successfully add a node to a Binary search tree', () => {
  //     let testNode = searchTree.add(100);
  //     expect(testNode).toEqual(100);
  //   });

  it('contain() returns true if the input value is located in the Binary search tree', () => {
    let contain = searchTree.contain(550);

    expect(contain).toBeTruthy();
  });

  it('contain() returns false if the input value is not located in the Binary search tree', () => {
    let contain = searchTree.contain('strs');

    expect(contain).toBeFalsy();
  });


});