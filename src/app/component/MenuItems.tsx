import {
  IconBoxMultiple, IconCircleDot, IconHome, IconInfoCircle, IconLayout, IconLayoutGrid, IconPhoto, IconPoint, IconStar, IconTable, IconUser
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconHome,
    href: "/admin/dashboard",
  },
  {
    id: uniqueId(),
    title: "Users",
    icon: IconCircleDot,
    href: "/admin/user",
  },
  {
    id: uniqueId(),
    title: "Vendors",
    icon: IconTable,
    href: "/admin/vendors",
  },
  {
    id: uniqueId(),
    title: "Events",
    icon: IconInfoCircle,
    href: "/admin/event",
  },
  {
    id: uniqueId(),
    title: "Bookings",
    icon: IconStar,
    href: "/admin/booking",
  },
  {
    id: uniqueId(),
    title: "Images",
    icon: IconPhoto,
    href: "/admin/dashboard",
  },
  
  {
    id: uniqueId(),
    title: "Tables",
    icon: IconLayoutGrid,
    href: "/ui-components/table",
  },
];

export default Menuitems;
