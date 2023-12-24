import React, { useCallback, useEffect, useState,useRef} from 'react';

function App() {
  const [length, setlength] = useState(8);
  const [isNumbers, setIsNumbers] = useState(false);
  const[isCharacter,setIsCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordref = useRef(null);

  const handleSliderChange = (event) => {
    const newValue = event.target.value;
    setlength(newValue);
  };

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let characters = "ABCDEFGHIJKLMNOPQsRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(isNumbers) characters += 1234567890;
    if(isCharacter) characters += "!@#$%^&*-_=+\|";

    for(let i = 0;i<length;i++){
      let char = Math.floor(Math.random()*characters.length + 1);
      pass += characters.charAt(char);
    }
    setPassword(pass);
  }, [length,isNumbers,isCharacter,setPassword]);

  const copyPasswordtoclipboard = useCallback((
  )=>{
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0,12);
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    passwordGenerator();

  },[length,isCharacter,isNumbers,passwordGenerator])

  return (
    <>
      <div className='flex justify-center items-center min-h-screen bg-black'>
        <div className='bg-gray-400 p-10 rounded-lg shadow-md'>
          <div className='flex items-center'>
            <input className='w-64 px-4 py-2 border border-gray-300 mr-0 focus:outline-none' value={password} ref={passwordref} readOnly />
            <button className='px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none' onClick={copyPasswordtoclipboard}>Copy</button>
          </div>
          <div className='flex items-center mt-4'>
            <div className='flex items-center ml-auto gap-1'>
              <input type="range" className='mr-1' value={length} onChange={handleSliderChange} />
              <span className='text-gray-600 mr-2'>Value: <span className='font-bold'>{length}</span></span>
            </div>
            <label className='flex items-center'>
              <input type='checkbox' className='mr-2' value={isCharacter} onChange={()=>{ setIsCharacter((prev) => !prev)}} />
              <span className='text-yellow-400'>Character</span>
            </label>
            <label className='flex items-center ml-4'>
              <input type='checkbox' className='mr-2' onChange={()=>{setIsNumbers((prev)=> !prev )}} />
              <span className='text-yellow-400'>Numbers</span>
            </label>
          </div>
        </div>
      </div>  
    </>
  );
}

export default App;
