import React from "react";

interface UserProps {
  users: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      city: string;
      zipcode: string;
    };
  }[];
}

const User: React.FC<UserProps> = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
            justifyContent: 'center',
            border: "1px solid #d5d2d2",
            boxShadow: "2px 2px 2px #9d9c9c",
            padding: "2rem",
            margin: "1rem auto",
            width: '50%'
          }}
          key={user.id}
        >
          <div>
            {" "}
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
          </div>
          <div>
            <p>Street: {user.address.street}</p>
            <p>City: {user.address.city}</p>
            <p>Zipcode: {user.address.zipcode}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default User;
