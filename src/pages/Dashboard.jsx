import { GiChampions, GiCube, GiCubes, GiLaserPrecision } from "react-icons/gi";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import { FaHands } from "react-icons/fa";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import PeopleIcon from "@material-ui/icons/People";
import PersonIcon from "@material-ui/icons/Person";
import React from "react";
import { RiOpenArmFill } from "react-icons/ri";
import RouterSwitch from "../RouterSwitch";
import SportsHandballIcon from "@material-ui/icons/SportsHandball";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

const sidebar_data1 = [
    {
        text: "即時記錄",
        icon: <AssignmentIcon size="1.75em" />,
        href: "/live_record",
    },
    {
        text: "賽季分析",
        icon: <GiChampions size="1.75em" />,
        href: "/anlysis_season",
    },
    {
        text: "場次分析",
        icon: <GiCubes size="1.75em" />,
        href: "/anlysis_match",
    },
    {
        text: "局次分析",
        icon: <GiCube size="1.75em" />,
        href: "/anlysis_round",
    },
];
const sidebar_data2 = [
    {
        text: "攻擊分析",
        icon: <SportsHandballIcon />,
        href: "/anlysis_attack",
    },
    {
        text: "防守分析",
        icon: <GiLaserPrecision size="1.75em" />,
        href: "/anlysis_defend",
    },
    {
        text: "攔網分析",
        icon: <RiOpenArmFill size="1.75em" />,
        href: "/anlysis_block",
    },
    {
        text: "舉球分析",
        icon: <FaHands size="1.75em" />,
        href: "/anlysis_set",
    },
];

const sidebar_data3 = [
    {
        text: "球隊管理",
        icon: <PeopleIcon />,
        href: "/manage_team",
    },
    {
        text: "球員管理",
        icon: <PersonIcon />,
        href: "/manage_player",
    },
];

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

class SidebarListItem extends React.Component {
    render() {
        const d = this.props.data;
        return (
            <a href={d.href} className="side-nav">
                <Tooltip title={d.text} placement="right" arrow>
                    <ListItem button key={d.text}>
                        <ListItemIcon>{d.icon}</ListItemIcon>
                        <ListItemText primary={d.text} />
                    </ListItem>
                </Tooltip>
            </a>
        );
    }
}

export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const sidebar_data = sidebar_data1
        .concat(sidebar_data2)
        .concat(sidebar_data3);

    let title = "頁面開發中";

    sidebar_data.forEach((d) => {
        if (d.href === window.location.pathname) {
            title = d.text;
        }
    });

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        排球數據管理平台
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "rtl" ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {sidebar_data1.map((d) => (
                        <SidebarListItem data={d} />
                    ))}
                </List>
                <Divider />
                <List>
                    {sidebar_data2.map((d) => (
                        <SidebarListItem data={d} />
                    ))}
                </List>
                <Divider />

                <List>
                    {sidebar_data3.map((d) => (
                        <SidebarListItem data={d} />
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <h1>{title}</h1>
                <RouterSwitch />
            </main>
        </div>
    );
}
