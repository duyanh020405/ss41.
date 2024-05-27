import React from 'react'

export default function Bt5() {
  return (
    <div>
      <div className='bg-blue-300 w-[300px] h-[200px] rounded  pb-5'>
        <div className='bg-blue-400 w-[280px] h-[180px]' style={{display:"flex",flexDirection:"column", gap:120}} >
        <p className='text-blue-700 text-[20px]'>Relative Parent</p>
        <button className='bg-blue-800 w-[120px] h-[30px] rounded'>Absolute Child</button>
        </div>

      </div>
    </div>
  )
}
