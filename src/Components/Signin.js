import React, { useState } from 'react';
import "./signin.css"
const Signin = () => {
  const [isSignup, setIsSignup] = useState(true);
 
   const toggleForm = () => {
     setIsSignup((prevState) => !prevState);
   };
return (
 <div className={`container ${isSignup ? "change" : ""}`}>
 <div className="forms-container">
   <div className={`form-control signup-form ${isSignup ? "active" : ""}`}>
     <form action="https://api.web3forms.com/submit" method="POST">
       <h2>Signup</h2>
       <input type="hidden" name="access_key" value="7649475f-6b0a-43ec-9108-374c9095c0c7"></input>
       <input type="text" name='Username'placeholder="Username" required />
       <input type="email" name='Email'placeholder="Email" required />
       <input type="password"  placeholder="Password" required />
       <input type="password" placeholder="Confirm password" required />
       <button>Signup</button>
     </form>
     <span>or signup with</span>
     <div className="media">
       <i className="fab fa-facebook-f"></i>
       <i className="fab fa-google-plus-g"></i>
       <i className="fab fa-linkedin-in"></i>
     </div>
   </div>

   <div className={`form-control signin-form ${!isSignup ? "active" : ""}`}>
     <form  action="https://api.web3forms.com/submit" method="POST">
       <h2>Signin</h2>
       <input type="hidden" name="access_key" value="7649475f-6b0a-43ec-9108-374c9095c0c7"></input>
       <input type="text" name='Username'placeholder="Username" required />
       <input type="password" placeholder="Password" required />
       <button>Signin</button>
     </form>
     <span>or signin with</span>
     <div className="media">
       <i className="fab fa-facebook-f"></i>
       <i className="fab fa-google-plus-g"></i>
       <i className="fab fa-linkedin-in"></i>
     </div>
   </div>
 </div>

 <div className="matter-container">
   <div className={`matter-control signin-matter ${!isSignup ? "active" : ""}`}>
     <div className="matter-control__inner">
       <h2>Welcome back!</h2>
       <p>
         Welcome back! We are so happy to have you here. It's great to see you
         again. We hope you had a safe and enjoyable time away.
       </p>
       <button id="signup-btn" onClick={toggleForm}>
         No account yet? Signup.
       </button>
     </div>
   </div>
   <div className={`matter-control signup-matter ${isSignup ? "active" : ""}`}>
     <div className="matter-control__inner">
       <h2>Come join us!</h2>
       <p>
         We are so excited to have you here. If you haven't already, create
         an account to get access to exclusive offers, rewards, and
         discounts.
       </p>
       <button id="signin-btn" onClick={toggleForm}>
         Already have an account? Signin.
       </button>
     </div>
   </div>
 </div>
</div>
)
}

export default Signin
