"use client"
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



// import { useMediaQuery, Box, Drawer, MenuItem } from "@mui/material";
// //import Logo from "../shared/logo/Logo";
// import SidebarItems from "./SidebarItems";
// import { ThemeProvider } from "@mui/material/styles";
// import { useTheme } from "@mui/material/styles";
// import Menuitems from "./MenuItems";

// //import Upgrade from "./Updrade";

// interface ItemType {
//   isMobileSidebarOpen?: boolean;
//   onSidebarClose?: (event: React.MouseEvent<HTMLElement>) => void;
//   isSidebarOpen?: boolean;
// }

// const Sidebar = ({
//   isMobileSidebarOpen,
//   onSidebarClose,
//   isSidebarOpen,
// }: ItemType) => {
//  // const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
//  const theme = useTheme(); // Use useTheme hook to get the theme object
//  const lgUp = useMediaQuery(theme.breakpoints.up("lg")); 
//   const sidebarWidth = "270px";

// //   const isMobileSidebarOpen=true;
// //   const onSidebarClose = (event:any) => {
// //     console.log("Sidebar closed");
// //   };
// //   const isSidebarOpen=true;

//   if (lgUp) {
//     return (
//       <Box
//         sx={{
//           width: sidebarWidth,
//           flexShrink: 0,
//         }}
//       >
        
//         {/* <Drawer
//           anchor="left"
//           open={isSidebarOpen}
//           variant="permanent"
//           PaperProps={{
//             sx: {
//               width: sidebarWidth,
//               boxSizing: "border-box",
//               border: "0",
//               boxShadow: "rgba(113, 122, 131, 0.11) 0px 7px 30px 0px",
//             },
//           }}
//         > */}
//          <Drawer
//       anchor="left"
//       open={isMobileSidebarOpen}
//       onClose={onSidebarClose}
//       variant="temporary"
//       PaperProps={{
//         sx: {
//           width: sidebarWidth,
//           boxShadow: (theme) => theme.shadows[8],
//         },
//       }}
//     >
        
//           <Box
//             sx={{
//               height: "100%",
//             }}
//             py={2}
//           >
            
//             <Box px={2}>
//               {/* <Logo /> */}
//             </Box>
//             <Box>
           
//               <Box mt={3}><SidebarItems /></Box>
             
             
//             </Box>
//           </Box>
//         </Drawer>
//       </Box>
//     );
//   }

//   return (
//     <Drawer
//       anchor="left"
//       open={isMobileSidebarOpen}
//       onClose={onSidebarClose}
//       variant="temporary"
//       PaperProps={{
//         sx: {
//           width: sidebarWidth,
//           boxShadow: (theme) => theme.shadows[8],
//         },
//       }}
//     >
     
//       <Box px={2} py={2}>
//         {/* <Logo /> */}
//       </Box>
     
//       <SidebarItems />
//       {/* <Upgrade /> */}
//     </Drawer>
//   );
// };

// export default Sidebar;