import React from "react";

import UserItem from "./UserItem";
import "./UsersList.css";

function UsersList(props) {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <h2>No user Found</h2>
            </div>
        );
    }
    return (
        <ul className="users-list">
            {props.items.map(user => {
                return <UserItem key={user.id} id={user.id} imgData={user.imgData} name={user.name} placesCount={user.placesCount} />
            })}
        </ul>
    )


}

export default UsersList;