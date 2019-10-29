class GraphNode {
    children = [];
    val = null;
    constructor (val) {
        this.val = val;
    }

    toString() {
        return val;
    }
}

module.exports = GraphNode;