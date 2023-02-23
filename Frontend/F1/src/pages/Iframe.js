import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Iframe.css";

const Iframe = () => {
  const navigate = useNavigate();

  const onDontHaveAnClick = useCallback(() => {
    navigate("/untreeco-by-htmltodesign-free-version-20022023-101231-gmt530");
  }, [navigate]);

  return (
    <div className="iframe">
      <div className="body">
        <img className="icon1" alt="" src="../20944167-2@2x.png" />
      </div>
      <div className="div884">
        <div className="div885">
          <div className="login">Login</div>
          <div className="please-enter-your">
            Please enter your login details to sign in.
          </div>
          <div className="form1">
            <div className="div886">
              <div className="div887">
                <div className="inputremember1" />
                <div className="keep-me-logged">Keep me logged in</div>
              </div>
              <div className="forgot-password">Forgot password?</div>
            </div>
            <div className="button65">
              <div className="log-in1">Log in</div>
            </div>
            <div className="dont-have-an-container" onClick={onDontHaveAnClick}>
              <span className="dont-have-an-container1">
                <span>{`Don’t have an account? `}</span>
                <span className="sign-up3">Sign up</span>
              </span>
            </div>
            <div className="div888">
              <div className="inputemail1">
                <div className="divplaceholder4">
                  <div className="infoexamplecom1">info@example.com</div>
                </div>
              </div>
              <div className="email-address1">Email Address</div>
            </div>
            <div className="div889">
              <div className="inputemail1">
                <div className="divplaceholder4">
                  <div className="password2">Password</div>
                </div>
              </div>
              <div className="password3">Password</div>
              <div className="span88">
                <div className="div890"></div>
              </div>
            </div>
            <div className="div891">
              <div className="ul18">
                <div className="a35">
                  <div className="icon-googlesvg2">
                    <img
                      className="icon-googlesvg3"
                      alt=""
                      src="../icongooglesvg1.svg"
                    />
                  </div>
                </div>
                <div className="a36">
                  <div className="icon-googlesvg2">
                    <img
                      className="icon-googlesvg3"
                      alt=""
                      src="../iconfacebooksvg1.svg"
                    />
                  </div>
                </div>
                <div className="a37">
                  <div className="icon-googlesvg2">
                    <img
                      className="icon-googlesvg3"
                      alt=""
                      src="../iconapplesvg1.svg"
                    />
                  </div>
                </div>
                <div className="a38">
                  <div className="icon-googlesvg2">
                    <img
                      className="icon-googlesvg3"
                      alt=""
                      src="../icontwittersvg1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="h41">
                <div className="h4before1" />
                <div className="span89">
                  <div className="or-continue-with1">or continue with</div>
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