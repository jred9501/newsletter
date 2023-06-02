import React from "react";
import Image from "next/image";
import image from "../public/pic.jpg";

function home() {
  return (
    <div className="container">
    <div className="home-page-header">divbar</div>
    <main>Main</main>
    <div id="sidebar">Sidebar</div>
    <div id="content1">Content1</div>
    <div id="content2">Content2</div>
    <div id="content3">Content3</div>
    <footer>Footer</footer>
  </div>
  
   
  );
}

export default home;
//   <div className="container">
//     <div className="name-box">
//       <Image src={image} className="header-img img img-responsive" alt="..."  />
//     </div>
//     <div className="main">
//       this is the main content
//     </div>
//     <div id="sidebar">

     
//     </div>
 
//     <footer>Footer</footer>
//   </div>