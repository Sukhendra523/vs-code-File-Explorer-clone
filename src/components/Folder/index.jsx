import React, { useState } from "react";
import "./styles.scss";

const Folder = ({ data, addNewItem }) => {
  const [showFolderItems, setShowFolderItems] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputElem, setInputElem] = useState({ show: false,isFolder:false });

  const handleNewFolder = (e, isFolder = false) => {
    e.stopPropagation();
    setShowFolderItems(true);
    setInputElem({
      show: true,
      isFolder,
    });
  };

  const saveFolderOrFile = () => {
    if (inputValue) {
      addNewItem({ isFolder: inputElem.isFolder, value: inputValue, parentId: data.id });
    }
    setInputElem({
      show: false,
    });
    setInputValue('')
  }


  return (
    <div className="folder__container">
      {data.isFolder && (
        <div
          className="folder"
          onClick={() => setShowFolderItems(!showFolderItems)}
        >
          <span>📁 {data.name}</span>
          <div className='folder-btns'>
            <button onClick={(e) => {
              handleNewFolder(e, true)
            }}>New Folder +</button>
            <button onClick={(e) => {
              handleNewFolder(e, false)
            }}>New File +</button>
          </div>
        </div>
      )}
      {!data.isFolder && (
        <div className="file">
          <span>📄 {data.name}</span>
        </div>
      )}
      {
        inputElem.show && <div className="input-container">
        <span>{inputElem.isFolder? "📁" : "📄"}</span> 
        <input autoFocus value={inputValue} onChange={e => {
          setInputValue(e.target.value)
        }} type="text" onKeyDown={(e) => { e.key === 'Enter' && saveFolderOrFile() }} onBlur={saveFolderOrFile} />
        </div>
      }

      
        <ul style={{display: showFolderItems ? "block" : "none"}}>
          {data.items.map((item) => (
            <Folder data={item} key={item.id} addNewItem={addNewItem} />
          ))}
        </ul>
      
    </div>
  );
};

export default Folder;
