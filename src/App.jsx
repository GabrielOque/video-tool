import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Folders from "./pages/Folders";
import Videos from "./pages/Videos";
function App() {
  return (
    <div className="w-full h-screen bg-secondary flex justify-between p-10">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Folders />} />
        <Route path="/videos/:name" element={<Videos />} />
      </Routes>
    </div>
  );
}

export default App;
