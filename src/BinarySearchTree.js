import {
  print,
  reverse,
  count,
  sum,
  height,
  leftWidth,
  rightWidth
} from "./utils";

const TreeNode = (function () {
  function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  return TreeNode;
})();

export const BinarySearchTree = (function () {
  function BST() {
    this.root = null;

    this.addNode = (val) => {
      const dfs = (node) => {
        if (node == null) return new TreeNode(val);
        if (val >= node.val) node.right = dfs(node.right);
        else node.left = dfs(node.left);

        return node;
      };

      this.root = dfs(this.root);
    };

    this.addNodes = (arr) => arr.forEach((el) => this.addNode(el));

    this.forEach = (cb) => {
      const dfs = (node) => {
        if (node === null) return null;
        cb(node);
        dfs(node.left);
        dfs(node.right);
        return node;
      };
      dfs(this.root);
      return this;
    };

    this.reduce = (fn, val) => {
      const dfs = (n, acc) =>
        n === null ? acc : fn(n, dfs(n.left, acc), dfs(n.right, acc));
      return dfs(this.root, val);
    };

    this.printNodes = () => this.forEach(print);

    this.reverse = () => this.forEach(reverse);

    this.countNodes = () => this.reduce(count, 0);

    this.sumTreeNodes = () => this.reduce(sum, 0);

    this.height = () => this.reduce(height, 0);

    this.width = () =>
      this.reduce(rightWidth, 0) - this.reduce(leftWidth, 0) - 1;

    this.search = (val) => {
      const dfs = (n, val) => {
        if (n == null) return null;
        if (n.val === val) return n;
        if (n.val < val) return dfs(n.right, val);
        else return dfs(n.left, val);
      };
      return dfs(this.root, val);
    };
  }

  return BST;
})();
