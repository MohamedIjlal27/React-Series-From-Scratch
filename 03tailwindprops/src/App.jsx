import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <Card
        userName="Mohamed Ijlal"
        position="Trainee Software Engineer"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmC7T6RXiKGtkgTG19RYRmWGKEic17tDIKELxI4WEDw&s"
      />
      <Card
        userName="Mohamed Fairos"
        position="Security"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNZNHG62FE6JPL6Gql6V0Ut_5rYxJgWrKU94KmE7SGXkcFjSbrzEQ5rGlW5w&s"
      />
      <Card />
    </>
  );
}

export default App;
