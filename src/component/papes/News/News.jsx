import React, { useState } from "react";
import "./news.css";

export default function News() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
    const sosElement = document.getElementById("sos_fb_slider");
    sosElement.style.right = isChecked ? "-305px" : "0px";
  };

  return (
    <div>
      <div
        onClick={toggleCheck}
        id="sos_fb_slider"
        className="soslider_class soslider_inner "
        style={{
          width: "300px",
          height: "500px",
          zIndex: "1000",
          background: "none 0px 0px repeat scroll rgb(59, 89, 152)",
          borderRadius: "0px",
          padding: "5px 0px 0px 5px",
          top: "62.5px",
          right: "-305px",
        }}
      >
        <div>
          <img
            src="../assets/9_right.png"
            alt=""
            style={{
              display: "block",
              position: "absolute",
              left: "-24px",
              top: "208px",
              cursor: "pointer",
            }}
          />
        </div>

        <div
          id="sos_fb_slider_inner"
          className="soslider_inner"
          style={{
            width: "295px",
            height: "490px",
            padding: "5px 0px 5px 5px",
            background: "none 0px 0px repeat scroll rgb(255, 255, 255)",
            borderRadius: "0px",
            overflow: "hidden",
          }}
        >
          <div>
            <iframe
              title="This is facebook"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftienphatexpertkeyworld&tabs=timeline&width=290&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="290"
              height="500"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div
            id="sos-fbw"
            style={{
              position: "absolute",
              top: "50%",
              left: "40%",
              display: "none",
            }}
          >
            Loading...
          </div>
        </div>
      </div>
    </div>
  );
}
