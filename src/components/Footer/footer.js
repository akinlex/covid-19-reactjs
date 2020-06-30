import React from 'react';
import Typography from '@material-ui/core/Typography';

function Footer(){

    const style = { 
        marginTop: '20px',
        fontSize: '12px'
    }
    return(
        <>
            <Typography variant="h6" style={style}>
                COVID-19 Update by Akinlex &copy;
            </Typography>
        </>
    )
}

export default Footer