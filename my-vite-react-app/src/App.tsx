import "./App.css";
import FormComponent from "./components/FormComponent";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col space-y-28">
        <div className="flex items-center">
          <FormComponent/>

        </div>
      </div>
    </div>
  );
}

export default App;
