import { useState } from "react";
import Folder from "./components/Folder";
import { defaultExplorer } from "./Data/explorerData";
import { useTraverseTree } from "./hooks/useTraverseTree";
import "./styles.css";
import { useEffect } from "react";
import { isObjectEmpty } from "./utils";

export default function App() {
  const [explorerData, setExplorerData] = useState(JSON.parse(localStorage.getItem('explorer')) || {});
  const { insertNode } = useTraverseTree();
  useEffect(() => {
    if (isObjectEmpty(explorerData)) {
      localStorage.setItem("explorer", JSON.stringify(defaultExplorer));
      setExplorerData(defaultExplorer);
    }
  }, []);

  const addNewItem = ({ isFolder, value, parentId }) => {
    const updatedExplorerData = insertNode({ tree: explorerData, isFolder, value, parentId })
    setExplorerData(updatedExplorerData);
    localStorage.setItem("explorer", JSON.stringify(updatedExplorerData));
  }


  
  return (
    <div className="file__explorer">
      <Folder data={explorerData} addNewItem={addNewItem} />
    </div>
  );
}
