import React from "react";

function InvoiceTemplate() {
    return (
        <>
            <div className="bg-gray-700 absolute w-full h-full py-8 top-0" id="modal">
                <div className="flex items-center justify-center px-4 h-full w-full relative">
                    <div className="fixed overflow-y-auto w-11/12 h-screen py-10 max-w-lg">
                        <div className="bg-white rounded-md relative">
                            <div onclick="modalHandler(false)" className="absolute inset-0 m-auto w-5 h-5 mr-4 mt-4 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1={18} y1={6} x2={6} y2={18} />
                                    <line x1={6} y1={6} x2={18} y2={18} />
                                </svg>
                            </div>
                            <div className="bg-gray-100 rounded-tl-md rounded-tr-md md:px-10 px-5 pt-9 pb-2.5">
                                <div className="sm:flex justify-between">
                                    <div>
                                        <svg width={65} height={43} viewBox="0 0 65 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M39.2096 5.81325C35.6428 8.21248 31.4751 8.68642 16.4229 4.27679C6.74157 1.44026 0.0118366 8.76797 3.01063e-05 18.4299C-0.00587317 23.226 0.856005 27.8673 2.9009 31.8763C5.34367 36.6605 15.4949 46.456 17.0133 38.0788C23.2707 3.56766 24.5694 28.7419 31.1811 28.2691C35.6581 27.9488 36.6121 -1.98722 47.1199 39.4971C49.9783 50.7829 64.936 30.8835 64.936 18.4299C64.936 13.8241 64.1544 9.36127 62.2536 5.47286C57.5097 -4.23281 46.4115 0.967502 39.2096 5.81325Z" fill="url(#paint0_radial)" />
                                            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x={0} y={0} width={65} height={43}>
                                                <path d="M39.2096 5.81325C35.6428 8.21248 31.4751 8.68642 16.4229 4.27679C6.74157 1.44026 0.0118366 8.76797 3.01063e-05 18.4299C-0.00587317 23.226 0.856005 27.8673 2.9009 31.8763C5.34367 36.6605 15.4949 46.456 17.0133 38.0788C23.2707 3.56766 24.5694 28.7419 31.1811 28.2691C35.6581 27.9488 36.6121 -1.98722 47.1199 39.4971C49.9783 50.7829 64.936 30.8835 64.936 18.4299C64.936 13.8241 64.1544 9.36127 62.2536 5.47286C57.5097 -4.23281 46.4115 0.967502 39.2096 5.81325Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0)">
                                                <path d="M7.11465 40.7973C7.11465 40.7973 13.136 20.2324 29.0748 36.6607C42.8814 50.8906 61.3067 31.5786 61.3067 31.5786L60.126 49.4251L31.4361 55.4527H1.44751L7.11465 40.7973Z" fill="url(#paint1_linear)" />
                                                <path d="M20.8105 -3.64205C20.8105 -3.64205 6.87875 -3.64205 9.59425 15.5045C10.8528 24.377 9.20582 34.5129 -5.12614 37.9238C-19.4581 41.3347 -9.96801 -6.23039 -9.96801 -6.23039L26.8318 -27.0435L20.8105 -3.64205Z" fill="url(#paint2_radial)" />
                                                <path d="M32.4906 -6.52198C32.4906 -6.52198 31.0703 15.8914 44.9619 15.4221C58.8535 14.9541 64.9386 20.7643 64.9787 30.821C65.0189 40.8777 83.5776 10.1367 83.5776 10.1367L59.1333 -17.8965L32.4906 -6.52198Z" fill="url(#paint3_radial)" />
                                            </g>
                                            <circle cx="26.7861" cy="39.6431" r="2.50001" fill="#E05500" />
                                            <circle cx="36.7859" cy="39.6431" r="2.50001" fill="#E05500" />
                                            <defs>
                                                <radialGradient id="paint0_radial" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(32.4688 21.4197) rotate(-0.0175754) scale(57.9778 58.0384)">
                                                    <stop stopColor="#FF9900" />
                                                    <stop offset={1} stopColor="#C41700" />
                                                </radialGradient>
                                                <linearGradient id="paint1_linear" x1="-3.76862" y1="40.2451" x2="77.4031" y2="46.0197" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FF9900" />
                                                    <stop offset={1} stopColor="#C41700" />
                                                </linearGradient>
                                                <radialGradient id="paint2_radial" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(6.89195 5.52766) rotate(-0.0435159) scale(35.6073 88.254)">
                                                    <stop stopColor="#FF9900" />
                                                    <stop offset={1} stopColor="#C41700" />
                                                </radialGradient>
                                                <radialGradient id="paint3_radial" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(58.0142 7.47283) rotate(-0.026438) scale(45.6493 68.7402)">
                                                    <stop stopColor="#FF9900" />
                                                    <stop offset={1} stopColor="#C41700" />
                                                </radialGradient>
                                            </defs>
                                        </svg>
                                        <p className="text-lg font-bold text-gray-500 mt-2">Good Company</p>
                                        <div className="mt-2">
                                            <p className="text-xs font-semibold leading-3 text-gray-800 uppercase">RECIPIENT</p>
                                            <p className="text-xs leading-4 text-gray-500 uppercase mt-1">
                                                JOHN SMITH
                                                <br />
                                                4304 Liberty Avenue
                                                <br />
                                                92680 Tustin, CA
                                                <br />
                                                VAT no.: 12345678
                                            </p>
                                        </div>
                                        <div className="mt-3">
                                            <div className="flex space-x-1 items-center text-xs leading-3">
                                                <p className="text-blue-500">@</p>
                                                <p className="text-gray-500">company.mail@gmail.com</p>
                                            </div>
                                            <div className="flex space-x-1 items-center text-xs leading-3 mt-2">
                                                <p className="text-blue-500">m</p>
                                                <p className="text-gray-500">+386 714 505 8385</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 sm:mt-0 sm:flex flex-col sm:items-end sm:text-right">
                                        <div className="py-2.5 px-5 bg-red-100 rounded-full text-xs leading-3 text-red-500 w-24 sm:w-auto">Pending</div>
                                        <p className="text-xs leading-5 text-light-blue mt-3">
                                            XYZ Company <br />
                                            <span className="text-gray-500">
                                                1331 Hart Ridge Road <br />
                                                48436 Gaines, MI <br />
                                                TAX ID: 987654321
                                            </span>
                                        </p>
                                        <div className="mt-3">
                                            <div className="flex space-x-1 items-center text-xs leading-3">
                                                <p className="text-blue-500">@</p>
                                                <p className="text-gray-500">company.mail@gmail.com</p>
                                            </div>
                                            <div className="flex space-x-1 items-center sm:justify-end text-xs leading-3 mt-2">
                                                <p className="text-blue-500">m</p>
                                                <p className="text-gray-500">+386 714 505 8385</p>
                                            </div>
                                        </div>
                                        <div className="mt-6 text-xs leading-3 sm:text-right">
                                            <p className="text-gray-800 uppercase">invoice no.</p>
                                            <p className="text-gray-500 mt-1">#IDO-2202-2</p>
                                            <div className="mt-3">
                                                <p className="text-gray-800 uppercase">Invoice date</p>
                                                <p className="text-gray-500 mt-1">February 2, 2020</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-3.5 pb-9 px-10">
                                <div className="w-full overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="text-xs leading-none text-gray-500 border-b border-gray-200 text-left">
                                            <tr>
                                                <th className="pb-2">Items</th>
                                                <th className="pb-2">Quantity</th>
                                                <th className="pb-2">Rate</th>
                                                <th className="pb-2 text-right">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="text-xs leading-3 text-gray-800 text-left border-b border-gray-200">
                                                <td className="py-4 w-1/2">Natural Herbs</td>
                                                <td className="py-4">14 grams</td>
                                                <td className="py-4">$15</td>
                                                <td className="py-4 text-right">$28</td>
                                            </tr>
                                            <tr className="text-xs leading-3 text-gray-800 text-left border-b border-gray-200">
                                                <td className="py-4 w-1/2">Active Plus</td>
                                                <td className="py-4">7 grams</td>
                                                <td className="py-4">$7.5</td>
                                                <td className="py-4 text-right">$14</td>
                                            </tr>
                                            <tr className="text-xs leading-3 text-gray-800 text-left">
                                                <td className="py-4 w-1/2" />
                                                <td className="py-4 border-b border-gray-200">Sub total</td>
                                                <td className="border-b border-gray-200 py-4" />
                                                <td className="border-b border-gray-200 py-4 text-right">$14</td>
                                            </tr>
                                            <tr className="text-xs leading-3 text-gray-800 text-left">
                                                <td className="py-4 w-1/2" />
                                                <td className="py-4 border-b border-gray-200">10% Tax</td>
                                                <td className="border-b border-gray-200 py-4" />
                                                <td className="border-b border-gray-200 py-4 text-right">$2</td>
                                            </tr>
                                            <tr className="text-xs leading-3 text-gray-800 text-left">
                                                <td className="py-4 w-1/2" />
                                                <td className="py-4 font-bold">TOTAL</td>
                                                <td className="py-4" />
                                                <td className="text-indigo-400 py-4 text-right">$42</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-9">
                                    <p className="text-xs leading-4 text-gray-500">All amounts are in dollars. Please make the payment within 15 days from the issue of date of this invoice.</p>
                                    <div className="flex items-center justify-between mt-8">
                                        <button onclick="modalHandler(false)" className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white">
                                            Close
                                        </button>
                                        <button className="px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white">Send Invoice</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InvoiceTemplate;
