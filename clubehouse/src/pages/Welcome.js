import React from 'react';
import style from '../style/Welcome.module.css';
import { Link } from "react-router-dom";

export default function welcome(){
    return( <div className={style.WelcomeContainer}>
        <h1>Welcome!</h1>
        <div className={style.WelcomeInfo}>
            <p>We're working hard to get Clubehouse ready for everyone! While we warp up the finishing touches,we're adding people gradually to amke sure noting breaks</p>
            <p>Anyone can join with an invite from an exiting user-or reserve your username and we'll text you if you have a friend on the app who can let you in.We are so greateful you're here and can't wait to have you join!</p>
            <p>Harsha,Nikunj & the Clubhouse team</p>
        </div>
        <div className={style.actionbtn}>
            <Link 
            exact 
            to='./get_username' 
            className='primarybtn d-flex align-items-center mb-3'
            >
            Get your username
            </Link >
            <Link
            exact 
            to='./get_username'
            >
                have an invite text? Sign in
            </Link>
            
    
        </div>


    </div>
    );

}
