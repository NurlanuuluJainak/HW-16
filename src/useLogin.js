import { useState ,useReducer} from "react";

const actionTypes = {
    CHENGE_EMAIL_VALUE: "CHENGE_EMAIL_VALUE",
    CHENGE_EMAIL_VALUEIION: "CHENGE_EMAIL_VALITION",
    CHENGE_PASSWORD_VALUE: "CHENGE_PASSWORD_VALUE",
    CHENGE_PASSWORD_VALUEIION: "CHENGE_PASSWORD_VALITION",
  };
  const formReduser = (state, action) => {
    console.log(action, "hello world");
  
    if (action.type === actionTypes.CHENGE_EMAIL_VALUE) {
      return {
        ...state,
        email: action.payload,
      };
    }
  
    if (action.type === actionTypes.CHENGE_EMAIL_VALUEIION) {
      return {
        ...state,
        isEmailValid: state.email.includes("@"),
      };
    }
      if (action.type === actionTypes.CHENGE_PASSWORD_VALUE) {
        return {
          ...state,
          password: action.payload,
        };
      }
    
      if (action.type === actionTypes.CHENGE_PASSWORD_VALUEIION) {
        return {
          ...state,
          isPasswordValid: state.password.trim().length > 6,
        };
      }
    };
export const useLogin = () => {

    const [formState, dispatchForm] = useReducer(formReduser, {
        email: "",
        isEmailValid: true,
        password:'',
        isPasswordValid:true
      });
    
    
      const [formValid, setFormValid] = useState(false);
    
      const emailChangeHandler = (e) => {
        dispatchForm({
          type: actionTypes.CHENGE_EMAIL_VALUE,
          payload: e.target.value,
        });
    
        setFormValid(
          e.target.value.includes("@") && formState.password.trim().length > 6
        );
      };
      const passwordChangeHandler = (e) => {
        dispatchForm({
          type: actionTypes.CHENGE_PASSWORD_VALUE,
          payload: e.target.value,
        });
    
        setFormValid(
          e.target.value.trim().length > 6 && formState.email.includes("@")
        );
      };
      const validateEmailHandler = () => {
        dispatchForm({
          type: actionTypes.CHENGE_EMAIL_VALUEIION,
        });
      };
      const validatePasswordHandler = () => {
        dispatchForm({ type: actionTypes.CHENGE_PASSWORD_VALUEIION });
      };



return [validateEmailHandler,validatePasswordHandler,passwordChangeHandler,emailChangeHandler,formState,formValid]

}