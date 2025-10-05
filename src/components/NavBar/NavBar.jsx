import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePhotoSizeSelectSmall } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import Switch from '../Switch/Switch';
import "../styles/App.css";

function NavBar({ Page }) {
    const [sidebarNav, setSidebar] = useState(false);
    const [value, setValue] = useState(false);
    const [value1, setValue1] = useState(false);
    const [value2, setValue2] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebarNav)
    }

    return (
        <>
            <header className="App-header">
                <div className="div-header">
                    <h1 className='logo-navbar'>{Page}</h1>
                    <HiMenu className='icon-navbar' onClick={showSidebar} />
                </div>
            </header>
            <div className={`sidebarNav ${sidebarNav ? 'open' : ''}`}>
                <div className='div-logo-sidebar'>
                    <h1 className="logo-navbar">WIP Maps</h1>
                    <HiOutlineX className='close-btn' onClick={showSidebar} />
                </div>
                <nav className='nav-sidebar'>
                    <div>
                        <ul className='lista-navbar'>
                            <li className='text-lista'>Map 1
                                <Switch isOn={value} handleToggle={() => setValue(!value)} />
                            </li>
                            <li className='text-lista'>Map 2
                                <Switch isOn={value1} handleToggle={() => setValue1(!value1)} />
                            </li>
                            <li className='text-lista'>Map 3
                                <Switch isOn={value2} handleToggle={() => setValue2(!value2)} />
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className='div-user'>
                    <div>
                        <ul className='lista-navbar'>
                            <li className='text-lista'> <IoHomeOutline/> <input type="text" placeholder="Population Density"/></li>
                            <li className='text-lista'> <MdOutlinePhotoSizeSelectSmall /> <input type="text" placeholder="Square Meters"/> </li>
                        </ul>
                    </div>
                    
                </div>
            </div >
        </>
    )
}

export default NavBar;