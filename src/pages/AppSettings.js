import React from "react";
import Axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const AppSettings = () => {
  const [setting, SetSettings] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:5000/appsettings`)
      .then((setting) => SetSettings(setting.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {setting.map((set) => {
        return (
          <>
            <div className="App-Settings">
              <h3>androidVersion</h3>
              <input
                type="text"
                className="AppSettings-width"
                Value={set.androidVersion}
                pattern="^[a-zA-Z0-9]+$"
              ></input>
            </div>
            <div className="App-Settings">
              <h3>Cloud</h3>
              <input
                type="text"
                className="AppSettings-width"
                Value={set.cloud}
                pattern="^[a-zA-Z0-9]+$"
              ></input>
            </div>
            <div className="App-Settings">
              <h3>Email</h3>
              <input
                type="text"
                className="AppSettings-width"
                Value={set.email}
                pattern="^[a-zA-Z0-9]+$"
              ></input>
            </div>
            <div className="App-Settings">
              <h3>EmailPassword</h3>
              <input
                type="text"
                className="AppSettings-width"
                Value={set.emailPassword}
                pattern="^[a-zA-Z0-9]+$"
              ></input>
            </div>
            <div className="App-Settings">
              <h3>iosVersion</h3>
              <input
                type="text"
                className="AppSettings-width"
                Value={set.iosVersion}
                pattern="^[a-zA-Z0-9]+$"
              ></input>
            </div>
            <div className="App-Settings">
              <h3>MassageReminderMessage</h3>
              <input
                type="text"
                className="AppSettings-width"
                Value={set.massageReminderMessage}
                pattern="^[a-zA-Z0-9]+$"
              ></input>
            </div>
            <div className="App-Settings">
              <h3>minAndroidVersion</h3>
              <input
                type="text"
                className="AppSettings-width"
                Value={set.minAndroidVersion}
                pattern="^[a-zA-Z0-9]+$"
              ></input>
            </div>
            <div className="App-Settings">
              <h3>minIosVersion</h3>
              <input
                type="text"
                className="AppSettings-width"
                Value={set.minIosVersion}
                pattern="^[a-zA-Z0-9]+$"
              ></input>
            </div>
            <div className="App-Settings">
              <h3>MorningReminderMessage</h3>
              <input
                type="text"
                className="AppSettings-width"
                Value={set.morningReminderMessage}
                pattern="^[a-zA-Z0-9]+$"
              ></input>
            </div>
            <div className="App-Settings">
              <h3>PassforAPI</h3>
              <input
                type="text"
                className="AppSettings-width"
                Value={set.passforAPI}
                pattern="^[a-zA-Z0-9]+$"
              ></input>
            </div>
            <div className="App-Settings">
              <h3>Paypal</h3>
              <input
                type="text"
                className="AppSettings-width"
                Value={set.paypal}
                pattern="^[a-zA-Z0-9]+$"
              ></input>
            </div>
            <div className="App-Settings">
              <h3>PaypalCLIENT_ID</h3>
              <input
                type="text"
                className="AppSettings-width"
                Value={set.paypalCLIENT_ID}
                pattern="^[a-zA-Z0-9]+$"
              ></input>
            </div>
            <div className="App-Settings">
              <h3>PaypalCLIENT_SECRET</h3>
              <input
                type="text"
                className="AppSettings-width"
                Value={set.paypalCLIENT_SECRET}
                pattern="^[a-zA-Z0-9]+$"
              ></input>
            </div>
            <div className="App-Settings">
              <h3>PublicID</h3>
              <input
                type="text"
                className="AppSettings-width"
                Value={set.publicID}
                pattern="^[a-zA-Z0-9]+$"
              ></input>
            </div>
            <div className="App-Settings">
              <h3>Robokassa</h3>
              <input
                type="text"
                className="AppSettings-width"
                Value={set.robokassa}
                pattern="^[a-zA-Z0-9]+$"
              ></input>
            </div>
            <div className="App-Settings">
              <h3>Stripe</h3>
              <input
                type="text"
                className="AppSettings-width"
                Value={set.stripe}
                pattern="^[a-zA-Z0-9]+$"
              ></input>
            </div>
            <div className="App-Settings">
              <h3>SUBSCRIPTION_KEY</h3>
              <input
                type="text"
                className="AppSettings-width"
                Value={set.sUBSCRIPTION_KEY}
                pattern="^[a-zA-Z0-9]+$"
              ></input>
            </div>
            <div className="App-Settings">
              <h3>TermCondtion</h3>
            </div>
          </>
        );
      })}
      <button className="app-setting-btn">SUBMIT</button>
    </div>
  );
};
export default AppSettings;
