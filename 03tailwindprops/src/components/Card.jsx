import React from "react";

function Card({
  userName = "User Name",
  position = "Position",
  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9gNn0t4gArClmgmR5P3UQahFnyma3kojm9E2ViYixhg&s",
}) {
  //console.log(props);
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src={image}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
              earum!
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{userName}</div>
            <div className="text-slate-700 dark:text-slate-500">{position}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
