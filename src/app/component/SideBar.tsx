// /* eslint-disable react/jsx-no-undef */
// "use client"
// import router from "next/navigation"
// import React, { Children, useContext, useState } from "react";
// import Image from "next/image";
// import { ChevronLeft } from "@mui/icons-material";
// import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
// import { createContext } from "vm";
// import { useRouter } from "next/router";

// interface SidebarContextType{
//     expanded: boolean;
// }
// const Logo = () => (
//     <div>
//     <Image src="/logo.png" alt="Logo" width={120} height={40} />
//     </div>
//   );

//   const SidebarContext=createContext<SidebarContextType>({ expanded: true });
// const SideBar=({Children}:any)=>{
//     const[expanded,setExpanded]=useState(true);

//     return(
//         <SidebarContext.Provider value={{ expanded }}>
//         <div>
//           <h1>WELCOME ADMIN PANEL</h1>
//           <aside className="h-screen">
//             <nav className="h-full flex flex-col bg-white border-r shadow-sm">
//               <div className="p-4 pb-2 flex justify-between items-center">
//                 <div
//                   className={`overflow-hidden transition-all ${
//                     expanded ? "W-32" : "W-0"
//                   }`}
//                 >
//                   <Logo />
//                 </div>

//                 <button
//                   className="p-1.5 rounded-lg  bg-gray-50 hover:bg-gray-100"
//                   onClick={() => setExpanded((cur) => !cur)}
//                 >
//                   {expanded ? <LuChevronFirst /> : <LuChevronLast />}
//                 </button>
//               </div>

//               {/* Render children */}
//               <ul className="flex-1 px-3">{Children}</ul>

//               <div className="border-t flex p-3">
//                 <Logo />
//                 <div
//                   className={`flex justify-between items-center overflow-hidden transition-all ${
//                     expanded ? "W-52 ml-3" : "W-0"
//                   }`}
//                 >
//                   <div className="leading-4">
//                     <h4 className="font-semibold">MahetaKrima</h4>
//                     <span className="text-xs text-gray-600">krima@gmail.com</span>
//                   </div>
//                 </div>
//               </div>
//             </nav>
//           </aside>
//         </div>
//       </SidebarContext.Provider>
//     )
// }
// export default SideBar;

// export const SideBarItem: React.FC<{
//     icon: JSX.Element;
//     text: string;
//     active?: boolean;
//     alert?: boolean;
//     link:string;
//   }> = ({ icon, text, active,link, alert }) => {
//     const { expanded }:any = useContext(SidebarContext);
//     const route=useRouter()
//     const handleClick=()=>{
//             route.push(link);
//     }
//     return(
//         <li className={`relative flex item-center py-2 px-3 my-1  font-medium rounded-md cursor-pointer transition-colors group
//          ${active?
//         "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800":"hover:bg-indigo-50 text-gray-600"}`}>
//             {icon}
//             <span className={`overflow-hidden transition-all ${expanded ? "W-32":"W-0"}`}>{text}</span>
//             {alert &&(
//                 <div className={`absulate-right-2 w-2 h-2 rounded bg-indigo-400 ${expanded?"":"top-2"}`}></div>
//             )}
//             {!expanded && <div className={`absolate left-full rounded-md px-2  py-1  ml-6  bg-indigo-100 text-indio-800 text-sm invisible opacity-20
//             -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:tra`}>{text}</div>}
//         </li>
//     )
// }
// // export default AdminPanel;
// // import * as React from 'react';
// // import { styled, alpha } from '@mui/material/styles';
// // import AppBar from '@mui/material/AppBar';
// // import Box from '@mui/material/Box';
// // import Toolbar from '@mui/material/Toolbar';
// // import IconButton from '@mui/material/IconButton';
// // import Typography from '@mui/material/Typography';
// // import InputBase from '@mui/material/InputBase';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import SearchIcon from '@mui/icons-material/Search';

// // const Search = styled('div')(({ theme }) => ({
// //   position: 'relative',
// //   borderRadius: theme.shape.borderRadius,
// //   backgroundColor: alpha(theme.palette.common.white, 0.15),
// //   '&:hover': {
// //     backgroundColor: alpha(theme.palette.common.white, 0.25),
// //   },
// //   marginLeft: 0,
// //   width: '100%',
// //   [theme.breakpoints.up('sm')]: {
// //     marginLeft: theme.spacing(1),
// //     width: 'auto',
// //   },
// // }));

// // const SearchIconWrapper = styled('div')(({ theme }) => ({
// //   padding: theme.spacing(0, 2),
// //   height: '100%',
// //   position: 'absolute',
// //   pointerEvents: 'none',
// //   display: 'flex',
// //   alignItems: 'center',
// //   justifyContent: 'center',
// // }));

// // const StyledInputBase = styled(InputBase)(({ theme }) => ({
// //   color: 'inherit',
// //   width: '100%',
// //   '& .MuiInputBase-input': {
// //     padding: theme.spacing(1, 1, 1, 0),
// //     // vertical padding + font size from searchIcon
// //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
// //     transition: theme.transitions.create('width'),
// //     [theme.breakpoints.up('sm')]: {
// //       width: '12ch',
// //       '&:focus': {
// //         width: '20ch',
// //       },
// //     },
// //   },
// // }));

// // export default function SearchAppBar() {
// //   return (
// //     <Box sx={{ flexGrow: 1 }}>
// //       <AppBar position="static">
// //         <Toolbar>
// //           <IconButton
// //             size="large"
// //             edge="start"
// //             color="inherit"
// //             aria-label="open drawer"
// //             sx={{ mr: 2 }}
// //           >
// //             <MenuIcon />
// //           </IconButton>
// //           <Typography
// //             variant="h6"
// //             noWrap
// //             component="div"
// //             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
// //           >
// //             MUI
// //           </Typography>
// //           <Search>
// //             <SearchIconWrapper>
// //               <SearchIcon />
// //             </SearchIconWrapper>
// //             <StyledInputBase
// //               placeholder="Search…"
// //               inputProps={{ 'aria-label': 'search' }}
// //             />
// //           </Search>
// //         </Toolbar>
// //       </AppBar>
// //     </Box>
// //   );
// // }
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
        // <div className={style.image1}>
        <Image src="/logo.png" alt="Logo" width={110} height={40} />
        // </div>
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


