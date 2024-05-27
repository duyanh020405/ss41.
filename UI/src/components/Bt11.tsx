import React from 'react';
import {
  FaTachometerAlt, FaEdit, FaPhotoVideo, FaFileAlt, FaComments,
  FaPaintBrush, FaPlug, FaUsers, FaCog, FaTools, FaSun, FaSignOutAlt
} from 'react-icons/fa';

export default function Bt11() {
  const buttonClasses = "flex items-center justify-start bg-gray-500 hover:bg-gray-400 w-[200px] h-[30px] pl-2 text-white rounded";
  return (
    <div className='flex flex-row'>
        <div className='border border-black w-[250px] h-[500px] bg-gray-500 rounded text-white flex flex-col items-center space-y-2 p-2'>
      <div className='flex flex-row items-center mb-4'>
        <img
          className='w-[40px] h-[40px] rounded-full mr-2'
          src="https://tse4.mm.bing.net/th?id=OIP.w_DxO909eL8FNMk5-IUrxwHaHk&pid=Api&P=0&h=180"
          alt="Company Logo"
        />
        <p className='text-[25px]'>Company</p>
      </div>
      <button className={buttonClasses}><FaTachometerAlt className="mr-2" />General</button>
      <button className={buttonClasses}><FaEdit className="mr-2" />User</button>
      <button className={buttonClasses}><FaPhotoVideo className="mr-2" />Statistics</button>
      <button className={buttonClasses}><FaFileAlt className="mr-2" />Billing</button>
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <button className={buttonClasses}><FaSignOutAlt className="mr-2" />Logout</button>
    </div>
    <div  className='border border-black w-[800px] h-[500px] text-black flex flex-col items-center space-y-2 p-2'>
        <div className='flex flex-row gap-[100px]'>
           <div className='flex flex-col'>
             <p className='text-[40px]'>12</p>
             <p className='text-gray-500 text-[14px]' >People</p>
           </div>
           <div className='h-[100px] w-[2px] bg-gray-500'></div>
           <div>
             <p className='text-[40px]'>5</p>
             <p className='text-gray-500 text-[14px]'>Derpatime</p>
           </div>
           <div className='h-[100px] w-[2px] bg-gray-500'></div>
           <div></div>
           <div>
              <p className='text-[40px]'>0</p>
              <p className='text-gray-500 text-[14px]'>Guest</p>
           </div>
        </div>
        <div className='flex flex-row gap-[50px] '>
            <input type="text" placeholder='Search' className='w-[530px] h-[30px] rounded border border-black'/>
            <button className="h-[30px] w-[70px] bg-blue-800 hover:bg-blue-600 rounded border border-black">Inviteted</button>
            <button className='h-[30px] w-[30px] bg-gray-500  hover:bg-gray-300 rounded border border-black'>...</button>
        </div>
        <div className='mr-[500px]'>
        <select
            id="currency"
            name="currency"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            <option>All</option>
            <option>CAD</option>
            <option>EUR</option>
          </select>
          <select
            id="currency"
            name="currency"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            <option>All Departments</option>
            <option>CAD</option>
            <option>EUR</option>
          </select>
        </div>
        <div  className='flex flex-row gap-[63px]' >
            <div className=' flex flex-row gap-[10px] font-semibold'>
                <input type="checkbox" />
                <p>user</p>
            </div>
            <p>Status</p>
            <p>Phone number</p>
            <p>Position</p>
            <p>Department</p>
            <p>Activity</p>

        </div>

        <div  className='flex flex-row gap-[20px]'>
            <input type="checkbox" />
            <div className=' flex flex-row gap-[10px] font-semibold '>
                <img className='w-[50px] h-[50px] rounded-[50%] ' src="https://toppng.com/uploads/preview/cr7-footbal-player-wpap-cristiano-ronaldo-wpa-11563218806oskot98jqs.png" alt="" />
                <p>Cristiano Ronaldo</p>
            </div>
            <p>Active</p>
            <p>+0938374774</p>
            <p>Designer</p>
            <p>Primien 1</p>
            <p>2 day ago</p>
            <button className='h-[30px] w-[30px] bg-gray-500  hover:bg-gray-300 rounded border border-black'>...</button>
        </div>
        <br />
        <div  className='flex flex-row gap-[20px]'>
        <input type="checkbox" />
            <div className=' flex flex-row gap-[10px] font-semibold '>
                <img className='w-[50px] h-[50px] rounded-[50%] ' src="https://toppng.com/uploads/preview/cr7-footbal-player-wpap-cristiano-ronaldo-wpa-11563218806oskot98jqs.png" alt="" />
                <p>Cristiano Ronaldo</p>
            </div>
            <p>Active</p>
            <p>+0938374774</p>
            <p>Designer</p>
            <p>Primien 1</p>
            <p>2 day ago</p>
            <button className='h-[30px] w-[30px] bg-gray-500  hover:bg-gray-300 rounded border border-black'>...</button>
        </div>
        <br />
        <div  className='flex flex-row gap-[20px]'>
        <input type="checkbox" />
            <div className=' flex flex-row gap-[10px] font-semibold '>
                <img className='w-[50px] h-[50px] rounded-[50%] ' src="https://toppng.com/uploads/preview/cr7-footbal-player-wpap-cristiano-ronaldo-wpa-11563218806oskot98jqs.png" alt="" />
                <p>Cristiano Ronaldo</p>
            </div>
            <p>Active</p>
            <p>+0938374774</p>
            <p>Designer</p>
            <p>Primien 1</p>
            <p>2 day ago</p>
            <button className='h-[30px] w-[30px] bg-gray-500  hover:bg-gray-300 rounded border border-black'>...</button>
        </div>
        <br />
        <div  className='flex flex-row gap-[20px]'>
        <input type="checkbox" />
            <div className=' flex flex-row gap-[10px] font-semibold '>
                <img className='w-[50px] h-[50px] rounded-[50%] ' src="https://toppng.com/uploads/preview/cr7-footbal-player-wpap-cristiano-ronaldo-wpa-11563218806oskot98jqs.png" alt="" />
                <p>Cristiano Ronaldo</p>
            </div>
            <p>Active</p>
            <p>+0938374774</p>
            <p>Designer</p>
            <p>Primien 1</p>
            <p>2 day ago</p>
            <button className='h-[30px] w-[30px] bg-gray-500  hover:bg-gray-300 rounded border border-black'>...</button>
        </div>
        <br />
    </div>
    </div>
  );
}
