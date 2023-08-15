// component
import SvgColor from "../../../components/svg-color";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PersonIcon from "@mui/icons-material/Person";
import GridViewIcon from "@mui/icons-material/GridView";
import BadgeIcon from "@mui/icons-material/Badge";
import ContactMailIcon from '@mui/icons-material/ContactMail';

// ----------------------------------------------------------------------

const navConfig = [
  {
    title: "dashboard",
    path: "/dashboard/app",
    icon: <GridViewIcon />,
  },
  {
    title: "kullanıcı",
    path: "/dashboard/user",
    icon: <PersonIcon />,
  },
  {
    title: "çalışan",
    path: "/dashboard/employee",
    icon: <BadgeIcon />,
  },
  {
    title: "hiyerarşi",
    path: "/dashboard/hierarchy",
    icon: <AccountTreeIcon />,
  },
  {
    title: "Yıllık İzin",
    path: "/dashboard/annualleave",
    icon: <ContactMailIcon />,
  },
];

export default navConfig;
