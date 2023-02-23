import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Iframe1.css";

const Iframe1 = () => {
  const navigate = useNavigate();

  const onDontHaveAnClick = useCallback(() => {
    navigate("/untreeco-by-htmltodesign-free-version-20022023-101231-gmt530");
  }, [navigate]);

  return (
    <div className="iframe1">
      <div className="body1">
        <img className="icon2" alt="" src="../20944167-1@2x.png" />
      </div>
      <div className="div892">
        <div className="div893">
          <div className="login1">Login</div>
          <div className="please-enter-your1">
            Please enter your login details to sign in.
          </div>
          <div className="form2">
            <div className="div894">
              <div className="div895">
                <div className="inputremember2" />
                <div className="keep-me-logged1">Keep me logged in</div>
              </div>
              <div className="forgot-password1">Forgot password?</div>
            </div>
            <div className="button66">
              <div className="log-in2">Log in</div>
            </div>
            <div
              className="dont-have-an-container2"
              onClick={onDontHaveAnClick}
            >
              <span className="dont-have-an-container3">
                <span>{`Don’t have an account? `}</span>
                <span className="sign-up4">Sign up</span>
              </span>
            </div>
            <div className="div896">
              <div className="inputemail2">
                <div className="divplaceholder6">
                  <div className="infoexamplecom2">info@example.com</div>
                </div>
              </div>
              <div className="email-address2">Email Address</div>
            </div>
            <div className="div897">
              <div className="inputemail2">
                <div className="divplaceholder6">
                  <div className="password4">Password</div>
                </div>
              </div>
              <div className="password5">Password</div>
              <div className="span90">
                <div className="div898"></div>
              </div>
            </div>
            <div className="div899">
              <div className="ul19">
                <div className="a39">
                  <div className="icon-googlesvg4">
                    <img
                      className="icon-googlesvg5"
                      alt=""
                      src="../icongooglesvg2.svg"
                    />
                  </div>
                </div>
                <div className="a40">
                  <div className="icon-googlesvg4">
                    <img
                      className="icon-googlesvg5"
                      alt=""
                      src="../iconfacebooksvg2.svg"
                    />
                  </div>
                </div>
                <div className="a41">
                  <div className="icon-googlesvg4">
                    <img
                      className="icon-googlesvg5"
                      alt=""
                      src="../iconapplesvg2.svg"
                    />
                  </div>
                </div>
                <div className="a42">
                  <div className="icon-googlesvg4">
                    <img
                      className="icon-googlesvg5"
                      alt=""
                      src="../icontwittersvg2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="h42">
                <div className="h4before2" />
                <div className="span91">
                  <div className="or-continue-with2">or continue with</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iframe1;
