import { Route, Routes } from "react-router-dom";
import GraphQLContext from "./context/GraphQLContext";
import Home from "./pages/Home";
import Add from "./pages/Add";
import { ToastContainer } from "react-toastify";
import Edit from "./pages/Edit";

function App() {
  return (
    <GraphQLContext>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </GraphQLContext>
  );
}

export default App;
