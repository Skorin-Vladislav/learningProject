import { useState } from "react";
import { useEffect } from "react";
import "./Blog.css";
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
      <div className="containerBlog">
        <h1 className="country">{text}</h1>
        <h3 className="preambula">
          {!data ? "Loading..." : data[0]?.preambula}
        </h3>
        {data ? (
          <img
            className="backgroundImg"
            src={require(`../../imagesSrc/${data?.[0]?.backgroundImage}`)}
            alt="img"
          ></img>
        ) : (
          <div class="templateBackground"></div>
        )}

        <p className="postText">
          &nbsp;&nbsp;&nbsp;{!data ? "Loading..." : data[0]?.text}
        </p>
      </div>
    </div>
  );
}

export default Blog;
