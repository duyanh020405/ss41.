import React from 'react';
import { FaTachometerAlt, FaEdit, FaPhotoVideo, FaFileAlt, FaComments, FaPaintBrush, FaPlug, FaUsers, FaCog, FaTools, FaSun, FaSignOutAlt } from 'react-icons/fa';

export default function Bt9() {
  const buttonClasses = "flex items-center justify-start bg-blue-900 hover:bg-gray-400 w-[200px] h-[30px] pl-2";

  return (
    
      <div className='border border-black w-[250px] h-[500px] bg-blue-900 rounded text-white flex flex-col items-center space-y-2 p-2'>
        <button className={buttonClasses}><FaTachometerAlt className="mr-2" />Dashboard</button>
        <button className={buttonClasses}><FaEdit className="mr-2" />Posted</button>
        <button className={buttonClasses}><FaPhotoVideo className="mr-2" />Media</button>
        <button className={buttonClasses}><FaFileAlt className="mr-2" />Page</button>
        <button className={buttonClasses}><FaComments className="mr-2" />Comment</button>
        <button className={buttonClasses}><FaPaintBrush className="mr-2" />Appearance</button>
        <button className={buttonClasses}><FaPlug className="mr-2" />Plugin</button>
        <button className={buttonClasses}><FaUsers className="mr-2" />Users</button>
        <button className={buttonClasses}><FaCog className="mr-2" />Setting</button>
        <button className={buttonClasses}><FaTools className="mr-2" />Tools</button>
        <br />
        <br />
        <button className={buttonClasses}><FaSun className="mr-2" />Lightmode</button>
        <button className={buttonClasses}><FaSignOutAlt className="mr-2" />Logout</button>
      </div>
  );
}
