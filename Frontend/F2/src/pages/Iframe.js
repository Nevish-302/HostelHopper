import "./Iframe.css";

const Iframe = () => {
  return (
    <div className="iframe">
      <div className="body">
        <img className="icon" alt="" src="../20944167-1@2x.png" />
      </div>
      <div className="div">
        <div className="div1">
          <div className="login">Login</div>
          <div className="please-enter-your">
            Please enter your login details to sign in.
          </div>
          <div className="form">
            <div className="div2">
              <div className="div3">
                <div className="inputremember" />
                <div className="keep-me-logged">Keep me logged in</div>
              </div>
              <div className="forgot-password">Forgot password?</div>
            </div>
            <div className="button">
              <div className="log-in">Log in</div>
            </div>
            <div className="dont-have-an-container">
              <span className="dont-have-an-container1">
                <span>{`Don’t have an account? `}</span>
                <span className="sign-up">Sign up</span>
              </span>
            </div>
            <div className="div4">
              <div className="inputemail">
                <div className="divplaceholder">
                  <div className="infoexamplecom">info@example.com</div>
                </div>
              </div>
              <div className="email-address">Email Address</div>
            </div>
            <div className="div5">
              <div className="inputemail">
                <div className="divplaceholder">
                  <div className="password">Password</div>
                </div>
              </div>
              <div className="password1">Password</div>
              <div className="span">
                <div className="div6"></div>
              </div>
            </div>
            <div className="div7">
              <div className="ul">
                <div className="a">
                  <div className="icon-googlesvg">
                    <img
                      className="icon-googlesvg1"
                      alt=""
                      src="../icongooglesvg.svg"
                    />
                  </div>
                </div>
                <div className="a1">
                  <div className="icon-googlesvg">
                    <img
                      className="icon-googlesvg1"
                      alt=""
                      src="../iconfacebooksvg.svg"
                    />
                  </div>
                </div>
                <div className="a2">
                  <div className="icon-googlesvg">
                    <img
                      className="icon-googlesvg1"
                      alt=""
                      src="../iconapplesvg.svg"
                    />
                  </div>
                </div>
                <div className="a3">
                  <div className="icon-googlesvg">
                    <img
                      className="icon-googlesvg1"
                      alt=""
                      src="../icontwittersvg.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="h4">
                <div className="h4before" />
                <div className="span1">
                  <div className="or-continue-with">or continue with</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iframe;
