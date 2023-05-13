import './App.css';
import { Timer } from './Timer';
import { useCounter } from './hooks/useCounter';
import { Login } from './login';
import { useLogin } from './useLogin';
function App() {
  const [validateEmailHandler,validatePasswordHandler,passwordChangeHandler,emailChangeHandler,formState,formValid] = useLogin('')
  const [count,increment,decrement,remove] = useCounter(0)

return(
  <div>
  <div style={{marginTop:"50px",marginLeft:"500px"}}>
    <p style={{marginLeft:"80px" ,fontSize:"1.3rem"}} >{count}</p>
    <button style={{cursor:"pointer"}}  onClick={increment}>increment</button>
    <button style={{marginLeft:"20px",cursor:'pointer'}} onClick={decrement}>decrement</button>
    <button onClick={remove} style={{marginLeft:'20px'}}>delete</button>
  </div>
  <Timer/>
 <Login/>
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
              <button disabled={!formValid} type="submit">
            login
          </button>
  </div>
)
}

export default App;
