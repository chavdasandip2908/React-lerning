import React from 'react'

export default function UserInfo(Props) {
    console.log(Props);
    return (
        <div>
            <div>{Props.index}</div>
            <div>{Props.user.name}</div>
            <div>{Props.user.email}</div>
            <div>{Props.user.contact}</div>
            {/* <table>
                <tr>
                    <th>Sr No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                </tr>
                <tr>
                    <td>{Props.index}</td>
                    <td>{Props.user.name}</td>
                    <td>{Props.user.email}</td>
                    <td>{Props.user.contact}</td>
                </tr>
               
            </table> */}
        </div>
    )
}
