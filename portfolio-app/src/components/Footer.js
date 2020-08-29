import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {

    const useStyles = {
            width: "100%",
            height: "40px",
            backgroundColor: "#021D26",
            color: "#f5f5f5",
    }

    return(
        <div style={useStyles}>
            Footer
            <GitHubIcon />
        </div>
    )

}

export default Footer