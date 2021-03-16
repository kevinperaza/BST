import "./styles.css";

import { BinarySearchTree } from "./BinarySearchTree";
import { arr } from "./data";

const tree = new BinarySearchTree();

tree.addNodes(arr);

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  <p>Search (found): ${JSON.stringify(tree.search(94688))}</p>
  <hr />
  <p>Search (not found): ${JSON.stringify(tree.search(11))}</p>
  <p></p>
</div>
`;
