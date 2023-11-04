import "./App.css";
import FormComponent from "./components/FormComponent";
import { useState } from "react";
import Table from "./components/Table";
import NavBar from "./components/NavBar";

function App() {
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <div className="flex-grow flex justify-center items-center">
        <div className="flex flex-col space-y-28">
          <div className="flex items-center">
            <FormComponent setShowResults={setShowResults} />
          </div>

          {showResults && <Table />}
        </div>
      </div>
    </div>
  );
}

export default App;
