const GraphNode = require('./GraphNode');
const TestHelper = require('../utils/TestHelper');

class GraphBuilder {
    static buildDirectedGraph(numNodes, numChildNodes) {
        const root = new GraphNode(TestHelper.random(0, 100));
        const queue = [];
        let node = root;
        for (let i=0; i<numNodes; i++) {
            if (node.children.length >= numChildNodes) {
                node = queue.shift();
            }
            const newNode = new GraphNode(TestHelper.random(0,100));
            node.children.push(newNode);
            queue.push(newNode);
        }
        return root;
    }
}

module.exports = GraphBuilder;
