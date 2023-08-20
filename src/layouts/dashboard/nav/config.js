// component
import SvgColor from "../../../components/svg-color";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PersonIcon from "@mui/icons-material/Person";
import GridViewIcon from "@mui/icons-material/GridView";
import BadgeIcon from "@mui/icons-material/Badge";
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
const navConfig = [
  {
    title: "dashboard",
    path: "/dashboard/app",
    icon: <GridViewIcon />,
  },
  {
    title: "kullanıcı",
    path: "/dashboard/user",
    icon: <BadgeIcon/>,
  },
  {
    title: "Çalışanlar",
    path: "/dashboard/employee",
    icon: <GroupRoundedIcon />,
  },
  {
    title: "hiyerarşi",
    path: "/dashboard/hierarchy",
    icon: <AccountTreeIcon />,
  },
  {
    title: "İzinler",
    path: "/dashboard/annualleave",
    icon: <FlightTakeoffRoundedIcon />,
  },
];

export default navConfig;
