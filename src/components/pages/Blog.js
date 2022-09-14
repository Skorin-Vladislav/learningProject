import { useState } from "react";
import { useEffect } from "react";
import React from "react";

function Blog() {
  const [data, setData] = useState(null);
  const text = window.location.pathname.substring(
    window.location.pathname.lastIndexOf("/") + 1
  );

  useEffect(() => {
    fetch(`/blog?countryName=${text}`)
      .then((res) => res.json())
      .then((data) => {
        console.table(data);
        setData(data);
        console.log(data?.[0]?.backgroundImage);
        return data;
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data[0]?.text}</p>
        <img
          // src={require(`../../imagesSrc/${data?.[0]?.backgroundImage}`)}
          alt="img"
        ></img>
        <h1>{text}</h1>
      </header>
    </div>
  );
}

export default Blog;
