import React, { useState} from "react";
import { FiEdit2 } from "react-icons/fi";
import Header from "../Component/Header/Header";
import SecondHeader from "../Component/Header/SecondHeader";
import LabelInputText from "../Component/LabelInputText/LabelInputText";
import LabelSelectInput from "../Component/LabelSelectInput/LabelSelectInput";
import Slidebar from "../Component/Slidebar/Slidebar";

export default function Overview(){
    // const menuu = 
    // [
    //     {
    //         path:"/application/overview",
    //         name:"Overview"
    //     },
    //     {
    //         path:"/application/client-details",
    //         name:"Client Details"
    //     },
    //     {
    //         path:"/application/documents",
    //         name:"Documents"
    //     },
    //     {
    //         path:"/application/notes",
    //         name:"Notes"
    //     },
    //     {
    //         path:"/application/history",
    //         name:"History"
    //     }
    // ];
    const [statusFilter, setStatusFilter]= useState("Overview");
    const menuu =["Overview", "Client Details", "Documents", "Underwriting", "Notes","History"];
    return(
        <>
            <Slidebar/>
            <div className='mainContainer'>
                <Header title="Applications" option="Infinity Contracting"/>
                <div className="mb-[1rem] flex gap-4 items-end">
                  {
                    menuu.map((menu, index)=>{
                      return(
                        <button key={index} onClick={() => setStatusFilter(menu)}
                        style={{
                          background: statusFilter === menu ? "#0d157b" : "white",
                          color: statusFilter === menu ? "white" : "#807C7C",
                          fontWeight: statusFilter === menu ? "600" : "500",
                        }}
                        
                        className="rounded-2xl border px-[1rem] py-[0.2rem]" >
                          {menu}
                        </button>
                      );
                    })
                  }
                </div>
                <div className="flex flex-col gap-10 w-[95%] mb-[1rem]">
                        {/* Business */}
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between">
                            <h3 
                            className="text-[#353333] text-[1.2rem] font-[500]">
                                BUSINESS INFORMATION
                            </h3>
                            <FiEdit2 />
                        </div>
                        <div className="flex flex-col gap-6 justify-between">
                            <div className="flex justify-content gap-8 w-[100%]">
                                <LabelInputText type="text" label="Business Name" input=""/>
                                <LabelInputText type="text" label="Legal Name" input=""/>
                            </div>
                            <div className="flex justify-content gap-8 w-[100%]">
                                <LabelInputText type="text" label="Client First Name" input=""/>
                                <LabelInputText type="text" label="Client Last Name" input=""/>
                            </div>
                            <div className="flex justify-content gap-8 w-[100%]">
                                <LabelInputText type="email" label="Email Address" input=""/>
                                <LabelInputText type="text" label="Date" input=""/>
                            </div>
                        </div>
                    </div>

                    {/*Bussiness DETAILS*/}
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between">
                            <h3 
                            className="text-[#353333] text-[1.2rem] font-[500]">
                                BUSINESS DETAILS
                            </h3>
                            <FiEdit2 />
                        </div>
                        <div className="flex flex-col gap-6 justify-between">
                            <div className="flex justify-content gap-8 w-[100%]">
                                <LabelInputText type="text" label="Business Type" input=""/>
                                <LabelInputText type="text" label="Phone Number" input=""/>
                            </div>
                            <div className="flex justify-content gap-8 w-[100%]">
                                <LabelInputText type="text" label="Country" input=""/>
                                <LabelInputText type="text" label="State" input=""/>
                            </div>
                            <div className="flex justify-content gap-8 w-[100%]">
                                <LabelInputText type="text" label="Address" input=""/>
                                <LabelInputText type="text" label="City" input=""/>
                            </div>
                            <div className="flex justify-content gap-8 w-[48.5%]">
                                <LabelInputText type="text" label="Postal Code" input=""/>
                            </div>
                        </div>
                        {/* <div className="flex flex-col gap-6 justify-between">
                            <div className="flex justify-content gap-8 w-[100%]">
                                <LabelInputText type="text" label="White Label" input="abc"/>
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <div className="w-[70%]">
                                        <LabelInputText type="text" label="Installment" input="1"/>
                                    </div>
                                    <LabelSelectInput label="Installment" option="1"/>
                                </div>
                            </div>
                            <div className="w-[30%]">
                                <LabelSelectInput label="Type" option="New Deal"/>
                            </div>
                        </div> */}
                    </div>

                    {/* iso details */}
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between">
                            <h3 
                            className="text-[#353333] text-[1.2rem] font-[500]">
                                ISO DETAILS
                            </h3>
                            <FiEdit2 />
                        </div>
                        <div className="flex flex-col gap-6 justify-between">
                            <div className="flex justify-content gap-8 w-[100%]">
                                <LabelInputText type="text" label="ISO Name" input=""/>
                                <LabelInputText type="text" label="ISO Sales Rep" input=""/>
                            </div>
                            <div className="flex justify-content gap-8 w-[100%]">
                                <LabelInputText type="text" label="Sales Rep" input=""/>
                                <div className="w-[70%]">
                                    <LabelInputText type="text" label="ISO Manager" input=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}