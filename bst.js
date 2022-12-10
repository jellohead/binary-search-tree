// bst.js

const arrayOfData = [10, 7, 4, 23, 8, 9,
    4, 3, 5, 7, 9, 67, 6345, 324]

class Node {
    constructor(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}

class Tree { //tree is an array that will contain node objects
    constructor(value) {
        this.root = new Node(value)
        this.counter = 0
        // console.log('this.root = ' + this.root);
    }

    insertValue(value) {
        console.log('in insert function');
        this.count++
        let newNode = new Node(value)
        const mySearchTree = node => {
            if (value < node.value) {
                if (!node.leftChild) {
                    node.leftChild = newNode
                } else {
                    mySearchTree(node.leftChild)
                }
            } else {
                mySearchTree(node.leftChild)
            }
            if (value > node.value) {
                if (!node.rightChild) {
                    node.rightChild = newNode
                } else {
                    mySearchTree(node.rightChild)
                }
            } else {
                mySearchTree(node.rightChild)
            }


            //compare value to root node value
        };
    }
}


const buildTree = (arrayOfData) => {
    console.log('in buildTree');
    const mySearchTree = new Tree();
    //create new node for each array item
    for (let i = 0; i < arrayOfData.length; i++) {
        console.log(arrayOfData[i]);
        let newNode = new Node(arrayOfData[i],);
        // console.log('newNode = ');
        // console.dir(newNode);
        if (mySearchTree.root === null) {
            //if item is first to be added to empty tree make this root node 
            console.log('Tree is empty. Creating root node')
            mySearchTree.root = newNode;
            console.log('root node =')
            console.log(mySearchTree.root)
        } else {
            mySearchTree.insertValue(newNode);

        };


    }
    return mySearchTree;

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

