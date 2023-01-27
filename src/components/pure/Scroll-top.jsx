import React, {useEffect, useState} from "react";
import '../../styles/Scroll-top.styles.css'
const ScrollTop = () => {

    const [top, setTop] = useState(true)

    useEffect(() => {
      window.addEventListener("scroll", ()=>{
        window.scrollY>100 ? setTop(false) : setTop(true)
        console.log(window.scrollY>100)
      })
    },)
    

  return (
    <button
      className={`btn-scroll-top ${top && 'isActiveTop'}`}
      onClick={() => {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
      }}
    >
      <svg
        height="32"
        viewBox="0 0 24 24"
        width="32"
        className="scroll-top-svg"
      >
        <path
          d="M12,12.4142136 L6.70710678,17.7071068 L5.29289322,16.2928932 L12,9.58578644 L18.7071068,16.2928932 L17.2928932,17.7071068 L12,12.4142136 Z M6.70710678,12.7071068 L5.29289322,11.2928932 L12,4.58578644 L18.7071068,11.2928932 L17.2928932,12.7071068 L12,7.41421356 L6.70710678,12.7071068 Z"
        />
      </svg>
    </button>
  );
};

export default ScrollTop;
