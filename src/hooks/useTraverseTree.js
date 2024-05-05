export const useTraverseTree = () => {
  const insertNode = ({ tree, value, isFolder, parentId }) => {
    if (tree.id === parentId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: value,
        isFolder,
        items: [],
      });

      return tree;
    }
    
    let updatedItems = [];
    updatedItems = tree.items.map((item) => {
      return insertNode({ tree: item, value, isFolder, parentId });
    });

    return { ...tree, items: updatedItems };
  };

  return { insertNode };
};
