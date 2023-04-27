import { useEffect } from "react";

export const Title = ({ userName }) => {
  useEffect(() => { //Mount
    let interval = setInterval(() => {
      console.log("Fetching API...");
    }, 1000);

    return () => { // UnMount
      console.log("UnMount");
      clearInterval(interval);
    };
  }, []);//dep Array []

  return (
    <div>
      <h1>Fetching API...</h1>
    </div>
  );
};
