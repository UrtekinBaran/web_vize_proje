import React from "react";
import resim from '../../assets/resim.jpg'

export default function LoginForm() {
  return(
    <div className="grid grid-cols-1 sm:grid-cols-2">
        <div><
            img src={resim} alt="" />
        </div>

        <div>
            <form>
              <h2>SIGN IN</h2>
              <div>
                <label>User Name</label>
                <input type="text" />
              </div>
              <div>
                  <label Password></label>
                  <input type="Password" />
              </div>
              <button>Sign In</button>
            </form>
        </div>
    </div>
  )
}
