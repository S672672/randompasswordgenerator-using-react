import React, { useCallback, useState } from 'react';

function App() {
  const [character, setCharacter] = useState("");
  const [isNumbers, setIsNumbers] = useState(false);
  const [password, setPassword] = useState("");
  const [sliderValue, setSliderValue] = useState("50");

  const handleSliderChange = (event) => {
    const newValue = event.target.value;
    setSliderValue(newValue);
  };

  const handleNumbersCheckboxChange = () => {
    setIsNumbers(!isNumbers);
  };

  const passwordGenerator = useCallback(() => {
    const character = "ABCDEFGHIJKLMNOPQsRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(isNumbers){
      cons
    }
  }, [character, isNumbers, sliderValue]);

  return (
    <>
      <div className='flex justify-center items-center min-h-screen bg-black'>
        <div className='bg-gray-400 p-8 rounded-lg shadow-md'>
          <div className='flex items-center'>
            <input className='w-64 px-4 py-2 border border-gray-300 mr-0 focus:outline-none' placeholder="Enter text" />
            <button className='px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none'>Copy</button>
          </div>
          <div className='flex items-center mt-4'>
            <div className='flex items-center ml-auto gap-1'>
              <input type="range" className='mr-1' value={sliderValue} onChange={handleSliderChange} />
              <span className='text-gray-600 mr-2'>Value: <span className='font-bold'>{sliderValue}</span></span>
            </div>
            <label className='flex items-center'>
              <input type='checkbox' className='mr-2' onClick={passwordGenerator} />
              <span className='text-yellow-400'>Character</span>
            </label>
            <label className='flex items-center ml-4'>
              <input type='checkbox' className='mr-2' onClick={handleNumbersCheckboxChange} />
              <span className='text-yellow-400'>Numbers</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
