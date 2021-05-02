import React from 'react'

export default function Error404() {
    let errorStyle = {
        minHeight:"82.7vh",
    }
    return (
        <div className="container" style={errorStyle}>
            <h1 className="text-center pt-4">Error 404: Oops Not found!</h1>
        </div>
    )
}
