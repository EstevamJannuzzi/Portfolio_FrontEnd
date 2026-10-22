import React from 'react'

const Title = ({ text, size, color='text-light-blue' }) => {
    return (
        <div>
            <h1 className={`text-4xl font-bold ${color} ${size}`}>
                {text}
            </h1>
        </div>
    )
}

export default Title
