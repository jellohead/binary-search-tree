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
    constructor() {
        this.root = null;
        // this.root = arrayOfData[0];
        console.log('this.root = ' + this.root);
    }
    
    insertValue = (value) => {
        console.log('in insert function');
    }
    
    deleteValue = (value) => {
        console.log('in delete function');
    }
    
    find = (value) => {
        console.log('in find function');
    }
    
    levelOrder = (functionParameter) => {
        console.log('in levelOrder');
    }
    
    inorder = (functionParameter) => {
        console.log('in inorder');
    }
    
    preorder = (functionParameter) => {
        console.log('in preorder');
    }
    
    postorder = (functionParameter) => {
        console.log('in postorder');
    }
    
    height = (functionParameter) => {
        console.log('in height');
    }
    
    depth = (functionParameter) => {
        console.log('in depth');
    }
    
    isBalanced = (functionParameter) => {
        console.log('in isBalanced');
    }
    
    rebalance = (functionParameter) => {
        console.log('in rebalance');
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
    //populate tree with balanced binary tree of node objects
    //return level-0 root node
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