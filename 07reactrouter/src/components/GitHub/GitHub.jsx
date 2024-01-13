import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/MohamedIjlal27")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="text-center m-5 bg-gray-600 text-white p-4 text-3xl ">
      GitHub Followers: {data.followers}
      <img src={data.avatar_url} width={300} alt="" />
      Name: {data.name}
    </div>
  );
}

export default GitHub;

export const gitHubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/MohamedIjlal27");

  return response.json();
};
