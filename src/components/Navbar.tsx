"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const refNav = useRef(null);
  const router = useRouter();
  const [drop, setDrop] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [drop3, setDrop3] = useState(false);
  useEffect(() => {
    document.body.addEventListener("scroll", () => {
      if (refNav.current) {
        (refNav.current as any).classList.remove("bg-black");
        if (refNav) {
          if (document.body.scrollTop > 50) {
            (refNav.current as any).classList.add("nav-shadow");
          } else {
            (refNav.current as any).classList.remove("nav-shadow");
          }
        }
      }
    });
  }, []);

  const scrollToIntro = () => {
    const section = document.getElementById("intro");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setDrop(false);
      setDrop2(false);
      setDrop3(false);
    } else {
      router.push("/");
      setDrop(false);
      setDrop2(false);
      setDrop3(false);
    }
  };
  const scrollToRole = () => {
    const section = document.getElementById("role");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setDrop(false);
      setDrop2(false);
      setDrop3(false);
    } else {
      router.push("/counsellingservice");
      setDrop(false);
      setDrop2(false);
      setDrop3(false);
    }
  };
  const scrollToIndiGroup = () => {
    const section = document.getElementById("indigroup");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setDrop(false);
      setDrop2(false);
      setDrop3(false)
    } else {
      router.push("/counsellingservice");
      setDrop(false);
      setDrop2(false);
      setDrop3(false);
    }
  };
  const scrollToClassGuid = () => {
    const section = document.getElementById("classguid");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setDrop(false);
      setDrop2(false);
      setDrop3(false)
    } else {
      router.push("/counsellingservice");
      setDrop(false);
      setDrop2(false);
      setDrop3(false);
    }
  };
  const scrollToCarrPlan = () => {
    const section = document.getElementById("carrplan");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setDrop(false);
      setDrop2(false);
      setDrop3(false);
    } else {
      router.push("/");
      setDrop(false);
      setDrop2(false);
      setDrop3(false);
    }
  };
  const scrollToFactors = () => {
    const section = document.getElementById("factors");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setDrop(false);
      setDrop2(false);
      setDrop3(false);
    } else {
      router.push("/studentsupport");
      setDrop(false);
      setDrop2(false);
      setDrop3(false);
    }
  };
  const scrollToCrisPlan = () => {
    const section = document.getElementById("crisisplan");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setDrop(false);
      setDrop2(false);
      setDrop3(false);
    } else {
      router.push("/counsellingservice");
      setDrop(false);
      setDrop2(false);
      setDrop3(false);
    }
  };
  const scrollToPromGradRate = () => {
    const section = document.getElementById("promgradrate");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setDrop(false);
      setDrop2(false);
      setDrop3(false);
    } else {
      router.push("/");
      setDrop(false);
      setDrop2(false);
      setDrop3(false);
    }
  };
  const scrollToPeerInterv = () => {
    const section = document.getElementById("progeval");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setDrop(false);
      setDrop2(false);
      setDrop3(false);
    } else {
      router.push("/studentsupport");
      setDrop(false);
      setDrop2(false);
      setDrop3(false);
    }
  };
  const changeClick = () => {
    setDrop(false);
    setDrop2(false);
    setDrop3(false);
  }
  return (
    <div
      ref={refNav}
      className="flex sticky min-h-15 sm:justify-normal justify-between top-0 backdrop-blur-md bg-pink-300 z-10"
    >
      <div className="font-bold md:flex hidden gap-10 self-center justify-center text-xl px-10 py-5 word-spacing tracking-tight text-black w-full top-0 z-10">
      <span
          className="hover-underline-animation cursor-pointer  hover:underline hover:text-blue-900 transition-colors"
          onClick={scrollToIntro}
        >
          Counselor's Corner
        </span>
        <div>
        <button
            onClick={() => {
              setDrop(!drop);
              setDrop2(false);
              setDrop3(false);
            }}
            className={"flex gap-1 text-start hover:underline hover:text-blue-900"}
          >
            Counseling Services<img src="./arrow.png" className={`${drop ? "w-5 h-5 mt-1 transform rotate-180 transition-transform duration-300" : "w-5 h-5 mt-1 transition-transform duration-300"}`}/>
          </button>
          {drop && (
            <div
              aria-label="Static Actions"
              className="flex flex-col bg-pink-500 text-white rounded-lg absolute text-start p-4"
            >
              <button key="scrollToRole" onClick={scrollToRole} className={"mb-1 text-white text-start text-sm hover:underline hover:text-blue-900"}>
                <li>Role of the Counselor</li>
              </button>
              <button key="scrollToIndiGroup mb-5" onClick={scrollToIndiGroup} className={"mb-1 text-start text-white text-sm hover:underline hover:text-blue-900"}><li>Individual/Group Counseling</li>
              </button>
              <button key="scrollToClassGuid mb-5" onClick={scrollToClassGuid} className={"mb-1 text-start text-white text-sm hover:underline hover:text-blue-900"}>
              <li>Classroom Guidance</li>
              </button>
              <button key="scrollToCarrPlan mb-5" onClick={scrollToCarrPlan} className={"mb-1 text-start text-white text-sm hover:underline hover:text-blue-900"}>
              <li>Crisis Counseling Plan</li>
              </button>
            </div>
          )}
        </div>
        <div>
        <button
            onClick={() => {
              setDrop3(!drop3);
              setDrop2(false);
              setDrop(false);
            }}
            className={"flex gap-1 text-start hover:underline hover:text-blue-900"}
          >
           Academic Progress and Transition Support<img src="./arrow.png" className={`${drop3 ? "w-5 h-5 mt-1 transform rotate-180 transition-transform duration-300" : "w-5 h-5 mt-1 transition-transform duration-300"}`}/>
          </button>
          {drop3 && (
            <div
              aria-label="Static Actions"
              className="flex flex-col bg-pink-500 text-white rounded-lg absolute text-start p-4"
            >
              <Link href={"/academicandtransition"} onClick={changeClick} className={"mb-1 text-white text-sm hover:underline hover:text-blue-900"}>
                <li>Promotion and Graduation Rates</li>
              </Link>
              <Link href={"/academicandtransition"} onClick={changeClick} className={"mb-1 text-white text-sm hover:underline hover:text-blue-900"}>
                <li>School Transition Plan </li> 
              </Link>
            </div>
          )}
        </div>
        <div>
        <button  onClick={() => {
              setDrop2(!drop2);
              setDrop(false);
              setDrop3(false);
            }} className={"flex gap-1 flex-start hover:underline hover:text-blue-900"}>Student Support <img src="./arrow.png" className={`${drop2 ? "w-5 h-5 mt-1 transform rotate-180 transition-transform duration-300" : "w-5 h-5 mt-1 transition-transform duration-300"}`}/></button>
          {drop2 && <div
            aria-label="Static Actions"
            className="flex flex-col bg-pink-500 text-white rounded-lg absolute text-start p-4"
          >
            <button key="scrollToFactors mb-5" onClick={scrollToFactors} className={"hover:underline hover:text-blue-900 mb-1 text-start text-white text-sm"}>
            <li>Factors Affecting Personal, Social, and Academic Functioning</li>
            </button>
            <button key="scrollToPeerInterv" onClick={scrollToPeerInterv} className={"hover:underline hover:text-blue-900 mb-1 text-start  text-white text-sm"}>
            <li>Peer Intervention Programs</li>
            </button>
          </div>}
        </div>
        <Link href="/assessment"
          className="hover-underline-animation cursor-pointer hover:underline hover:text-blue-900 transition-colors"
        >
          Assessment
        </Link>
        
      </div>
    </div>
  );
};

export default Navbar;
