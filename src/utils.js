export const height = (_, left, right) => Math.max(left, right) + 1;

export const count = (_, left, right) => 1 + left + right;

export const sum = (node, left, right) => node.val + left + right;

export const leftWidth = (_, left, right) => Math.min(left - 1, right + 1);

export const rightWidth = (_, left, right) => Math.max(left - 1, right + 1);

export const print = (node) => console.log(node.val);

export const reverse = (n) => ([n.left, n.right] = [n.right, n.left]);
