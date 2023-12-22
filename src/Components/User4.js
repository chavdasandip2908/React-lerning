
import React from 'react'

const User4 = React.forwardRef((Props, ref) => {
    return (
        <>
            <input type='text' ref={ref} />
        </>
    )
})
export default User4;
