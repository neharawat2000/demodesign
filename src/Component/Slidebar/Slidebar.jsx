import React, { useState } from "react";
import "../../Style/slidebar/slidebar.css";
import logo from "../../resources/logo.jpeg";
import { TbLayoutDashboard } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { HiOutlineUsers } from "react-icons/hi2";
import { PiWallet } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSettings } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";

export default function Slidebar({ props }) {

    const menuLists = [
        {
            path: "/",
            name: 'Applications',
            icon: <AiOutlineAppstore size={18} />
        },
        {
            path: "/",
            name: 'Merchants',
            icon: <HiOutlineUsers size={18} />
        },
        {
            path: "/",
            name: 'Portfolio',
            icon: <PiWallet size={18} />
        },
        {
            path: "/",
            name: 'My profile',
            icon: <CgProfile size={18} />
        },
        {
            path: "/",
            name: 'Settings',
            icon: <MdOutlineSettings size={18} />
        },
    ];

    return (
        <nav>
            <div className="slidebar-menu">
                <div>
                    <div className="flex flex-col items-left gap-1 mt-[1rem] mb-[1rem]">
                        <img src={logo} alt="logo" className="pl-[0.5rem] h-[2.5rem] w-[7rem]" />
                        <span className="text-white text-[14px] text-right pr-[1.5rem]">FINANCIAL</span>
                    </div>
                    {/* <div className="flex flex-col font-[800] text-[white] text-[2.5rem] leading-7 w-[90px]">Fora 
                        <span className="text-[1rem] font-[500] text-right">financial</span>
                    </div> */}
                    {/* <div className="beta">{props.beta}</div> */}
                </div>
                <div className="box">
                    <div className="first">
                        {
                            menuLists.map((menuList, index) => {
                                return (
                                    <NavLink key={index} to={menuList.path} style={({ isActive }) => ({
                                        color: isActive ? "white" : "white",
                                        backgroundColor: isActive ? "transparent" : "transparent",
                                        borderRadius: "5px"
                                    })}
                                        className={"flex gap-2 items-center p-[0.5rem] hover:bg-[#0d157b] hover:rounded-[5px] transition-all duration-200 ease-in-out"}
                                    >
                                        <span>{menuList.icon}</span>
                                        <span>{menuList.name}</span>
                                    </NavLink>
                                );
                            })
                        }
                    </div>

                </div>
            </div>
        </nav>
    );
}
