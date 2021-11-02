import React from "react";

function MyProfile() {
    return (
        <div>
            <div className="w-full bg-white p-10">
                <div className="md:flex items-center border-b pb-6 border-gray-200">
                    <div className="flex items-center md:mt-0 mt-4">
                        <div className="w-8 h-8 bg-indigo-700 rounded flex items-center justify-center">
                            <p className="text-base font-medium leading-none text-white">01</p>
                        </div>
                        <p className="text-base ml-3 font-medium leading-4 text-gray-800">Sign Up</p>
                    </div>
                    <div className="flex items-center md:mt-0 mt-4 md:ml-12">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                            <p className="text-base font-medium leading-none text-gray-800">02</p>
                        </div>
                        <p className="text-base ml-3 font-medium leading-4 text-gray-800">Security Check</p>
                    </div>
                    <div className="flex items-center md:mt-0 mt-4 md:ml-12">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                            <p className="text-base font-medium leading-none text-gray-800">03</p>
                        </div>
                        <p className="text-base ml-3 font-medium leading-4 text-gray-800">Confirm Info</p>
                    </div>
                    <div className="flex items-center md:mt-0 mt-4 md:ml-12">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                            <p className="text-base font-medium leading-none text-gray-800">04</p>
                        </div>
                        <p className="text-base ml-3 font-medium leading-4 text-gray-800">Onboarding</p>
                    </div>
                </div>
                <h1 tabIndex={0} role="heading" aria-label="profile information" className="focus:outline-none text-3xl font-bold text-gray-800 mt-12">
                    Profile info
                </h1>
                <p role="contentinfo" className=" focus:outline-nonetext-sm font-light leading-tight text-gray-600 mt-4">
                    Fill in the data for profile. It will take a couple of minutes. <br />
                    You only need a passport
                </p>
                <h2 role="heading" aria-label="enter Personal data" className="text-xl font-semibold leading-7 text-gray-800 mt-10">
                    Personal data
                </h2>
                <p className="text-sm font-light leading-none text-gray-600 mt-0.5">Your details and place of birth</p>
                <div className="mt-8 md:flex items-center">
                    <div className="flex flex-col">
                        <label className="mb-3 text-sm leading-none text-gray-800">First name</label>
                        <input type="name" tabIndex={0} aria-label="Enter first name" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" defaultValue="William" />
                    </div>
                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                        <label className="mb-3 text-sm leading-none text-gray-800">Last name</label>
                        <input type="name" tabIndex={0} aria-label="Enter last name" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" defaultValue="Smith" />
                    </div>
                </div>
                <div className="mt-12 md:flex items-center">
                    <div className="flex flex-col">
                        <label className="mb-3 text-sm leading-none text-gray-800">Email Address</label>
                        <input type="email" tabIndex={0} aria-label="Enter email Address" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" defaultValue="smith.william@gmail.com" />
                    </div>
                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                        <label className="mb-3 text-sm leading-none text-gray-800">Phone number</label>
                        <input type="number" tabIndex={0} aria-label="Enter phone number" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" defaultValue="+81 839274" />
                    </div>
                </div>
                <div className="mt-12 md:flex items-center">
                    <div className="flex flex-col">
                        <label className="mb-3 text-sm leading-none text-gray-800">Date of birth</label>
                        <input type tabIndex={0} aria-label="Enter date of birth" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" defaultValue="28.03.1997" />
                    </div>
                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                        <label className="mb-3 text-sm leading-none text-gray-800">Place of birth</label>
                        <input type="name" tabIndex={0} aria-label="Enter place of birth" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" defaultValue="San Diego, CA, USA" />
                    </div>
                </div>
                <div className="mt-12">
                    <div className="py-4 flex items-center">
                        <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                            <input type="checkbox" tabIndex={0} aria-label="I agree with the terms of service" defaultChecked className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                            <div className="check-icon hidden bg-blue-500 text-white rounded-sm">
                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                        </div>
                        {/* <p className="text-sm leading-none ml-2">
                            I agree with the <span className="text-indigo-700">terms of service</span>
                        </p> */}
                    </div>
                </div>
                <button role="button" aria-label="Save" className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                    <span className="text-sm font-medium text-center text-gray-800 capitalize">Save</span>
                    {/* <svg className="mt-1 ml-3" width={12} height={8} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z" fill="#242731" />
                    </svg> */}
                </button>
            </div>
            <style dangerouslySetInnerHTML={{ __html: "\n          .checkbox:checked + .check-icon {\n              display: flex;\n          }\n      " }} />
        </div>
    );
}

export default MyProfile;