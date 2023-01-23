import axios from "axios";
import Image from "next/image";
import Link from "next/link"
import { FaSearch } from "react-icons/fa";
import { useAuthDispatch, useAuthState } from "../context/auth"

const NavBar: React.FC = () => {
    const { loading, authenticated } = useAuthState();
    const dispatch = useAuthDispatch();

    const handleLogout = () => {
        axios.post("/auth/logout")
            .then(() => {
                dispatch("LOGOUT");
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className=" ">
            <div className=" flex max-w-5xl px-4 mx-auto ">
                <span className="w-full md:mr-3 md:w-8/12 ">
                    
                    <Link href="/">
                        <a>
                        <Image
                            src="/logo6.png"
                            alt="logo"
                            width={160}
                            height={50}
                        >
                        </Image>
                        </a>
                    </Link>
                </span>
                {/* <div className="max-w-full px-4">
                    <div className="relative flex items-center bg-gray-100 border rounded hover:border-gray-700 hover:bg-white">
                        <FaSearch className="ml-2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search Reddit"
                            className="px-3 py-1 bg-transparent rounded h-7 focus:outline-none"
                        />
                    </div>
                </div> */}

                <div className="flex w-4/12 ml-3 md:block pt-3 ">
                    <div className="flex justify-end">
                        {!loading && (
                            authenticated ? (
                                <button
                                    className="w-20 px-2 py-1 mr-1 text-sm text-center text-white bg-gray-400 rounded h-7"
                                    onClick={handleLogout}
                                >
                                    로그아웃
                                </button>
                            ) : (<>
                                <Link href="/login">
                                    <a className="w-20 px-2 py-1 mr-2 text-sm text-center text-blue-500 border border-blue-500 rounded h-7">
                                        로그인
                                    </a>
                                </Link>
                                <Link href="/register">
                                    <a className="w-20 px-2 py-1 text-sm text-center text-white bg-gray-400 rounded h-7">
                                        회원가입
                                    </a>
                                </Link>
                            </>)
                        )}
                    </div>        
                </div>
            </div>
        </div>
    )
}

export default NavBar