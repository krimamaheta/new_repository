
import React from "react";
import style from "./../admin/style.module.css"
import Image from "next/image";
import { SideBarData } from "./SideBarData";
import { Search } from "@mui/icons-material";
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import LightModeIcon from '@mui/icons-material/LightMode';
import Link from "next/link";
import { logout } from "@/Redux/authslice/authslice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from 'react-redux';
import { removeToken } from "@/lib/AuthToken";
const SideBar: React.FC = () => {


    const handleclick = (link: string) => {
        window.location.pathname = link;
    }

    const User=useSelector((state)=>state.auth.user);
    console.log(User);
    const Email = User?.user?.email
    
    return (
        <div className={style.sidebar}>
            <div className={style.heading1}>{Email}</div>
            {/* <div className={style.heading1}>Online</div> */}
            <ul className={style.sidebarlist}>
                {SideBarData.map((value, key) => {
                    return (
                        <li id={window.location.pathname == value.link ? "active" : ""}
                            className={style.row} key={key} onClick={() => handleclick(value.link)}>{" "}
                            <div className={style.icon}>
                                {value.icon}
                            </div>{" "}
                            <div className={style.title}>
                                {value.title}
                            </div>
                        </li>
                    )
                })}</ul>


        </div>
    )
}
export default SideBar;

export const Searching = () => {

    const Logo = () => (
       
        <Image src="/logo.png" alt="Logo" width={110} height={40} />
      
    );

    const route = useRouter();
    const dispatch = useDispatch();

    const handleLogout = async() => {
        await removeToken();
        dispatch(logout());
        route.push("/landingpage");
    }
    return (

        <div className={style.searchContainer}>
            <Logo />
            <div className={style.search1}><input type="text" placeholder="Search..." /></div>
            <div className={style.search2}><NotificationsIcon className={style.searchIcon} />
                <LightModeIcon className={style.searchIcon} /><ArrowDropDownCircleIcon className={style.searchIcon} /><ContentPasteSearchIcon className={style.searchIcon} />
                <button onClick={handleLogout} className={style.heading1}>LogOut</button>

            </div>
        </div>
    )
}


