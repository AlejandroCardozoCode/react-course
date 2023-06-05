import React from "react";

import UsersList from "../components/UsersList";

function User() {
  const USER = [
    {
      id: 1,
      name: "Alejandro",
      imgData:
        "https://www.coalitionrc.com/wp-content/uploads/2017/01/placeholder.jpg",
      placesCount: 1,
    },
  ];
  return <UsersList items={USER} />;
}

export default User;
