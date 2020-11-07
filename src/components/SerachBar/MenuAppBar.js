import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {styles} from "@/components/SerachBar/styles";
import clsx from "clsx";
import {classes} from "istanbul-lib-coverage";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";


class MenuAppBar extends Component {

    constructor() {
        super();
        this.state = {
            anchorEl: null,
            left: false
        }

    }

    handleClose = () => {
        this.setState({anchorEl: null})
    };

    handleSelect = (value) => {
        this.setState({anchorEl: null})
        this.props.onActiveComponentChange(value)
    }

    toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        this.setState({anchor: open});
    };

    list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={this.toggleDrawer(anchor, false)}
            onKeyDown={this.toggleDrawer(anchor, false)}
        >
            <List>
                {['Table', 'Map'].map((text, index) => (
                    <ListItem button onClick={() => this.handleSelect(text.toLowerCase())}>
                        <ListItemText primary={"Covid " + JSON.stringify(text)}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    showMenu = () => {
        return (<div><React.Fragment key={"left"}>
                    <Button onClick={this.toggleDrawer("left", true)}>{"left"}</Button>
                    <Drawer anchor={"left"} open={this.state.anchor} onClose={this.toggleDrawer("left", false)}>
                        {this.list("left")}
                    </Drawer>
                </React.Fragment>
            )}
        </div>)
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Drawer anchor={"left"} open={this.state.anchor} onClose={this.toggleDrawer("left", false)}>
                    {this.list("left")}
                </Drawer>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton}  onClick={this.toggleDrawer("left", true)}
                                    color="inherit"
                                    aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Covid
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }

}

export default withStyles(styles)(MenuAppBar);
