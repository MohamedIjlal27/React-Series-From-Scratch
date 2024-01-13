import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();

  return (
    <div className="bg-orange-500 text-black text-3xl text-center py-5">
      <h1>User: {userid}</h1>
    </div>
  );
}

export default User;
