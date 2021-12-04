import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

function Index() {
    const router = useRouter()

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const dispatch = useDispatch()


    const logoutProcess = () => {
        removeToken()
        router.push('/auth/login')
        dispatch(saveToken(null))
    }
    return (
        <>
            <div className="relative inline-block text-left">
                <div >
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        class="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700   mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        My Account
                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                        <div className="py-1" role="none">
                            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">My Account
                            </a>
                            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1"> My Orders</a>
                        </div>
                        <div className="py-1" role="none">
                            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Notifications</a>
                            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-3"> My Payment History</a>
                        </div>
                        <div className="py-1" role="none">
                            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-4"> Account & Security</a>
                        </div>
                      
                        <div className="py-1" role="none">
                            <button onClick={logoutProcess} className="text-gray-700 block px-4 py-2 text-sm fa-bold" role="menuitem" tabIndex="-1" id="menu-item-6">Logout</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
export default Index;
