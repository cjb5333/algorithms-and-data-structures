class GraphHelper {
    static printGraph(root) {
        const output = '';
        const queue = [];
        let node = root;
        while (node) {
            console.log('----------------------');
            console.log('Node: ' + node.val);
            if (node.children.length > 0) {
                console.log('Children:');
                console.log(node.children);
            };
            node.children.forEach(child => queue.push(child));
            node = queue.shift();
        }
    }
}

module.exports = GraphHelper;
