import { useState } from "react";

import "../scss/registration.scss";

function Registration(params) {
  const [regDetails, setRegDetails] = useState({});

  // NAME INPUT BOX1

  // TICK AND EXCLAMATION ICONS
  const [nametickicon, setnameTickicon] = useState(false);
  const [nameexicon, setnameExicon] = useState(true);
  // END TICK AND EXCLAMATION ICONS

  const [namefeed, setNamefeed] = useState("");
  const [namefocus, setNamefocus] = useState(true);
  //  END NAME INPUT BOX1

  // DATE INPUT BOX2
  const [date, setDate] = useState(" ");
  // (() => {
  // if (date == "") {
  //   // document.getElementById("date").style.color = "gray";
  //   document.querySelector(".date-input").style.color = "red";
  // }
  // })();

  const [datefeed, setDatefeed] = useState("");
  const [datetickicon, setdateTickicon] = useState();
  const [dateexicon, setdateExicon] = useState(" ");
  // END DATE INPUT BOX2

  // EMAIL INPUT BOX3

  const [email, setEmail] = useState(" ");
  const [emailfeed, setEmailfeed] = useState("");

  const [emailtickicon, setemailTickicon] = useState();
  const [emailexicon, setemailExicon] = useState(" ");

  // END EMAL INPUT BOX3
  // TELEPHON INPUT BOX4
  const [tel, setTel] = useState(" ");
  const [telfeed, setTelfeed] = useState("");

  const [teltickicon, setTeltickicon] = useState();
  const [telexicon, setTelexicon] = useState(" ");

  // END TELETHONE INPUT BOX4

  // PASSWORD INPUT BOX5
  const [passwordValue, setpasswordValue] = useState("");
  const [pwd, setPwd] = useState(" ");
  const [pwdfeed, setPwdfeed] = useState("");

  const [pwdtickicon, setPwdtickicon] = useState();
  const [pwdexicon, setPwdexicon] = useState(" ");
  // END PASSWORD INPUT BOX5

  // START CONFIRM PASSWORD INPUT BOX6
  const [cpwd, setCpwd] = useState(" ");
  const [cpwdfeed, setCpwdfeed] = useState("");

  const [cpwdtickicon, setCpwdtickicon] = useState();
  const [cpwdexicon, setCpwdexicon] = useState(" ");
  // END CONFIRM PASSWORD INPUT BOX6

  // START GENDER INPUTBOX7
  const [genderfeed, setGenderfeed] = useState("");
  const [gendertick, setGendertick] = useState(false);
  const [malecolor, setMalecolor] = useState(false);
  const [femalecolor, setFemalecolor] = useState(false);
  const [otherscolor, setOtherscolor] = useState(false);
  //END GENDER INPUTBOX7

  // START CITY INPUT BOX8
  const [city, setCity] = useState(" ");

  const [cityfeed, setCityfeed] = useState("");
  const [cityfeedcolor, setCityfeedcolor] = useState(" ");

  const [citytickicon, setCitytickicon] = useState();
  const [cityexicon, setCityexicon] = useState(" ");

  const [optiondefaultcolor, setOptiondefaultcolor] = useState(false);
  const [chennaicolor, setChennaicolor] = useState(false);
  const [mumbaicolor, setMumbaicolor] = useState(false);
  const [delhicolor, setDelhicolor] = useState(false);

  // END CITY INPUT BOX8
  // console.log(regDetails.name);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value.trim();
    //START USER DETAILS ADD IN setRegDetails OBJECT;
    console.log(name);
    console.log(value);
    setRegDetails((preRegDetail) => ({
      ...preRegDetail,
      [name]: value,
    }));
    // END USER DETAILS ADD IN setRegDetails OBJEC

    // START NAME VALIDATION
    if (name == "name") {
      let alphabets = /^[a-zA-Z ]*$/;
      const feedColor = document.querySelector(".name-feed");

      if (
        value != "" &&
        value.match(alphabets) &&
        3 <= value.length &&
        value.length <= 25
      ) {
        setNamefeed("* looks good! *");
        feedColor.style.color = "green";
        setNamefocus(true);
        setnameTickicon(true);
        setnameExicon(true);
      } else {
        setNamefeed(
          "* please check your input feild!! should be alphabets only *"
        );
        feedColor.style.color = "red";
        setNamefocus(false);
        setnameTickicon(false);
        setnameExicon(false);
      }
    }
    // END NAME VALIDATION

    // START DATE OF BIRTH VALIDATION
    if (name == "date") {
      const userYear = value.substr(0, 4);
      const currentYear = new Date().getFullYear();
      const correctYear = currentYear - 18;

      if (value != "" && userYear <= correctYear) {
        setDatefeed("* looks good *");
        document.querySelector(".dateFeed").style.color = "green";
        setDate(true);
        setdateTickicon(true);
        setdateExicon(true);
      } else {
        setDatefeed(" * age must be 18+ only! *");
        document.querySelector(".dateFeed").style.color = "red";
        setDate(false);
        setdateTickicon(false);
        setdateExicon(false);
      }
    }
    // END DATE OF BIRTH VALIDATION

    //EMAIL VALIDATION
    if (name === "email") {
      const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (value.match(mailformat)) {
        setEmailfeed("* looks good! *");
        document.querySelector(".emailfeed").style.color = "green";
        setEmail(true);
        setemailTickicon(true);
        setemailExicon(true);
      } else {
        setEmailfeed("* should be gmail! * ");
        document.querySelector(".emailfeed").style.color = "red";
        setEmail(false);
        setemailTickicon(false);
        setemailExicon(false);
      }
    }

    // END EMAIL VALIDATION

    // START TELEPHONE VALIDATION
    if (name == "tel") {
      let pattern = /^\d{10}$/;
      if (value.match(pattern)) {
        setTelfeed("*looks good.*");
        document.querySelector(".telfeed").style.color = "green";
        setTel(true);
        setTeltickicon(true);
        setTelexicon(true);
      } else {
        setTelfeed("* should be number!*");
        document.querySelector(".telfeed").style.color = "red";
        setTel(false);
        setTeltickicon(false);
        setTelexicon(false);
      }
    }
    // END TELEPHONE VALIDATION

    // START PASSWORD VALIDATION

    if (name == "password") {
      const decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
      if (value.match(decimal)) {
        setPwdfeed("*looks good.*");
        document.querySelector(".pwdfeed").style.color = "green";
        setpasswordValue(value);
        setPwd(true);
        setPwdtickicon(true);
        setPwdexicon(true);
      } else {
        setPwdfeed("*should be like Da@$834424...");
        document.querySelector(".pwdfeed").style.color = "red";

        setPwd(false);
        setPwdtickicon(false);
        setPwdexicon(false);
      }
    }

    // END PASSSWORD VALIDATION

    // CONFIRM PASSWORD VALIDATION
    if (name == "confirmPassword") {
      if (passwordValue == value) {
        setCpwdfeed("looks good.");
        document.querySelector(".cpwdfeed").style.color = "green";
        setCpwd(true);
        setCpwdtickicon(true);
        setCpwdexicon(true);
      } else {
        setCpwdfeed("* Password did't match!*.");
        document.querySelector(".cpwdfeed").style.color = "red";

        setCpwd(false);
        setCpwdtickicon(false);
        setCpwdexicon(false);
      }
    }

    // END CONFIRM PASSWORD VALIDATION
    //START GENDER VALIDATION
    if (name == "gender") {
      if (value != "") {
        setGenderfeed("*looks good.*");
        document.querySelector(".genderfeed").style.color = "green";
        setGendertick(true);
      }
      if (value == "male") {
        setMalecolor(true);
        setFemalecolor(false);
        setOtherscolor(false);
      } else if (value == "female") {
        setFemalecolor(true);
        setMalecolor(false);
        setOtherscolor(false);
      } else {
        setOtherscolor(true);
        setFemalecolor(false);
        setMalecolor(false);
      }
    }
    //END GENDER VALIDATION
    // START CITY VALIDATION

    if (name == "city") {
      if (value != "") {
        setCity(true);

        setCityfeed("*looks good.*");
        setCityfeedcolor(true);
        setCitytickicon(true);
        setCityexicon(true);
      } else {
        setCity(false);
        setCityfeedcolor(false);
        setCityfeed("* required!! * ");
        setCitytickicon(false);
        setCityexicon(false);
      }

      if (value == "Chennai") {
        setChennaicolor(true);
        setMumbaicolor(false);
        setDelhicolor(false);
      } else if (value == "Mumbai") {
        setMumbaicolor(true);
        setChennaicolor(false);
        setDelhicolor(false);
      } else if (value == "Delhi") {
        setDelhicolor(true);
        setMumbaicolor(false);
        setChennaicolor(false);
      } else {
        setOptiondefaultcolor(true);
        setMumbaicolor(false);
        setChennaicolor(false);
        setDelhicolor(false);
      }
    }
    // END CITY VALIDATION
  };

  // PASSWORD HADNDLE EYEICONS

  const [pshowhide, setPshowHide] = useState(false);
  const phandlEyeicons = () => {
    setPshowHide(!pshowhide);
  };
  // END PASSWORD HANDLW EYEICONS

  // CONFIRM PASSWORD HANDLE EYEICONS
  const [cpshowhide, setCpshowHide] = useState(false);
  const cphandlEyeicons = () => {
    setCpshowHide(!cpshowhide);
  };
  // END CONFIRM PASSWORD HANDLE EYE ICONS

  const handleSubmit = (e) => {
    // e.preventDefault();
    alert(`${regDetails.name} form has submitted.`);
  };

  return (
    <div>
      <div className="reg">
        <div className="reg-card">
          <form onSubmit={handleSubmit}>
            <div className="reg-card--h4">
              <h4>REGISTRATION</h4>
            </div>
            <div className="reg-card--form">
              <div className="reg-card--form--details">
                <div className="input-box1">
                  <label for="name" className="name">
                    Full Name
                  </label>
                  <br></br>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className={namefocus ? "name-true-focus" : "name-input"}
                    placeholder="Enter your full name"
                    required
                    onChange={handleChange}
                  ></input>

                  <span
                    className={
                      nametickicon ? "faIcon-true-tick" : "faIcon-tick"
                    }
                  >
                    {" "}
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <span className={nameexicon ? "faIcon-true-ex" : "faIcon-ex"}>
                    {" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>

                  <i className="name-feed">{namefeed}</i>
                  <span style={{ visibility: "hidden" }}>*</span>
                </div>
                <div className="input-box2">
                  <labe for="date" className="date">
                    Date of Birth
                  </labe>
                  <br></br>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className={date ? "date-input" : "date-inputFalse"}
                    required
                    onChange={handleChange}
                  ></input>
                  <span
                    className={datetickicon ? "date-tick" : "date-tick-false"}
                  >
                    {" "}
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <span className={dateexicon ? "date-ex-false" : "date-ex"}>
                    {" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>
                  <i className="dateFeed">{datefeed}</i>
                  <span style={{ visibility: "hidden" }}>*</span>
                </div>
                <div className="input-box3">
                  <label for="email" className="email">
                    Email
                  </label>
                  <br></br>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={email ? "email-input" : "email-input-false"}
                    placeholder="yourmail@gmail.com"
                    required
                    onChange={handleChange}
                  ></input>

                  <span
                    className={
                      emailtickicon ? "email-tick" : "email-tick-false"
                    }
                  >
                    {" "}
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <span className={emailexicon ? "email-ex-false" : "email-ex"}>
                    {" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>

                  <i className="emailfeed">{emailfeed}</i>
                  <span style={{ visibility: "hidden" }}>*</span>
                </div>
                <div className="input-box4">
                  <label for="tel" className="tel">
                    Phone Number
                  </label>
                  <br></br>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    className={tel ? "tel-input" : "tel-input-false"}
                    placeholder="9876543210"
                    required
                    onChange={handleChange}
                  ></input>

                  <span className={teltickicon ? "tel-tick" : "tel-tick-false"}>
                    {" "}
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <span className={telexicon ? "tel-ex-false" : "tel-ex"}>
                    {" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>

                  <i className="telfeed">{telfeed}</i>
                  <span style={{ visibility: "hidden" }}>*</span>
                </div>
                <div className="input-box5">
                  <label for="pwd" className="pwd">
                    Password
                  </label>
                  <br></br>
                  <input
                    type={pshowhide ? "text" : "password"}
                    name="password"
                    id="pwd"
                    className={pwd ? "pwd-input" : "pwd-input-false"}
                    required
                    onChange={handleChange}
                  ></input>
                  <span className="pshow-hide" onClick={phandlEyeicons}>
                    {pshowhide ? (
                      <i class="fas fa-eye p-fa-eye"></i>
                    ) : (
                      <i class="fas fa-eye-slash p-fa-eye-slash"></i>
                    )}
                  </span>
                  <span className={pwdtickicon ? "pwd-tick" : "pwd-tick-false"}>
                    {" "}
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <span className={pwdexicon ? "pwd-ex-false" : "pwd-ex"}>
                    {" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>

                  <i className="pwdfeed">{pwdfeed}</i>
                  <span style={{ visibility: "hidden" }}>*</span>
                </div>
                <div className="input-box6">
                  <label for="cpwd" className="cpwd">
                    Confirm Password
                  </label>
                  <br></br>
                  <input
                    type={cpshowhide ? "text" : "password"}
                    name="confirmPassword"
                    id="cpwd"
                    className={cpwd ? "cpwd-input" : "cpwd-input-false"}
                    required
                    onChange={handleChange}
                  ></input>
                  <span className="cshow-hide" onClick={cphandlEyeicons}>
                    {cpshowhide ? (
                      <i class="fas fa-eye faeye"></i>
                    ) : (
                      <i class="fas fa-eye-slash faeyeslash"></i>
                    )}
                  </span>
                  <span
                    className={cpwdtickicon ? "cpwd-tick" : "cpwd-tick-false"}
                  >
                    {" "}
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <span className={cpwdexicon ? "cpwd-ex-false" : "cpwd-ex"}>
                    {" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>

                  <i className="cpwdfeed">{cpwdfeed}</i>
                  <span style={{ visibility: "hidden" }}>*</span>
                </div>

                <div className="input-box7">
                  <label className="gender">Gender</label>
                  <div className="gender-inputs">
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      className="male-input"
                      value="male"
                      onChange={handleChange}
                      required
                    ></input>
                    <label
                      for="male"
                      className={malecolor ? "male" : "male-false-color"}
                    >
                      Male
                    </label>{" "}
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      className="female-input"
                      value="female"
                      onChange={handleChange}
                    ></input>
                    <label
                      for="female"
                      className={femalecolor ? "female" : "female-false-color"}
                    >
                      Female
                    </label>{" "}
                    <input
                      type="radio"
                      name="gender"
                      id="others"
                      className="other-input"
                      value="others"
                      onChange={handleChange}
                    ></input>
                    <label
                      for="others"
                      className={otherscolor ? "others" : "others-false-color"}
                    >
                      Others
                    </label>
                    <span
                      className={
                        gendertick
                          ? "gender-tick-visible"
                          : "gender-tick-hidden"
                      }
                    >
                      {" "}
                      <i className="fas fa-check-circle"></i>
                    </span>
                  </div>
                  <span className="genderfeed">
                    <i>{genderfeed}</i>
                  </span>{" "}
                  <span style={{ visibility: "hidden" }}>*</span>
                </div>
                <div className="input-box8">
                  <label for="city" className="city">
                    City
                  </label>
                  <br></br>
                  <select
                    name="city"
                    id="city"
                    className={city ? "city-input" : "city-input-false"}
                    onChange={handleChange}
                    required
                  >
                    <option
                      value=""
                      className={
                        optiondefaultcolor
                          ? "default-text-black"
                          : "default-text-green"
                      }
                    >
                      Select your city
                    </option>
                    <option
                      value="Chennai"
                      className={
                        chennaicolor ? "chennai-black" : "chennai-green"
                      }
                    >
                      Chennai
                    </option>
                    <option
                      value="Mumbai"
                      className={mumbaicolor ? "mumbai-black" : "mumbai-green"}
                    >
                      Mumbai
                    </option>
                    <option
                      value="Delhi"
                      className={delhicolor ? "delhi-black" : "delhi-green"}
                    >
                      Delhi
                    </option>
                  </select>
                  <span
                    className={citytickicon ? "city-tick" : "city-tick-false"}
                  >
                    {" "}
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <span className={cityexicon ? "city-ex-false" : "city-ex"}>
                    {" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>
                  <span className="cityfeed">
                    <i
                      className={
                        cityfeedcolor ? "city-feed-green" : "city-feed-red"
                      }
                    >
                      {cityfeed}
                    </i>
                  </span>
                  <spans style={{ visibility: "hidden" }}>*</spans>
                </div>
              </div>
            </div>

            <div className="reg-card--btn">
              <button>REGISTER</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Registration;
