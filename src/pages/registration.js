import "../scss/registration.scss";

function Registration(params) {
  return (
    <div>
      <div className="reg">
        <div className="reg-card">
          <form>
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
                    className="name-input"
                    placeholder="Enter your full name"
                    required
                  ></input>
                </div>
                <div className="input-box2">
                  <labe for="date" className="date">
                    Date of Birth
                  </labe>
                  <br></br>
                  <input type="date" name="date" id="date" required></input>
                </div>
                <div className="input-box3">
                  <label for="email">Email</label>
                  <br></br>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="yourmail@gmail.com"
                    required
                  ></input>
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
                    placeholder="9876543210"
                    required
                  ></input>
                </div>
                <div className="input-box5">
                  <label for="pwd" className="pwd">
                    Password
                  </label>
                  <br></br>
                  <input type="password" name="pwd" id="pwd" required></input>
                </div>
                <div className="input-box6">
                  <label for="cpwd" className="cpwd">
                    Confirm Password
                  </label>
                  <br></br>
                  <input type="password" name="cpwd" id="cpwd" required></input>
                </div>

                <div className="input-box7">
                  <label className="gender">Gender</label>
                  <br></br>
                  <input type="radio" name="gender" id="male" required></input>
                  <label for="male" className="male">
                    Male
                  </label>
                  <input type="radio" name="gender" id="female"></input>
                  <label for="female" className="female">
                    Female
                  </label>
                  <input type="radio" name="gender" id="others"></input>
                  <label for="others" className="others">
                    Prefer not to say
                  </label>
                </div>
                <div className="input-box8">
                  <label for="city" className="city">
                    City
                  </label>
                  <br></br>
                  <select name="city" id="city" required>
                    <option value="">Select your city</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                  </select>
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
