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
        icon: <DashboardIcon/>, // Replace Icon with your actual icon component
        link: "/admin/dashboard",
    },
    // {
    //     title: "Home",
    //     icon: <HomeIcon/>, // Replace Icon with your actual icon component
    //     link: "/home",
    // },
    {
        title: "User",
        icon: <PersonIcon/>, // Replace Icon with your actual icon component
        link: "/admin/user",
    },
    {
        title: "Event",
        icon: <EventIcon/>, // Replace Icon with your actual icon component
        link: "/admin/event",
    },
    {
        title: "Vendors",
        icon: <AutoAwesomeIcon/>, // Replace Icon with your actual icon component
        link: "/admin/vendors",
    },
    // {
    //     title: "Caterer",
    //     icon: <RestaurantMenuIcon/>, // Replace Icon with your actual icon component
    //     link: "/caterer",
    // },
    {
        title: "Booking",
        icon: <BookmarkAddedIcon/>, // Replace Icon with your actual icon component
        link: "/admin/booking",
    },
    // {
    //     title: "Payment",
    //     icon: <PaymentIcon/>, // Replace Icon with your actual icon component
    //     link: "/payment",
    // },

    {
        title: "Mail",
        icon: <EmailIcon/>, // Replace Icon with your actual icon component
        link: "/mail",
    }


]