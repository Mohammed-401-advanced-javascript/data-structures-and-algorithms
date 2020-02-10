'use strict'

const breadthFirst = (node) => {
    let result = [];
    let queue = [];

    queue.push(node);

    while (queue.length) {
        let currentNode = queue.shift();
        result.push(currentNode.data);

        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }
    return result;
};