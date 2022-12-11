// bst.js

const arrayOfData = [10, 7, 4, 23, 8, 9,
    4, 3, 5, 7, 9, 67, 6345, 324]

const value = 10

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
        // this.root = null
        this.counter = 0
        console.log('this.root = ')
        console.log(this.root);
    }

    insertValue = value => {
        console.log('in insertValue w/ element = ' + value);
        this.counter++
        console.log('this.counter = ' + this.counter)
        let newNode = new Node(value)
        console.log('newNode =')
        console.log(newNode)
        // need to account for empty tree
        const mySearchTree = newNode => {
            console.log('newNode.value = ' + newNode.value)
            if (value < newNode.value) {
                if (!newNode.leftChild) {
                    newNode.leftChild = newNode
                } else {
                    mySearchTree(newNode.leftChild)
                }
            } else {
                mySearchTree(newNode.leftChild)
            }
            if (value > newNode.value) {
                if (!newNode.rightChild) {
                    newNode.rightChild = newNode
                } else {
                    mySearchTree(newNode.rightChild)
                }
            } else {
                mySearchTree(newNode.rightChild)
            }
            console.log('skipped everything in mySearchTree')


            //compare value to root node value
        };
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
}

const buildTree = value => {
    // console.log(arrayOfData)
    console.log('in buildTree');
    let i = 0;
    const mySearchTree = new Tree(arrayOfData[i]);
    //create new node for each array item
    for (i = 1; i < arrayOfData.length; i++) {
        console.log('array element = ' + arrayOfData[i]);
        console.log(mySearchTree)
        mySearchTree.insertValue(arrayOfData[i]);
    }
    return mySearchTree;

    //sort
    //remove duplicates
}

const ready = () => {
    console.log('DOM loaded and parsed');
    const returnedTree = buildTree(value);
    console.log('returnedTree is')
    console.dir(returnedTree);
}

window.addEventListener("DOMContentLoaded", ready);

