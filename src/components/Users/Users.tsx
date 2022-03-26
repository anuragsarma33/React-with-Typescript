import axios from "axios";
import React, { useState, useEffect } from "react";
import User from "./User";

interface Address {
  street: string;
  city: string;
  zipcode: string;
}

interface AllUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<AllUsers[]>([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
    if (resp?.data) setUsers(resp?.data);
  };
  
  return (
    <>
      <User users={users} />
    </>
  );
};

export default Users;
