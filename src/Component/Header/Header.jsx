import React from "react";
import "../../Style/header/header.css";
import { GoBellFill } from "react-icons/go";
import { LuSettings2 } from "react-icons/lu";
import UserImg from '../../resources/User.png';
import { DatePicker } from 'antd';

export default function Header(props) {

    return (
        <>
            <div className="header border-b border-[#D1D1D1] w-[98%]" >
                {/* <div className="select_menu ">
                <span className="text-[white]">{props.title}</span>
                <span>/</span>
                {props.option}
            </div> */}
                <div className="flex justify-between items-center gap-6 w-[75%]">
                    <div className=" w-[60%] ">
                        <span >
                            <input type="text" required placeholder="Application" className=" w-[60%] bg-[rgb(57, 168, 97)] outline-none " />
                        </span>
                    </div>
                    <div className="flex justify-content gap-4">
                        <div className="flex items-center gap-1 w-fit ">
                            <input type="text" required placeholder="Loan Amount" className=" w-[100%] bg-[rgb(57, 168, 97)] mt-[0.1rem] px-[1rem] py-[0.3rem] text-[#295598] font-semibold  outline-none text-[1rem] rounded-md" />
                        </div>
                        <div className="flex justify-content gap-8 w-[100%]">
                            <div className="flex items-center gap-1 w-[100%]">
                                <label className="text-black font-[500] py-[0.3rem] px-[0.2rem]">Date:</label>
                                {/* <input type="date" required placeholder="Enter Date" className=" w-[100px]  hover:border-b hover:shadow-sm bg-[rgb(57, 168, 97)] py-[0.3rem] outline-none text-[1rem]"/> */}
                                <DatePicker
                                    placeholder="Date"
                                    className="w-[150px] bg-[rgb(57, 168, 97)] mt-[0.1rem] px-[1rem] py-[0.3rem] outline-none text-[1.5rem] text-[#295598] font-semibold border-none focus:none"
                                    suffixIcon={null}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end gap-8 w-[23%] pb-[1rem] header-second">
                    <div className="flex items-center justify-center text-[1.2rem] bg-[#0d157b] rounded-full text-[white] w-[40px] h-[40px]">
                        <LuSettings2 />
                    </div>
                    <div className="flex items-center justify-center text-[1.2rem] border border-[#0d157b] rounded-full w-[40px] h-[40px] text-[#0d157b]">
                        <GoBellFill />
                    </div>
                    <img src={UserImg} alt="user-img" className="w-[40px] h-[40px]" />
                </div>
            </div>
        </>

    );
}