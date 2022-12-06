// bst.js

const arrayOfData = [10, 7, 4, 23, 8, 9,
    4, 3, 5, 7, 9, 67, 6345, 324]

class Node {
    constructor(data) {
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }
}

class Tree { //tree is an array that will contain node objects
    constructor(arrayOfData) {
        this.root = arrayOfData[0];
        console.log('this.root = ' + this.root);
    }
}

const buildTree = (arrayOfData) => {
    console.log('in buildTree');
    const mySeachTree = new Tree(arrayOfData);
    console.log(mySeachTree);
    for (let i = 1; i < arrayOfData.length; i++) {
        console.log(arrayOfData[i]);
        let newNode = new Node(arrayOfData[i]);
        console.log(newNode);


    }
    return mySeachTree;

    //sort
    //remove duplicates
}

const insertValue = (value) => {
    console.log('in insert function');
}

const deleteValue = (value) => {
    console.log('in delete function');
}

const find = (value) => {
    console.log('in find function');
}

const levelOrder = (functionParameter) => {
    console.log('in levelOrder');
}

const inorder = (functionParameter) => {
    console.log('in inorder');
}

const preorder = (functionParameter) => {
    console.log('in preorder');
}

const postorder = (functionParameter) => {
    console.log('in postorder');
}

const height = (functionParameter) => {
    console.log('in height');
}

const depth = (functionParameter) => {
    console.log('in depth');
}

const isBalanced = (functionParameter) => {
    console.log('in isBalanced');
}

const rebalance = (functionParameter) => {
    console.log('in rebalance');
}

const ready = () => {
    console.log('DOM loaded and parsed');
    const returnedTree = buildTree(arrayOfData);
    console.log('returnedTree is')
    console.dir(returnedTree);
}

window.addEventListener("DOMContentLoaded", ready);

// onDOMContentLoaded = (event) => {
    
// }