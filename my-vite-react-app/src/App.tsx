import "./App.css";
import FormComponent from "./components/FormComponent";
import {useState} from "react";
import Table from "./components/Table";

function App() {
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col space-y-28">
        <div className="flex items-center">
          <FormComponent setShowResults={setShowResults} />
        </div>

        {showResults && <Table />}
      </div>
    </div>
  );
}

export default App;
