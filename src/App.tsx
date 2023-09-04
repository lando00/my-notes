import { Routes, Route } from "react-router-dom";
import DisplayListNotes from "./components/DisplayListNotes";
import Menu from "./components/Menu";
import Notes from "./components/Notes";
import AddNote from "./components/AddNote";
import DisplayNote from "./components/DisplayNote";
import UpdateNote from "./components/UpdateNote";

function App() {
  return (
    <div className="app">
      <Menu />
      <Notes />
      <div className="container">
        <Routes>
          <Route path="/" element={<DisplayListNotes />} />
          <Route path="/add" element={<AddNote />} />
          <Route path="/note/:id" element={<DisplayNote />} />
          <Route path="/update/note/:id" element={<UpdateNote />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
