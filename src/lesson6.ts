type TreeNode = {
  value: string
}
type LeafNode = TreeNode & {
  isLeaf: true
}
type innerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode ]
}

let lesson6_a: TreeNode = {
  value: 'a'
}

let lesson6_b:TreeNode = {
  value: 'b',
  isLeaf: true,
}