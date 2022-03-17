import React, { useState } from "react";
import ReactDOM from "react-dom";
import Recaptcha from "react-recaptcha";
import { useForm } from "react-hook-form";
import { API_RECAPCHA } from './../config';

let recaptchaInstance;

export default function TestPage() {
  const { register, handleSubmit, errors, formState: { isDirty, isValid } } = useForm({ mode: 'onChange' });
  const [recaptcha, setRecaptcha] = useState(null)
  const onSubmit = (data) => {
    console.log(data);
  }; 
  const callback = () => {
    recaptchaInstance.reset();
  }

  const verifyCallback = (token) => {
    setRecaptcha(token)
  }
  return (
    <form>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <label>ExampleRequired</label>
      <input
        name="test"
        id="test"
        type='text'
        {...register("test", {
          required: true
        })}
      />
      {/* {errors.exampleRequired && <p>This field is required</p>} */}

      <Recaptcha
        className="g-recaptcha"
        ref={(e) => (recaptchaInstance = e)}
        sitekey={API_RECAPCHA}
        verifyCallback={verifyCallback}
        // onloadCallback={callback}
        size="recaptcha"
      // size="invisible"
      />
      <button
        type="submit"
        // onClick={handleSubmit(onSubmit)}
        // onClick={executeCaptcha}
        disabled={!isValid || recaptcha === null}>
        Submit
      </button>
    </form>
  );
}