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
        // this.root = null
        this.count = 1
        // console.log('this.root = ')
        // console.log(this.root);
    }

    insertValue = value => {
        // console.log('in insertValue w/ element = ' + value);
        this.count++
        let newNode = new Node(value)
        const searchTree = node => {
            if (value < node.value) {
                if (!node.leftChild) {
                    node.leftChild = newNode
                } else {
                    searchTree(node.leftChild)
                }
            }
            else if (value > node.value) {
                if (!node.rightChild) {
                    node.rightChild = newNode
                } else {
                    searchTree(node.rightChild)
                }
            }
        };
        searchTree(this.root)
    }

    deleteValue = (value) => {
        console.log('in delete function');
    }

    find = value => {
        let result
        console.log('in find function with value = ' + value);
        const searchTree = node => {
            console.log('current node is')
            console.log(node)
            if (value === node.value) {
                console.log('Found the node with ' + value)
                console.log(node)
                result = node
                // return node;

            } else if (value < node.value) {
                console.log('in value < node.value')
                if (!node.leftChild) {
                    console.log('in !node.leftChild')
                    node.leftChild = node
                    return node
                } else {
                    console.log('recursive through node.leftChild')
                    searchTree(node.leftChild)
                }
            } else if (value > node.value) {
                console.log('in value > node.value')
                if (!node.rightChild) {
                    node.rightChild = node
                } else {
                    searchTree(node.rightChild)
                }
            }
            // result = 'no match found'
            return result
        };

        searchTree(this.root)
        return result
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

const buildTree = dataSet => {
    console.log('in buildTree')
    let i = 0;
    const bst = new Tree(dataSet[i])
    for (i = 1; i < dataSet.length; i++) {
        bst.insertValue(dataSet[i])
    }
    return bst
}

const ready = () => {
    console.log('DOM loaded and parsed');
    const returnedTree = buildTree(arrayOfData);
    console.log('returnedTree is')
    const searchResult = returnedTree.find(4)
    console.dir(searchResult)
    console.log('back from find function')
}

window.addEventListener("DOMContentLoaded", ready);

// const arrayOfData = [10, 7, 4, 23, 8, 9,
//     4, 3, 5, 7, 9, 67, 6345, 324]

// const bst = new Tree(10)

// bst.insertValue(7)
// bst.insertValue(4)
// bst.insertValue(23)


// deleteValue = (value) => {
//     console.log('in delete function');
// }

// find = (value) => {
//     console.log('in find function');
// }

// levelOrder = (functionParameter) => {
//     console.log('in levelOrder');
// }

// inorder = (functionParameter) => {
//     console.log('in inorder');
// }

// preorder = (functionParameter) => {
//     console.log('in preorder');
// }

// postorder = (functionParameter) => {
//     console.log('in postorder');
// }

// height = (functionParameter) => {
//     console.log('in height');
// }

// depth = (functionParameter) => {
//     console.log('in depth');
// }

// isBalanced = (functionParameter) => {
//     console.log('in isBalanced');
// }