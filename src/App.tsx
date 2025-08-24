import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/index/Home";
import Curriculum from "./pages/curriculum/Curriculum";

const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="curriculum" element={<Curriculum />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
