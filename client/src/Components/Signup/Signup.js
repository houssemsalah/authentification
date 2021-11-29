import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {registerUser} from "../../JS/actions/user"
const Signup = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

   
  return (
        <div>
     <div className="page-wrapper bg-white" style={{backgroundImage: 'url(images/bg_4.jpg)', padding:"15px 0px"}}>
  <div className="wrapper wrapper--w790" style={{}}>
    <div className="card card-5" style={{display:"flex" , justifyContent:"center"}}>
      <div className="card-heading">
        <h2 className="title">Crée un nouveau compte</h2>
      </div>
      <div className="card-body" style={{boxShadow:"none"}}>
        <div className="row">
          <div className="col">
            <form onSubmit={(e)=>e.preventDefault()} style={{boxShadow:"none"}}>
              <div className="form-row m-b-55">
                <div className="form-row" style={{marginBottom:"20px"}}>
                  <div className="name">Prenom</div>
                  <div className="value">
                    <div className="input-group">
                      <input className="input--style-5" size={40}  onChange={(e) => setName(e.target.value)} />
                    </div>
                  </div>
                </div>
                <div className="form-row" style={{marginBottom:"20px"}}>
                  <div className="name">Nom</div>
                  <div className="value">
                    <div className="input-group">
                      <input className="input--style-5" type="text" size={40}  onChange={(e) => setLastName(e.target.value)}  />
                    </div>
                  </div>
                </div>
                <div className="form-row " style={{marginBottom:"20px"}}>
                  <div className="name">Age</div>
                  <div className="value">
                    <div className="input-group">
                      <input className="input--style-5" size={10} type="text"  onChange={(e) => setAge(e.target.value)} />
                    </div>
                  </div>
                </div>
               
                <div className="form-row " style={{marginBottom:"20px"}}>
                  <div className="name">Numero</div>
                  <div className="value">
                    <div className="input-group">
                      <input className="input--style-5" type="text"  onChange={(e) => setPhone(e.target.value)}  />
                    </div>
                  </div>
                </div>
                <div className="form-row" style={{marginBottom:"20px"}}>
                  <div className="name">Email</div>
                  <div className="value">
                    <div className="input-group">
                      <input className="input--style-5" size={40} type="email"  onChange={(e) => setEmail(e.target.value)} />
                    </div>
                  </div>
                </div>
                <div className="form-row" style={{marginBottom:"20px"}}>
                  <div className="name">Mot de passe</div>
                  <div className="value">
                    <div className="input-group">
                      <input className="input--style-5" size={40} type="password"  onChange={(e) => setPassword(e.target.value)} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center p-t-12" >
                <button className="btn btn--radius- btn--yellow"  style={{marginTop:"-50px",marginBottom:"-50px",borderRadius:"50px",width:"200px"}} onClick={()=>dispatch(registerUser({name, lastName, email, password,phone,location,age},history))} ><b>S'inscrir</b></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div></div>
  
        </div>
    )
}

export default Signup
