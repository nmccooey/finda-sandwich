import './App.css';
import {useContext} from "react";
import {useUser} from "./context/Users";

function App() {
  const context = useUser();
  return (
    <div className="App">
      {context}
    </div>
  );
}

export default App;
