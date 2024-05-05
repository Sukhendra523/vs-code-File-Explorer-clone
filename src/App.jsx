import Folder from "./Components/Folder";
import { explorer } from "./Data/explorerData";
import "./styles.css";

export default function App() {
  return (
    <div className="file__explorer">
      <Folder data={explorer} />
    </div>
  );
}
