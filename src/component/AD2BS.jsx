import React, { useRef, useState } from "react";

const AD2BS = () => {
  let [result, setresult] = useState();
  const dateElement = useRef();
  const handleDateConvert = () => {
    result = NepaliFunctions.AD2BS(dateElement.current.value);
    setresult(result);
  };

  return (
    <div className="w-[48%] m-3">
      <div className="w-full flex flex-col items-center border-black border  rounded-md overflow-hidden text-xl">
        <div className="bg-[#8f3771] text-white p-3 w-full flex flex-col items-center">
          <h1>AD to BS date conveter</h1>
          <p>(BS range from 2000 -2999)</p>
        </div>
        <div className="p-3 text-xl w-[92%] flex flex-col items-center">
          <p>Enter date in AD(MM-DD-YYYY)</p>
          <input
            type="date"
            className="w-[100%] text-center border-gray-900 border rounded-md m-3 p-1"
            ref={dateElement}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center m-3">
        <button
          className="bg-[#832161] text-white p-2 border rounded-md text-xl font-bold"
          onClick={handleDateConvert}
        >
          Convert
        </button>

        {result && <h1 className="text-center text-xl font-bold">Result :</h1>}

        <p className="text-center text-xl font-semibold">{result}</p>
      </div>
    </div>
  );
};

export default AD2BS;
