import React from "react";
import "../../Style/header/header.css";
import { GoBellFill } from "react-icons/go";
import { LuSettings2 } from "react-icons/lu";
import UserImg from '../../resources/User.png';

export default function Header(props) {

    return(
        <>
        <div className="header border-b border-[#D1D1D1]" >
            <div className="select_menu ">
                <span className="text-[white]">{props.title}</span>
                <span>/</span>
                {props.option}
            </div>
            <div className="flex gap-16 w-[20rem] pb-[1rem] header-second">
                <div className="flex items-center justify-center text-[1.2rem] bg-[#0d157b] rounded-full text-[white] w-[40px] h-[40px]">
                    <LuSettings2 />
                </div>
                <div className="flex items-center justify-center text-[1.2rem] border border-[#0d157b] rounded-full w-[40px] h-[40px] text-[#0d157b]">
                    <GoBellFill />
                </div>
                <img src={UserImg} alt="user-img" className= "w-[40px] h-[40px]"/>
            </div>
        </div>
        </>
       
    );
}