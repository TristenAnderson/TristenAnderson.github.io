import React from 'react';

function Footer() {

    const useStyles = {
            width: "100%",
            minHeight: "50px",
            backgroundColor: "#0d2135",
            color: "#f5f5f5",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            position: 'relative',
    }

    const linkStyle = {
        color: "#5ff0ce",
    }

    return(
        <div style={useStyles}>
            <a
             href="https://github.com/TristenAnderson"
             target="_blank"
             rel="noopener noreferrer"
             style={linkStyle}>
                 Built and Designed by Tristen Anderson
             </a>
        </div>
    )

}

export default Footer