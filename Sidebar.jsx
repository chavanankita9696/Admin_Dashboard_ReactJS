import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import {AiFillAppstore} from 'react-icons/ai'
 import {BiUserCircle} from 'react-icons/bi'
 import {CiCoins1} from 'react-icons/ci'
 import {PiCodesandboxLogoThin} from 'react-icons/pi'
 import {HiReceiptPercent} from 'react-icons/hi2'
 import {MdOutlineLiveHelp} from 'react-icons/md'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <AiFillAppstore className='icon_header'/> Dashboard
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <PiCodesandboxLogoThin className='icon'/> Product
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BiUserCircle className='icon'/>Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <CiCoins1 className='icon'/> Income
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <HiReceiptPercent className='icon'/> Promote
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <MdOutlineLiveHelp className='icon'/> Help
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar