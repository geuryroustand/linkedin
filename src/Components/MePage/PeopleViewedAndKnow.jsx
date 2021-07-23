import React, { useState } from "react";
import "../../styles/PeopleViewedAndKnow.css";
import { BsChevronCompactDown } from "react-icons/bs";

const arrOfPeople = [
  "Magdalena Sochon",
  "Tomas Berhane",
  "André Sousa",
  "Geury Roustand",
  "Ubeyt Demir",
  "RaissaKisseljova",
  "Aizada Nazarova ",
  "Lea Hagovska",
  "Emilian Kasemi  ",
  "Bimal Kumar Sah",
  "Attila_vigh",
  "Vardan Galstyan ",
  "Sai Krishna Goka",
  "Sarath",
  "Sara salomon ",
  "Ingrid Oncken  ",
  "Rafa Lima ",
  "Murilo Alves ",
  "Pavan Yalamanchi",
  "Muslim Uddin Arju ",
  "Marcelo Mantilla",
  "Luna Sarmiento",
  "Jonatan",
  "Ismail Turgul",
  "Max Lawrie ",
  "John Ako Tabe",
];
// const arrOfPeopleFirst4 = arrOfPeople.slice(0, 4)

// console.log(arrOfPeopleFirst4);
const PeopleViewedAndKnow = (props) => {
  // const [peopleViewed, setPeopleViewed] = useState(false);
  const [peopleKnow, setPeopleKnow] = useState(false);

  const [arr, setArr] = useState(arrOfPeople);

  const handlerPeopleViewesClick = (e) => {
    if (props.id === "peopleviewed") {
      // setPeopleViewed(true);
      // console.log("peopleviewed");
    }
    if (props.id === "peopleknow") {
      setPeopleKnow(!peopleKnow);
      console.log("peopleKnow");
    }
  };

  // console.log(peopleViewed, "people");
  // console.log(peopleKnow, "know");

  // const handlerPeopleKnowClick = (e) => {
  //   if (props.id === " peopleknow") {
  //     setPeopleKnow(false);
  //   }
  // };

  // console.log(clickElement);
  return (
    //
    <div className="border  mt-4 people-viewed-know ">
      <div className=" mb-3 p-3">
        <h5>{props.people}</h5>

        {props.id === "peopleviewed"
          ? arr.slice(0, 4).map((person, i) => {
              return (
                <div key={i} className="d-flex">
                  <img
                    className="profile-viewed-know mr-2"
                    src="https://1075koolfm.com/wp-content/uploads/2020/02/miniomn.jpg"
                    alt=""
                  />

                  <div className="mr-4">
                    <a href="/" className="text-muted ">
                      <span className="profile-viewer-know-text">{person}</span>
                      <span className="text-muted">.</span>
                      <span>1st</span>
                      <p>Strive School Student </p>
                    </a>
                    <button className="messege-button mt-2 mb-4">
                      Messege
                    </button>
                  </div>
                </div>
              );
            })
          : arr.slice(4, 8).map((person, i) => {
              return (
                <div key={i} className="d-flex">
                  <img
                    className="profile-viewed-know mr-2"
                    src="https://1075koolfm.com/wp-content/uploads/2020/02/miniomn.jpg"
                    alt=""
                  />

                  <div className="mr-4">
                    <a href="/" className="text-muted ">
                      <span className="profile-viewer-know-text">{person}</span>
                      <span className="text-muted">.</span>
                      <span>1st</span>
                      <p>Strive School Student </p>
                    </a>
                    <button className="messege-button mt-2 mb-4">
                      Messege
                    </button>
                  </div>
                </div>
              );
            })}

        {/* 
        <div className="d-flex justify-content-between">
          <img
            className="profile-viewed-know"
            src="https://1075koolfm.com/wp-content/uploads/2020/02/miniomn.jpg"
            alt=""
          />

          <div className="mr-4">
            <a href="#" className="text-muted ">
              <span className="profile-viewer-know-text">Mr. Minion</span>
              <span className="text-muted">.</span>
              <span>1st</span>
              <p>Strive School Student </p>
            </a>
            <button className="messege-button mt-2 mb-4">Messege</button>
          </div>
        </div> */}

        {/* 
        <div className="d-flex justify-content-between">
          <img
            className="profile-viewed-know"
            src="https://1075koolfm.com/wp-content/uploads/2020/02/miniomn.jpg"
            alt=""
          />

          <div className="mr-4">
            <a href="#" className="text-muted ">
              <span className="profile-viewer-know-text">Mr. Minion</span>
              <span className="text-muted">.</span>
              <span>1st</span>
              <p>Strive School Student </p>
            </a>
            <button className="messege-button mt-2">Messege</button>
          </div>
        </div> */}
      </div>

      <div
        onClick={handlerPeopleViewesClick}
        type="button"
        className="border-top text-center"
      >
        <p className="show-more text-muted ">
          Show more <BsChevronCompactDown className="bsChevronDown " />
        </p>
      </div>
    </div>
  );
};

export default PeopleViewedAndKnow;
