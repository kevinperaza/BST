import "./styles.css";

import { BinarySearchTree } from "./BinarySearchTree";
import { arr } from "./data";

const tree = new BinarySearchTree();

tree.addNodes(arr);

document.getElementById("app").innerHTML = `
<h1>Binary search tree</h1>
<div>
  <p>Search (found):<br> <code>${JSON.stringify(tree.search(94688))}</code></p>
  <hr />
  <p>Search (not found):<br>  <code>${JSON.stringify(
    tree.search(11)
  )}</code></p>
  <p></p>
</div>
`;
