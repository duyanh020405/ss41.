
export default function Bt10() {
    return (
      <div className='border border-black w-[330px] h-[400px] rounded'>
        <p>UserName</p>
        <input className='w-[300px] h-[40px] border-black-1px' type="text" placeholder='Enter userName' />
        <p>PassWord</p>
        <input className='w-[300px] h-[40px] border-black' type="text" placeholder='Enter passWord' />
        <p className='text-gray-500 text-[14px]'>your password is between 4 to 12 characters</p>
        <br />
        <p className='text-black-500 text-[14px]'>Input text lable</p>
        <input className='w-[300px] h-[40px] border-black' type="text" placeholder='Enter passWord' /><br />
        <p><input type="radio" />Remember me</p>
        <p><input type="radio" />Remember me 1</p>
        <p><input type="radio" />Remember me 2</p>
        <p><input type="radio" />Remember me 3</p>
        <select value={"Dowload opption"} className='w-[300px] h-[40px]'>
          <option value="">Dropdown option</option>
          <option value="">Dropdown option 1</option>
          <option value="">Dropdown option 2</option>
          <option value=""> Dropdown option 3</option>
        </select>
      </div>
    )
  }