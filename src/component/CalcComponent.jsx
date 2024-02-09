import { useState } from "react";

const CalcComponent = () => {
  const [data, setData] = useState({
    weight: "",
    height: "",
  });
  const [BMI, setBMI] = useState([]);

  const getInp = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const calcBMI = (event) => {
    event.preventDefault();
    if (
      data.weight == 0 ||
      data.height == 0 ||
      data.weight === NaN ||
      data.height === NaN
    ) {
      return window.alert("Please enter valid data!");
    }
    const _bmi = data.weight / (data.height * data.height);
    let message;
    if (_bmi < 18.5) {
      message = "you are Underweight";
    } else if (_bmi > 18.5 && _bmi < 24.9) {
      message = "you are Normal weight";
    } else if (_bmi > 25) {
      message = "you are Overweight";
    }
    setBMI({ _bmi, message });
  };

  const clearInp = () => {
    window.location.reload();
  };
  return (
    <>
      <form onSubmit={calcBMI}>
        <div className="flex flex-col">
          <label className="text-start my-2" htmlFor="weight">
            Weight (kg)
          </label>
          <input
            type="text"
            id="weight"
            name="weight"
            onChange={getInp}
            value={data.weight}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-start my-2" htmlFor="height">
            Height (m)
          </label>
          <input
            type="text"
            id="height"
            name="height"
            onChange={getInp}
            value={data.height}
          />
        </div>
        <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-1 my-4 rounded-md">
          Submit
        </button>
      </form>
      <div>
        <button
          onClick={clearInp}
          className="bg-red-400 hover:bg-red-500 px-6 py-1 rounded-md"
        >
          Raload
        </button>
      </div>
      <div className="mt-2">
        <h3 className="font-bold">Your BMI : {BMI._bmi}</h3>
        <p>{BMI.message}</p>
      </div>
    </>
  );
};

export default CalcComponent;
