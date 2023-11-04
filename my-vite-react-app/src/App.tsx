import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import {useState} from "react";
import Results from "./components/Results";

function App() {
  const [humanPrompt, setHumanPrompt] = useState("");

  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();

    setShowResults(true);

    console.log(humanPrompt);
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col">
        <div className="flex items-center">
          <Input
            value={humanPrompt}
            f={(e: any) => setHumanPrompt(e.target.value)}
          />
          <Button onClick={handleSubmit} />
        </div>

        {showResults && (
          <div>
            <Results />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
