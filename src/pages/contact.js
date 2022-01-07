import { useState, useEffect, useRef } from "react";

import "../scss/contact.scss";

import email_illustration from "../images/beard-gmail.png";

function Contact(params) {
  const [details, SetDetails] = useState({});

  const [namefeed, setNamefeed] = useState("");
  const [textarea, setTextarea] = useState("");
  const handleChange = (e) => {
    const keyname = e.target.name;
    const value = e.target.value;

    // CONTACT NAME AND INPUT FEILD
    if (keyname == "name") {
      let alphabets = /^[a-zA-Z ]*$/;

      if (
        value != "" &&
        value.match(alphabets) &&
        3 <= value.length &&
        value.length <= 25
      ) {
        setNamefeed("WOW! looks good.");
        const feedColor = document.querySelector(".name-feed");
        feedColor.style.color = "green";
      } else {
        setNamefeed("* please check your input feild!! *");
        const feedColor = document.querySelector(".name-feed");
        feedColor.style.color = "red";
      }
    }

    // CONTACT TEXTAREA AND INPUT FEILD
    if (keyname == "textarea") {
      let alphabets = /^[a-zA-Z ]*$/;

      if (value != "" && 10 <= value.length && value.length <= 255) {
        setTextarea("WOW! looks good.");
        const feedColor = document.querySelector(".text-feed");
        feedColor.style.color = "green";
      } else {
        setTextarea("* Minumum few words!! *");
        const feedColor = document.querySelector(".text-feed");
        feedColor.style.color = "red";
      }
    }
    SetDetails((prevDetails) => ({
      ...prevDetails,
      [keyname]: value,
    }));
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    // const name = document.getElementById("name").value;
    // const feedback = document.getElementById("textarea");
    // window.location.href =
    //   "mailto:enteryourmailid@gamil.com?name=" + name + "&textarea=" + textarea;
    e.preventDefault();

    alert(`Thanks ${details.name}. Your feedback has submited`);
    return false;
  };
  // console.log(details);
  const contactFocus = useRef();

  useEffect(() => {
    contactFocus.current.focus();
  }, []);
  // START CONTACT AUTO FOCUS

  // END COTACT AUTO FOCUS
  return (
    <div>
      <div className="contactp">
        <div className="contactp-card">
          <div className="contactp-card1">
            <div className="contactp-card1--form">
              <h4>Contact us a messsage</h4>
              <form onSubmit={handleSubmit} target="_blank" method="GET">
                <label className="name" for="name">
                  Name
                </label>
                <br></br>
                <input
                  ref={contactFocus}
                  type="text"
                  name="name"
                  id="name"
                  className="nameInput"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  required
                ></input>
                <br></br>
                <i className="name-feed">{namefeed}</i>
                <span style={{ visibility: "hidden" }}>.</span>
                <br></br>

                <label className="feedback" for="textarea">
                  Feedback
                </label>
                <br></br>
                <textarea
                  type="text"
                  name="textarea"
                  id="textarea"
                  className="textareaInput"
                  placeholder="Share your feedback"
                  rows="4"
                  required
                  onChange={handleChange}
                ></textarea>
                <br></br>
                <i className="text-feed">{textarea}</i>
                <span style={{ visibility: "hidden" }}>.</span>
                <br></br>
                <button title="Send in Gamil" className="contact-send-btn">
                  Send
                </button>
              </form>
            </div>
            <div className="contactp-card1--img">
              <img src={email_illustration} alt="email--illustration"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
