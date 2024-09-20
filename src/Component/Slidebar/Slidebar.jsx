import React, { useState } from "react";
import "../../Style/slidebar/slidebar.css";
import logo from "../../resources/logo.jpeg";
import { TbLayoutDashboard } from "react-icons/tb";
import { NavLink} from "react-router-dom";

export default function Slidebar(props){

    const menuLists= [
        {
            path:"/",
            name:'Applications'
        }
    ];
    
    return(
        <nav>
            <div className="slidebar-menu">
                <div>
                    <div className="flex flex-col items-left gap-1 mt-[1rem] mb-[1rem]">
                        <img src={logo} alt="logo" className="pl-[0.5rem] h-[2.5rem] w-[7rem]"/>
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
                            menuLists.map((menuList, index)=>{
                                return(
                                    <NavLink key={index} to= {menuList.path} style={({ isActive }) => ({
                                        color: isActive ? "white" : "white", 
                                        backgroundColor: isActive ? "transparent" : "transparent",
                                        borderRadius:"5px"
                                    })}>
                                        <TbLayoutDashboard className="icon"/>
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
