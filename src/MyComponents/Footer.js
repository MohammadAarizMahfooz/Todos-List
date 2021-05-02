import React from 'react'

export default function Footer() {
    let footerStyle = {
        position: "relative",
        width: "100%"
    }
    return (
        <footer className="bg-dark text-light pt-2 pb-1" style={footerStyle}>
            <p className="text-center">
                Copyright &copy; My Todos List. 
            </p>
        </footer>
    )
}
