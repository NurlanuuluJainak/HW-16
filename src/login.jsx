import React from 'react'
import { useLogin } from './useLogin'

export const Login = () => {
    const [validateEmailHandler,validatePasswordHandler,passwordChangeHandler,emailChangeHandler,formState,formValid] = useLogin('')
  return (
    <div style={{marginTop:"100px",marginLeft:"300px"}}>
            <form >
            <label htmlFor="email">E-Mail</label>

            {formState.isEmailValid === false ? (
              <input
                style={{ borderColor: "red", background: "#f1aeae" }}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
                type="email"
                id="email"
              />
            ) : (
              <input
                type="email"
                id="email"
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
              />
            )}
            <label htmlFor="password">Password</label>
            {formState.isPasswordValid === false ? (
              <input
                style={{ borderColor: "red", background: "#f1aeae" }}
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
                type="password"
                id="password"
              />
            ) : (
              <input
                type="password"
                id="password"
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
              />
            )}
          <button disabled={!formValid} type="submit">
            login
          </button>
        </form>
    </div>
  )
}
