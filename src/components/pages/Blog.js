import { useState } from "react";
import { useEffect } from "react";
import React from "react";

function Blog() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/blog")
      .then((res) => res.json())
      .then((data) => {
        console.table(data);
        setData(data);
        return data;
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : /*data*/ "LOADED"}</p>
      </header>
    </div>
  );
}

export default Blog;
