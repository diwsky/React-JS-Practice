import React from 'react'

const newWithClass = (WrappedContent, className) => {
    return (props) => (
        <div className={className}>
            <WrappedContent {...props} />
        </div>
    )
}

export default newWithClass;