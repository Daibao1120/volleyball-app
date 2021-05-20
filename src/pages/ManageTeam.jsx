import {
    ButtonGroup,
    Dropdown,
    Form,
    FormControl,
    Tab,
    Tabs,
} from "react-bootstrap";
import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(TeamName, Coach, Contact, ContactPhone) {
    return { TeamName, Coach, Contact, ContactPhone };
}

const rows = [createData("球球海獅", "張騰", "吳宜宸", "0987654321")];

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        "& > *": {
            margin: theme.spacing(1),
        },
        backgroundColor: theme.palette.background.paper,
    },
    table: {
        maxWidth: "unset",
    },
}));

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href=""
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
        &#x25bc;
    </a>
));

const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
        const [value, setValue] = useState("");

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <FormControl
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to filter..."
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value ||
                            child.props.children.toLowerCase().startsWith(value)
                    )}
                </ul>
            </div>
        );
    }
);

const options = ["選擇球隊", "球球海獅"];

export default function CustomizedTables() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div className="my-2">
                <List component="nav" aria-label="球隊名稱">
                    <ListItem
                        button
                        aria-haspopup="true"
                        aria-controls="lock-menu"
                        aria-label="球隊名稱"
                        onClick={handleClickListItem}
                    >
                        <ListItemText
                            primary="球隊名稱"
                            secondary={options[selectedIndex]}
                        />
                    </ListItem>
                </List>
                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {options.map((option, index) => (
                        <MenuItem
                            key={option}
                            disabled={index === 0}
                            selected={index === selectedIndex}
                            onClick={(event) =>
                                handleMenuItemClick(event, index)
                            }
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="my-2"
            >
                <Tab eventKey="新增" title="球隊新增">
                    <Form method="POST" action="http://localhost:3000/team">
                        {/* 後端給個api放在action */}
                        <Form.Group controlId="TeamName">
                            <Form.Label>球隊名稱</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter TeamName"
                                name="name"
                            />
                        </Form.Group>

                        <Form.Group controlId="Coach">
                            <Form.Label>教練</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Coach"
                                name="name"
                            />
                        </Form.Group>

                        <Form.Group controlId="Contact">
                            <Form.Label>聯絡人</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Contact"
                                name="name"
                            />
                        </Form.Group>
                        <Form.Group controlId="ContactPhone">
                            <Form.Label>聯絡電話</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter Phone"
                                name="name"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            送出
                        </Button>
                    </Form>
                </Tab>
                <Tab eventKey="檢視" title="檢視">
                    <TableContainer className={classes.table} component={Paper}>
                        <Table
                            className={classes.table}
                            aria-label="customized table"
                        >
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>球隊名稱</StyledTableCell>
                                    <StyledTableCell align="left">
                                        教練
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        球隊聯絡人
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        聯絡人電話
                                    </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell
                                            component="th"
                                            scope="row"
                                        >
                                            {row.TeamName}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.Coach}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.Contact}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.ContactPhone}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Tab>
            </Tabs>
        </>
    );
}
