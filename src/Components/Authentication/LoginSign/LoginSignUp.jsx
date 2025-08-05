import React, { useState } from "react";
import axios from "axios";
import "./LoginSignUp.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

const LoginSignUp = () => {
  const [activeTab, setActiveTab] = useState("tabButton1");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
    address: "",
    bio: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/profile";

  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = storedUsers.find(
      (u) =>
        u.email === loginData.email.trim() &&
        u.password === loginData.password
    );

    if (foundUser) {
      localStorage.setItem("loggedUser", JSON.stringify(foundUser));
      alert("Login successful!");
      navigate(from, { replace: true });
    } else {
      alert("Invalid email or password.");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const emailExists = storedUsers.some(
      (user) => user.email === registerData.email.trim()
    );

    if (emailExists) {
      alert("Email already exists!");
      return;
    }

    const updatedUsers = [...storedUsers, registerData];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("loggedUser", JSON.stringify(registerData));

    alert("Registered successfully!");
    navigate(from, { replace: true });
  };

  return (
    <div className="loginSignUpSection">
      <div className="loginSignUpContainer">
        <div className="loginSignUpTabs">
          <p
            onClick={() => handleTab("tabButton1")}
            className={activeTab === "tabButton1" ? "active" : ""}
          >
            Login
          </p>
          <p
            onClick={() => handleTab("tabButton2")}
            className={activeTab === "tabButton2" ? "active" : ""}
          >
            Register
          </p>
        </div>

        <div className="loginSignUpTabsContent">
          {activeTab === "tabButton1" && (
            <div className="loginSignUpTabsContentLogin">
              <form onSubmit={handleLogin}>
                <input
                  type="email"
                  placeholder="Email address *"
                  required
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                />
                <input
                  type="password"
                  placeholder="Password *"
                  required
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
                <div className="loginSignUpForgetPass">
                  <label>
                    <input type="checkbox" className="brandRadio" />
                    <p>Remember me</p>
                  </label>
                  <p>
                    <Link to="/resetPassword">Lost password?</Link>
                  </p>
                </div>
                <button type="submit">Log In</button>
              </form>
              <div className="loginSignUpTabsContentLoginText">
                <p>
                  No account yet?{" "}
                  <span onClick={() => handleTab("tabButton2")}>
                    Create Account
                  </span>
                </p>
              </div>
            </div>
          )}

          {activeTab === "tabButton2" && (
            <div className="loginSignUpTabsContentRegister">
              <form onSubmit={handleRegister}>
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      fullName: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Username *"
                  required
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      username: e.target.value,
                    })
                  }
                />
                <input
                  type="email"
                  placeholder="Email address *"
                  required
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      email: e.target.value,
                    })
                  }
                />
                <input
                  type="password"
                  placeholder="Password *"
                  required
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      password: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      phone: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Gender"
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      gender: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Address"
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      address: e.target.value,
                    })
                  }
                />
                <textarea
                  placeholder="Short Bio / About Me"
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      bio: e.target.value,
                    })
                  }
                ></textarea>
                <p>
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our
                  <Link
                    to="/terms"
                    style={{ textDecoration: "none", color: "#c32929" }}
                  >
                    {" "}
                    privacy policy
                  </Link>
                  .
                </p>
                <button type="submit">Register</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
