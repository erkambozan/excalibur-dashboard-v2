// component
import SvgColor from "../../../components/svg-color";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PersonIcon from "@mui/icons-material/Person";
import GridViewIcon from "@mui/icons-material/GridView";
import BadgeIcon from "@mui/icons-material/Badge";

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

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
];

export default navConfig;
