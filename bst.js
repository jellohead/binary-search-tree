// bst.js

const arrayOfData = [10, 7, 4, 23, 8, 9,
    4, 3, 5, 7, 9, 67, 6345, 324]

class Node {
    constructor(data) {
        this.value = null;
        this.leftChild = null;
        this.rightChild = null;
    }
}

class Tree { //tree is an array that will contain node objects
    constructor(arrayOfData) {
        this.root = null;
        // console.log('this.root = ' + this.root);
    }

    insertValue = (value) => {
        console.log('in insert function');
        //compare value to root node value
    };
}

const buildTree = (arrayOfData) => {
    console.log('in buildTree');
    const mySeachTree = new Tree(arrayOfData);
    console.log(mySeachTree);
    //loop through arrayOfData
    //create new node for each array item
    for (let i = 0; i < arrayOfData.length; i++) {
        console.log(arrayOfData[i]);
        let newNode = new Node(arrayOfData[i]);
        console.log(newNode);
        if (mySeachTree.root === null) {
            //if item is first to be added to empty tree make this root node 
            console.log('Tree is empty. Creating root node')
            mySeachTree.root = newNode;
            console.log('root node =')
            console.log(mySeachTree.root)
        } else {
        insertValue(newNode);
        
        };



    }
    return mySeachTree;

    //sort
    //remove duplicates
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


const ready = () => {
    console.log('DOM loaded and parsed');
    const returnedTree = buildTree(arrayOfData);
    console.log('returnedTree is')
    console.dir(returnedTree);
}

window.addEventListener("DOMContentLoaded", ready);

// onDOMContentLoaded = (event) => {
    
// }