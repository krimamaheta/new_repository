import { Icon } from "@mui/material";
import link from "next/link";
import React, { ReactElement } from "react";
import { IconType } from "react-icons";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import PaymentIcon from '@mui/icons-material/Payment';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EmailIcon from '@mui/icons-material/Email';
import EventIcon from '@mui/icons-material/Event';

interface SideBarItem{
    title:string;
    icon:ReactElement<IconType>;
    link:string;
}
export const SideBarData:SideBarItem[]=[
    {
        title: "DashBoard",
        icon: <DashboardIcon/>, 
        link: "/admin/dashboard",
    },
    // {
    //     title: "Home",
    //     icon: <HomeIcon/>, 
    //     link: "/home",
    // },
    {
        title: "User",
        icon: <PersonIcon/>, 
        link: "/admin/user",
    },
    {
        title: "Event",
        icon: <EventIcon/>, 
        link: "/admin/event",
    },
    {
        title: "Vendors",
        icon: <AutoAwesomeIcon/>,
        link: "/admin/vendors",
    },
    // {
    //     title: "Caterer",
    //     icon: <RestaurantMenuIcon/>, 
    //     link: "/caterer",
    // },
    {
        title: "Booking",
        icon: <BookmarkAddedIcon/>, 
        link: "/admin/booking",
    },
    // {
    //     title: "Payment",
    //     icon: <PaymentIcon/>,
    //     link: "/payment",
    // },

    {
        title: "Mail",
        icon: <EmailIcon/>, 
        link: "/mail",
    }


]