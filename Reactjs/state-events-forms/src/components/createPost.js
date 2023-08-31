import React from 'react'

function CreatePost({ hidden }) {
    if (hidden) {
        return (
            <div>
                <h1 className='text-warning'>CreatePost</h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1 className='text-warning'>hidden!!!!!</h1>
            </div>
        )
    }

}

export default CreatePost