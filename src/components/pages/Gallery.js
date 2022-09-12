import React from "react";
import ImageGallery from "react-image-gallery";
import "./Gallery.css";
import "../../App.css";

export default function Gallery() {
  const images = [
    {
      thumbnailHeight: "50px",
      originalHeight: "100%",

      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      thumbnailHeight: "50px",
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      thumbnailHeight: "50px",
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      thumbnailHeight: "50px",

      original:
        "https://images.pexels.com/photos/2440024/pexels-photo-2440024.jpeg?auto=compress&cs=tinysrgb&w=1000&h=600&dpr=1",
      thumbnail:
        "https://images.pexels.com/photos/2440024/pexels-photo-2440024.jpeg?auto=compress&cs=tinysrgb&w=250&h=150&dpr=1",
    },
    {
      thumbnailHeight: "50px",
      original:
        "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      thumbnail:
        "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      thumbnailHeight: "50px",
      original:
        "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      thumbnail:
        "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      thumbnailHeight: "50px",
      original: require("../../imagesSrc/somalia.jpg"),
      thumbnail: require("../../imagesSrc/somalia.jpg"),
    },
    {
      thumbnailHeight: "50px",
      original: require("../../imagesSrc/china.jpg"),
      thumbnail: require("../../imagesSrc/china.jpg"),
    },
    {
      thumbnailHeight: "50px",
      original: require("../../imagesSrc/dubai2.jpg"),
      thumbnail: require("../../imagesSrc/dubai2.jpg"),
    },
    {
      thumbnailHeight: "50px",
      original: require("../../imagesSrc/img1.jpg"),
      thumbnail: require("../../imagesSrc/img1.jpg"),
    },
    {
      thumbnailHeight: "50px",
      original: require("../../imagesSrc/img2.jpg"),
      thumbnail: require("../../imagesSrc/img2.jpg"),
    },
    {
      thumbnailHeight: "50px",
      original: require("../../imagesSrc/img3.jpg"),
      thumbnail: require("../../imagesSrc/img3.jpg"),
    },
    {
      thumbnailHeight: "50px",
      original: require("../../imagesSrc/img4.jpg"),
      thumbnail: require("../../imagesSrc/img4.jpg"),
    },
    {
      thumbnailHeight: "50px",
      original: require("../../imagesSrc/img5.jpg"),
      thumbnail: require("../../imagesSrc/img5.jpg"),
    },
    {
      thumbnailHeight: "50px",
      original: require("../../imagesSrc/img6.jpg"),
      thumbnail: require("../../imagesSrc/img6.jpg"),
    },
    {
      thumbnailHeight: "50px",
      original: require("../../imagesSrc/vietnam.jpg"),
      thumbnail: require("../../imagesSrc/vietnam.jpg"),
    },
  ];

  return (
    <>
      <ImageGallery
        items={images}
        showBullets="true"
        autoPlay="true"
        slideInterval="5000"
        loading="eager"
        thumbnailHeight="50px"
      />
    </>
  );
}
