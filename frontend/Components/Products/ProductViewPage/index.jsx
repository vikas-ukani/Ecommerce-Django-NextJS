import React, { useState } from "react";

const Quickreview4 = () => {
    const [color, setColor] = useState("White");
    const [size, setSize] = useState("");
    const [menu, setMenu] = useState(true);
    const [slide, setSlide] = useState(true);

    const slideToggle = () => setSlide(!slide);

    const getColor = (value) => {
        setColor(value);
    };

    const getSize = (value) => {
        setSize(value);
    };

    return (
        <div>
            <div className="flex justify-center items-center">
                <button onClick={() => setMenu(true)} className="hover:bg-black top-20 absolute z-0 w-40 py-4 bg-gray-800 text-white rounded focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer">
                    Show Modal
                </button>
                <div id="menu" className={"md:px-6 px-4 py-12 w-full h-full flex justify-center  bg-gray-800 " + (menu ? "block" : "hidden")}>
                    <div className="2xl:container 2xl:mx-auto relative  flex justify-start w-96 md:w-10/12 xl:w-8/12 2xl:w-7/12 item-start flex-col lg:flex-row   lg:space-x-8 py-12 md:py-16 lg:py-12 px-4 md:px-8 lg:px-24 bg-white">
                        <div className="w-full">
                            <div className="relative">
                                <div className="slider">
                                    <div className="slide-ana flex flex-shrink-0">
                                        <div className={"flex flex-shrink-0 transform " + (slide ? "translate-x-0" : "-translate-x-full")}>
                                            <img className=" lg:block hidden w-full h-full object-center object-cover" src="https://i.ibb.co/wBknrzK/pexels-monstera-6311641-1-2.png" alt="A girl posing front" />
                                            <img className=" hidden md:block lg:hidden w-full h-full object-center object-cover" src="https://i.ibb.co/JqhZhhp/pexels-monstera-6311641-1-3.png" alt="A girl posing front" />
                                            <img className=" block md:hidden w-full h-full object-center object-cover" src="https://i.ibb.co/FXb2RfJ/pexels-dominika-roseclay-5462562-1.png" alt="A girl posing front" />
                                        </div>
                                        <div className={"flex flex-shrink-0 transform " + (slide ? "translate-x-full" : "translate-x-0")}>
                                            <img className=" lg:block hidden w-full h-full object-center object-cover" src="https://i.ibb.co/FwRy0WL/pexels-monstera-6311575-2-1.png" alt="A girl posing Back" />
                                            <img className=" hidden md:block lg:hidden w-full h-full object-center object-cover" src="https://i.ibb.co/k0bJRQk/pexels-monstera-6311575-3-1.png" alt="A girl posing Back" />
                                            <img className=" block md:hidden w-full h-full object-center object-cover" src="https://i.ibb.co/0f1gRTt/pexels-monstera-6311575-4.png" alt="A girl posing Back" />
                                        </div>
                                    </div>
                                </div>
                                <div className=" transition duration-150 absolute bottom-0 w-full h-full flex justify-between items-center px-4">
                                    <button onClick={slideToggle} aria-label="previous" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full flex justify-center items-center">
                                        <svg className="" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="26" cy="26" r="26" fill="white" />
                                            <path d="M28.4987 19.333L21.832 25.9997L28.4987 32.6663" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <button onClick={slideToggle} aria-label="Next" className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full flex justify-center items-center">
                                        <svg className="" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="26" cy="26" r="26" fill="white" />
                                            <path d="M23.5013 19.333L30.168 25.9997L23.5013 32.6663" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-8 lg:mt-0 flex justify-start items-start w-full flex-col space-y-6">
                            <h2 className=" lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 font-semibold">Plain White Tshirt</h2>
                            <div className=" flex justify-start items-center mt-4">
                                <p className="font-normal text-lg leading-6 text-gray-600 mr-4">$190</p>
                                <div className="cursor-pointer flex space-x-2 mr-3">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path
                                                d="M16.0972 19.25C15.9506 19.2506 15.806 19.216 15.6755 19.1492L11.0005 16.7017L6.32551 19.1492C6.17371 19.229 6.00255 19.2647 5.8315 19.252C5.66045 19.2394 5.49637 19.1791 5.35791 19.0779C5.21945 18.9767 5.11216 18.8386 5.04824 18.6795C4.98433 18.5203 4.96635 18.3464 4.99635 18.1775L5.91301 13.0167L2.13635 9.35003C2.01852 9.23244 1.93493 9.08499 1.89456 8.9235C1.85418 8.762 1.85855 8.59256 1.90718 8.43336C1.96031 8.27044 2.05804 8.12568 2.18929 8.0155C2.32053 7.90532 2.48003 7.83414 2.64968 7.81003L7.87468 7.04919L10.1755 2.34669C10.2506 2.19171 10.3678 2.061 10.5137 1.96955C10.6596 1.8781 10.8283 1.82959 11.0005 1.82959C11.1727 1.82959 11.3414 1.8781 11.4873 1.96955C11.6333 2.061 11.7505 2.19171 11.8255 2.34669L14.1538 7.04003L19.3788 7.80086C19.5485 7.82497 19.708 7.89616 19.8392 8.00634C19.9705 8.11652 20.0682 8.26128 20.1213 8.42419C20.17 8.58339 20.1743 8.75283 20.134 8.91433C20.0936 9.07582 20.01 9.22327 19.8922 9.34086L16.1155 13.0075L17.0322 18.1684C17.0649 18.3402 17.0478 18.5178 16.9828 18.6803C16.9178 18.8427 16.8077 18.9832 16.6655 19.085C16.4995 19.2014 16.2997 19.2594 16.0972 19.25Z"
                                                fill="#1F2937"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="22" height="22" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path
                                                d="M16.0972 19.25C15.9506 19.2506 15.806 19.216 15.6755 19.1492L11.0005 16.7017L6.32551 19.1492C6.17371 19.229 6.00255 19.2647 5.8315 19.252C5.66045 19.2394 5.49637 19.1791 5.35791 19.0779C5.21945 18.9767 5.11216 18.8386 5.04824 18.6795C4.98433 18.5203 4.96635 18.3464 4.99635 18.1775L5.91301 13.0167L2.13635 9.35003C2.01852 9.23244 1.93493 9.08499 1.89456 8.9235C1.85418 8.762 1.85855 8.59256 1.90718 8.43336C1.96031 8.27044 2.05804 8.12568 2.18929 8.0155C2.32053 7.90532 2.48003 7.83414 2.64968 7.81003L7.87468 7.04919L10.1755 2.34669C10.2506 2.19171 10.3678 2.061 10.5137 1.96955C10.6596 1.8781 10.8283 1.82959 11.0005 1.82959C11.1727 1.82959 11.3414 1.8781 11.4873 1.96955C11.6333 2.061 11.7505 2.19171 11.8255 2.34669L14.1538 7.04003L19.3788 7.80086C19.5485 7.82497 19.708 7.89616 19.8392 8.00634C19.9705 8.11652 20.0682 8.26128 20.1213 8.42419C20.17 8.58339 20.1743 8.75283 20.134 8.91433C20.0936 9.07582 20.01 9.22327 19.8922 9.34086L16.1155 13.0075L17.0322 18.1684C17.0649 18.3402 17.0478 18.5178 16.9828 18.6803C16.9178 18.8427 16.8077 18.9832 16.6655 19.085C16.4995 19.2014 16.2997 19.2594 16.0972 19.25Z"
                                                fill="#1F2937"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="22" height="22" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path
                                                d="M16.0972 19.25C15.9506 19.2506 15.806 19.216 15.6755 19.1492L11.0005 16.7017L6.32551 19.1492C6.17371 19.229 6.00255 19.2647 5.8315 19.252C5.66045 19.2394 5.49637 19.1791 5.35791 19.0779C5.21945 18.9767 5.11216 18.8386 5.04824 18.6795C4.98433 18.5203 4.96635 18.3464 4.99635 18.1775L5.91301 13.0167L2.13635 9.35003C2.01852 9.23244 1.93493 9.08499 1.89456 8.9235C1.85418 8.762 1.85855 8.59256 1.90718 8.43336C1.96031 8.27044 2.05804 8.12568 2.18929 8.0155C2.32053 7.90532 2.48003 7.83414 2.64968 7.81003L7.87468 7.04919L10.1755 2.34669C10.2506 2.19171 10.3678 2.061 10.5137 1.96955C10.6596 1.8781 10.8283 1.82959 11.0005 1.82959C11.1727 1.82959 11.3414 1.8781 11.4873 1.96955C11.6333 2.061 11.7505 2.19171 11.8255 2.34669L14.1538 7.04003L19.3788 7.80086C19.5485 7.82497 19.708 7.89616 19.8392 8.00634C19.9705 8.11652 20.0682 8.26128 20.1213 8.42419C20.17 8.58339 20.1743 8.75283 20.134 8.91433C20.0936 9.07582 20.01 9.22327 19.8922 9.34086L16.1155 13.0075L17.0322 18.1684C17.0649 18.3402 17.0478 18.5178 16.9828 18.6803C16.9178 18.8427 16.8077 18.9832 16.6655 19.085C16.4995 19.2014 16.2997 19.2594 16.0972 19.25Z"
                                                fill="#1F2937"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="22" height="22" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path
                                                d="M16.0972 19.25C15.9506 19.2506 15.806 19.216 15.6755 19.1492L11.0005 16.7017L6.32551 19.1492C6.17371 19.229 6.00255 19.2647 5.8315 19.252C5.66045 19.2394 5.49637 19.1791 5.35791 19.0779C5.21945 18.9767 5.11216 18.8386 5.04824 18.6795C4.98433 18.5203 4.96635 18.3464 4.99635 18.1775L5.91301 13.0167L2.13635 9.35003C2.01852 9.23244 1.93493 9.08499 1.89456 8.9235C1.85418 8.762 1.85855 8.59256 1.90718 8.43336C1.96031 8.27044 2.05804 8.12568 2.18929 8.0155C2.32053 7.90532 2.48003 7.83414 2.64968 7.81003L7.87468 7.04919L10.1755 2.34669C10.2506 2.19171 10.3678 2.061 10.5137 1.96955C10.6596 1.8781 10.8283 1.82959 11.0005 1.82959C11.1727 1.82959 11.3414 1.8781 11.4873 1.96955C11.6333 2.061 11.7505 2.19171 11.8255 2.34669L14.1538 7.04003L19.3788 7.80086C19.5485 7.82497 19.708 7.89616 19.8392 8.00634C19.9705 8.11652 20.0682 8.26128 20.1213 8.42419C20.17 8.58339 20.1743 8.75283 20.134 8.91433C20.0936 9.07582 20.01 9.22327 19.8922 9.34086L16.1155 13.0075L17.0322 18.1684C17.0649 18.3402 17.0478 18.5178 16.9828 18.6803C16.9178 18.8427 16.8077 18.9832 16.6655 19.085C16.4995 19.2014 16.2997 19.2594 16.0972 19.25Z"
                                                fill="#1F2937"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="22" height="22" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0)">
                                            <path
                                                d="M2.76556 8.70194L2.76068 8.70696L2.75719 8.71056L2.75246 8.70902L1.90718 8.43336L2.75837 8.69339M2.76556 8.70194L2.75837 8.69339M2.76556 8.70194L2.77032 8.69704L2.76556 8.70194ZM2.76556 8.70194L2.75837 8.69339M15.1929 13.1714L16.1062 18.313L16.0985 18.313L11.4351 15.8716L11.0005 15.6441L10.5659 15.8716L5.92615 18.3006L6.83558 13.1806L6.92255 12.6909L6.56571 12.3444L2.84177 8.72894L8.0097 7.97641L8.49902 7.90516L8.71634 7.461L11.0006 2.79232L13.3145 7.45644L13.5328 7.89647L14.0188 7.96725L19.1868 8.71977L15.4628 12.3352L15.106 12.6817L15.1929 13.1714Z"
                                                stroke="#1F2937"
                                                strokeWidth="1.874"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="22" height="22" fill="white" transform="translate(0.363281)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <p className=" font-normal text-sm leading-3 hover:text-gray-700 duration-100 cursor-pointer text-gray-500 underline">18 reviews</p>
                            </div>
                            <div className="  mt-10">
                                <p id="text" className=" font-semibold text-base leading-4 text-gray-800">
                                    {color}
                                </p>
                                <div className=" flex space-x-2 mt-4">
                                    <div tabIndex="0" onClick={() => getColor("White")} className="focus:outline-none ring-1 ring-offset-2 ring-gray-800 rounded-full cursor-pointer w-8 h-8 bg-gray-50"></div>
                                    <div tabIndex="0" onClick={() => getColor("Red")} className="focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-800 rounded-full cursor-pointer w-8 h-8 bg-red-700"></div>
                                    <div tabIndex="0" onClick={() => getColor("Yellow")} className="focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-800 rounded-full cursor-pointer w-8 h-8 bg-yellow-300"></div>
                                </div>
                            </div>
                            <div className=" mt-10 w-full">
                                <div className=" flex justify-between">
                                    <p className="font-semibold text-base leading-4 text-gray-800">Size</p>
                                    <p className="cursor-pointer hover:text-gray-800 font-medium text-base leading-4 text-gray-500 underline">Size guide</p>
                                </div>
                                <div className=" grid grid-cols-3 gap-10 sm:flex sm:flex-wrap md:gap-4 sm:justify-between lg:justify-start mt-4">
                                    <div onClick={() => getSize("XSS")} id="XSS" className={"font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer " + (size === "XSS" ? "border-gray-500" : "border-gray-200")}>
                                        XXS
                                    </div>
                                    <div onClick={() => getSize("XS")} id="XS" className={"font-medium text-base leading-4 text-gray-800 border  py-3 w-20 text-center cursor-pointer " + (size === "XS" ? "border-gray-500" : "border-gray-200")}>
                                        XS
                                    </div>
                                    <div onClick={() => getSize("S")} id="S" className={"font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer " + (size === "S" ? "border-gray-500" : "border-gray-200")}>
                                        S
                                    </div>
                                    <div onClick={() => getSize("M")} id="M" className={"font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer " + (size === "M" ? "border-gray-500" : "border-gray-200")}>
                                        M
                                    </div>
                                    <div onClick={() => getSize("L")} id="L" className={"font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer " + (size === "L" ? "border-gray-500" : "border-gray-200")}>
                                        L
                                    </div>
                                    <div onClick={() => getSize("XL")} id="XL" className={"font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer " + (size === "XL" ? "border-gray-500" : "border-gray-200")}>
                                        XL
                                    </div>
                                </div>
                            </div>
                            <p className=" mt-4 font-normal text-sm leading-3 text-gray-500 hover:text-gray-600 duration-100 underline cursor-pointer">Find the perfect size?</p>

                            <div className="flex flex-col w-full space-y-4 mt-10">
                                <button className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 md:w-96 w-full hover:bg-black text-base font-medium leading-4 bg-gray-800 py-4 text-white">Add to Bag</button>
                                <button className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 md:w-96 w-full hover:bg-gray-300 text-base font-medium leading-4 text-gray-800 py-4 bg-white">Add to Wishlist</button>
                            </div>
                        </div>
                        <button onClick={() => setMenu(false)} aria-label="show Menu" className="absolute top-4 right-4  md:top-6 md:right-6 focus:outline-none focus:ring-2  focus:ring-gray-800">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3346 13.3337L2.66797 2.66699M13.3346 2.66699L2.66797 13.3337" stroke="#1F2937" strokeLinecap="square" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <style>
                {` 
                .slider {
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                }

                .slide-ana {
                    height: 539px;
                }   

                .slide-ana > div {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    transition: all 1s;
                }
            `}
            </style>
        </div>
    );
};

export default Quickreview4;
