import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

function Header(){

    const style = {
        flexGrow: 1, 
        marginLeft: '20px'
    }

    const appBarStyle = {
        flexGrow: 1, 
        marginLeft: '0px'}
    return(
        <>
        <AppBar position="static" style={appBarStyle}>
            <Typography variant="h6" style={style}>
                COVID-19 Update
            </Typography>
        </AppBar>
        </>
    )
}

export default Header