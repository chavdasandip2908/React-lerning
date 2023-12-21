import React, { useState } from 'react'

export default function User3(Props) {
    const [mou, setmou] = useState("");
    return (
        <>
            <div>

                <div>User Name : <input type="text" onChange={(e) => { setmou(e.target.value) }} /></div>
                <button onClick={() => { Props.sendData(mou) }}>Send</button>
            </div>
        </>
    )
}
