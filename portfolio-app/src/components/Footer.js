import React from 'react';

function Footer() {

    const useStyles = {
            width: "100%",
            minHeight: "50px",
            backgroundColor: "#0d2135",
            color: "#f5f5f5",
            textAlign: "center",
    }

    const barStyle = {
        display: "flex",
        justifyContent: "center",
    }

    const linkStyle = {
        color: "#5ff0ce",
        textDecoration: "none",
        display: "inline-block",
    }

    return(
        <footer style={useStyles}>
            <div style={barStyle}>
                <a
                href="https://github.com/TristenAnderson"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}>
                    Built and Designed by Tristen Anderson
                </a>
             </div>
        </footer>
    )

}

export default Footer