import React from "react";
import { useParams } from "react-router-dom";

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="text-black">
      <h1>User Detail</h1>
      <p>User ID: {id}</p>
      {/* Fetch and display user details based on the ID */}
    </div>
  );
};

export default UserDetail;
