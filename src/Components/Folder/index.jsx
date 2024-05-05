import React, { useState } from "react";
import "./styles.scss";

const Folder = ({ data }) => {
  const [showFolderItems, setShowFolderItems] = useState(false);
  return (
    <div className="folder__container">
      {data.isFolder && (
        <div
          className="folder"
          onClick={() => setShowFolderItems(!showFolderItems)}
        >
          <span>📁 {data.name}</span>
          <div className='folder-btns'>
            <button>New Folder +</button>
            <button>New File +</button>
          </div>
        </div>
      )}
      {!data.isFolder && (
        <div className="file">
          <span>{data.name}</span>
        </div>
      )}

      {showFolderItems && (
        <ul>
          {data.items.map((item) => (
            <Folder data={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Folder;
