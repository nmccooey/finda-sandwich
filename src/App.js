import './App.css';
import {useContext} from "react";
import {userContext} from "./context/Users";

function App() {
  const context = useContext(userContext);

  return (
    <div className="App">
      {context}
    </div>
  );
}

export default App;
