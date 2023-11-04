import "./App.css";
import { useState } from "react";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileContent, setFileContent] = useState("");

  // Function to handle file input changes
  const handleFileInputChange = (e) => {
    const file = e.target.files[0]; // Get the first selected file

    // Set the selected file in state
    setSelectedFile(file);

    // Read the contents of the selected file
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      setFileContent(content);
    };

    reader.readAsText(file);
  };

  console.log(fileContent);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col space-y-28">
        <div className="flex items-center">
          <input type="file" onChange={handleFileInputChange} />

        </div>
      </div>
    </div>
  );
}

export default App;
