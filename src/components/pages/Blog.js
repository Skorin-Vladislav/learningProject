import { useState } from "react";
import { useEffect } from "react";
import "./Blog.css";
import Loading from "../Loading/Loading";
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
        {!data ? (
          <Loading></Loading>
        ) : (
          <>
            <h1 className="country">{text[0].toUpperCase() + text.slice(1)}</h1>
            <h3 className="preambula">{data[0]?.preambula}</h3>

            <img
              className="backgroundImg"
              src={require(`../../imagesSrc/${data?.[0]?.backgroundImage}`)}
              alt="img"
            ></img>

            <p className="postText">
              &nbsp;&nbsp;&nbsp;{data[0]?.text}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Blog;
