import React from "react";
import Navbar from "../Navbar/Navbar";
import "./news.css";

export default function News() {
  return (
    <div>
      <Navbar />

      <div className="iframe-fb-container">
        <iframe
        className="iframe-fb border"
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftienphatexpertkeyworld&tabs=timeline&width=2000&height=420&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
      
          
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
}
