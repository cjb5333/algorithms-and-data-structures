const GraphBuilder = require('./GraphBuilder');

function hasRouteBetweenNodes (startNode, endNode) {
    if (startNode === endNode) return true;
    
    const visited = new Map();
    const queue = [];
    let node = startNode;

    while (node) {
        node.children.forEach(n => {
            if (n === endNode) return true;
            if (!visited.has(n)) {
                queue.push(n)
            }
        });
        visited.set(node, true);
        node = queue.shift();
    }

    return false;
}

const node1 = GraphBuilder.buildDirectedGraph(20, 5);
let node2 = node1.children[2].children[1];

console.log(hasRouteBetweenNodes(node1, node2));