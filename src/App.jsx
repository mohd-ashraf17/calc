import "./App.css";
import CalcComponent from "./component/CalcComponent";

const App = () => {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen">
      <div className="text-center w-80 p-8 rounded-md shadow-xl bg-white">
        <h2 className="font-bold text-xl mb-4">BMI Calculator</h2>
        <div>
          <CalcComponent />
        </div>
      </div>
    </div>
  );
};

export default App;
