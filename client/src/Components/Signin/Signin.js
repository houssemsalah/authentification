import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { loginUser } from '../../JS/actions/user';

const Signin = () => {
  const [email, setEmail] = useState("");
 
  const [password, setPassword] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();
    return (
        <div>
    <div className="limiter">
  <div className="container-login100" style={{backgroundImage: 'url(images/bg_4.jpg)'}}>
    <div className="wrap-login100">
      <div className="login100-pic js-tilt" data-tilt>
        <img src="images/img-001.png" alt="IMG" />
      </div>
      <form className="login100-form validate-form" onSubmit={(e)=>e.preventDefault()}>
        <span className="login100-form-title">
          Member Login
        </span>
        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
          <input className="input100" type="text" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <span className="focus-input100" />
          <span className="symbol-input100">
            <i className="fa fa-envelope" aria-hidden="true" />
          </span>
        </div>
        <div className="wrap-input100 validate-input" data-validate="Password is required">
          <input className="input100" type="password" name="pass" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <span className="focus-input100" />
          <span className="symbol-input100">
            <i className="fa fa-lock" aria-hidden="true" />
          </span>
        </div>
        
        <div class="container-login100-form-btn">
						<button class="login100-form-btn"  onClick={()=>dispatch(loginUser({ email, password}, history ))}>
							Login
						</button>
					</div>

    
        <div className="text-center p-t-136">
          <a className="txt2" href="/signup">
            Create your Account
            <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true" />
          </a>
        </div>
      </form>
    </div>
  </div>
</div>

        </div>
    )
}

export default Signin
