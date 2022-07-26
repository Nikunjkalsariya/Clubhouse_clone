import style from "../style/phoneConfirm.module.css";
import React, {useState} from "react";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";

export default function PhoneConfirmation() {
    const [value,setValue]=useState();
  return (
    <div className={style.phoneConfirmContainer}>
        <Link exact to="/" className={style.backBtn}>
            <img src="/images/iiiim.png" alt=""/>
        </Link>
        <h1>Enter your phone</h1>
        <PhoneInput international defaultCountry="IN" value={value} onChange={setValue}/>
        <p>By entering your number,you're aggreing to our {" "}</p>
        <span>Terms of Service and Privacy Policy. Thanks!</span>
        <Link exact to ='/code_confirm'
        className="primaryBtn d-flex align-items-center">
            Next<img src="/images/nextArrowIcon.svg" className="ml-1" alt=""/>
        </Link>
        
    </div>
  )
}
