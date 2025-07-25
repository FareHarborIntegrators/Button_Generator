import { useState } from "react";

function InputCard({setText, setBtnLink, btnStyle, btnLocation, setBtnLocation, isLeft, setIsLeft, setBtnStyle, setColorQuery, setColor} ) {

  let inputStyles = 'border-gray-300 border-solid border-2 m-2 pl-1';
  const titleStyles= 'flex justify-center text-2xl ml-5 mr-5 mb-10';
  const radioStyles= 'peer-checked:bg-blue-600 peer-checked:text-white border border-blue-600 text-blue-600 px-4 py-2 rounded cursor-pointer transition';
  const h3Stylings = 'text-lg font-bold mb-1'

  const handleBtnTxtInput = (textInput) => {
    setText(textInput.target.value);
  }
  const handleBtnLinkInput = (linkInput) => {
    setBtnLink(linkInput.target.value);
  }
  const handleColorQueryInput = (colorQueryInput) => {
    setColorQuery(colorQueryInput.target.value);
  }
  const handleColorInput = (colorInput) => {
    setColor(colorInput.target.value);
  }

  const handleBtnStyleInput = (event) => {
    setBtnStyle(event.target.value);
  };

  const handleBtnLocationInput = (event) => {
    setBtnLocation(event.target.value);
  }

  


  return (
    <div className='bg-[#1F2837] bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-white flex flex-col justify-start items-center w-full p-6 m-6 rounded-lg shadow-xl'>
      
      <h1 className={titleStyles}>Input</h1>
      
      <div className="flex justify-around items-center mb-3">
        <div className='flex flex-col justify-center items-center m-3'>
          <h3 className={h3Stylings}>Enter Your Button Text</h3>
          <input type="text-input" className={inputStyles} onChange={(e) => handleBtnTxtInput(e)} placeholder='Book Now'/>
        </div>
        <div className='flex flex-col justify-center items-center m-3'>
          <h3 className={h3Stylings}>Enter Your Button Link</h3>
          <input type="text-input" className={inputStyles} onChange={(e) => handleBtnLinkInput(e)} placeholder='Booking Link'/>
        </div>
      </div>
      
      <div className='flex justify-around items-center mb-3'>
        <div className='flex flex-col justify-center items-center m-3'>
          <h3 className={h3Stylings}>Set Your Color Query</h3>
          <input type="text-input" className={inputStyles} onChange={(e) => handleColorQueryInput(e)} placeholder='blue'/>
        </div>
        <div className='flex flex-col justify-center items-center m-3'>
          <h3 className={h3Stylings}>Set Your Hex Value</h3>
          <input type="text-input" className={inputStyles} onChange={(e) => handleColorInput(e)} placeholder='0a79e9'/>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h3 className={h3Stylings}>Button Location</h3>
        <div className="flex flex-wrap justify-center items-center">
          <div className="mx-1 my-3">
            <input name="fixedLocation" id="standard-button" type="radio" value='' className="peer hidden" checked={btnLocation === ''} onChange={(e) => handleBtnLocationInput(e)}/>
            <label htmlFor="standard-button" className={radioStyles}>Standard Button (No Float)</label>
          </div>
          <div className="mx-1 my-3">
            <input name="fixedLocation" id="top" type="radio" value="top" className="peer hidden" checked={btnLocation === 'top'} onChange={(e) => handleBtnLocationInput(e)}/>
            <label htmlFor="top" className={radioStyles}>Top</label>
          </div>
          {/* <div className="mx-1 my-3">
            <input name="fixedLocation" id="top-left" type="radio" value="top-left" className="peer hidden" checked={btnLocation === 'top-left'} onChange={(e) => handleBtnLocationInput(e)}/>
            <label htmlFor="top-left" className={radioStyles}>Top Left</label>
          </div> */}
          <div className="mx-1 my-3">
            <input name="fixedLocation" id="bottom" type="radio" value="bottom" className="peer hidden" checked={btnLocation === 'bottom'} onChange={(e) => handleBtnLocationInput(e)}/>
            <label htmlFor="bottom" className={radioStyles}>Bottom</label>
          </div>
          {/* <div className="mx-1 my-3">
            <input name="fixedLocation" id="bottom-left" type="radio" value="bottom-left" className="peer hidden" checked={btnLocation === 'bottom-left'} onChange={(e) => handleBtnLocationInput(e)}/>
            <label htmlFor="bottom-left" className={radioStyles}>Bottom Left</label>
          </div> */}
          <div className="mx-1 my-3">
            <input name="fixedLocation" id="side" type="radio" value="side" className="peer hidden" checked={btnLocation === 'side'} onChange={(e) => handleBtnLocationInput(e)}/>
            <label htmlFor="side" className={radioStyles}>Side</label>
          </div>
          {/* <div className="mx-1 my-3">
            <input name="fixedLocation" id="side-left" type="radio" value="side-left" className="peer hidden" checked={btnLocation === 'side-left'} onChange={(e) => handleBtnLocationInput(e)}/>
            <label htmlFor="side-left" className={radioStyles}>Side Left</label>
          </div> */}
        </div>
        {/* <div className="m-2 p-2">
          <input type="checkbox" name="bias-left" id="bias-left" checked={isLeft} onChange={() => setIsLeft()}/>
          <label className="pl-2" htmlFor="bias-left">Bias Left</label>
        </div> */}
      </div>
            
    </div>
  )
}

export default InputCard