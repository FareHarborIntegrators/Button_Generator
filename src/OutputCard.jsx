import React from 'react'

function OutputCard({btnText, btnLink, btnIcon, btnShape, btnSize, btnStyle, colorQuery, color, btnLocation, isLeft}) {

  let anchorString = `<a href="${btnLink}" class="fh-button${btnStyle !== '' ? `-${btnStyle}` : ``}-${colorQuery} fh-icon--${btnIcon} fh-shape--${btnShape} fh-size--${btnSize} ${!isLeft ? `fh-fixed--${btnLocation}` : ''}">${btnText}</a>`;
  let styleString = `<link rel="stylesheet" href="https://fh-kit.com/buttons/v2/?${colorQuery}=${color}" type="text/css" media="screen" />`
  const titleStyles= 'flex justify-center text-2xl ml-5 mr-5 mb-10';
  const h3Stylings = 'text-lg font-bold mb-2'

  return (
    <div className='bg-[#1F2837] bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-white flex flex-col justify-start items-center w-full p-6 m-6 rounded-lg shadow-xl'>
      <h1 className={titleStyles}>Output</h1>
      <div className='mb-8'>

        <a className={`fh-button${btnStyle !== '' ? `-${btnStyle}` : ``}-${colorQuery} ${!isLeft ? `fh-fixed--${btnLocation}` : ''} fh-shape--${btnShape} fh-size--${btnSize}  fh-icon--${btnIcon}`}>{btnText}</a>

      </div>
      <div className='flex flex-col justify-center items-center p-2 mb-10'>
        <h3 className={h3Stylings}>Button</h3>
        <div className='px-10'>{anchorString}</div>
      </div>
      <div className='flex flex-col justify-center items-center p-2'>
        <h3 className={h3Stylings}>Stylesheet</h3>
        <div className='px-10'>{styleString}</div>
      </div>
    </div>
  )
}

export default OutputCard