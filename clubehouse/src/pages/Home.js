import React from 'react';
import DailyinfoCard from '../components/DailyinfoCard';
import Header from '../components/Header';
import RoominfoCard from '../components/RoominfoCard';
import style from "../style/home.module.css";

export default function Home(){
    return(
        <>
        <div>
            <Header/>
            <div className={style.home_container}/>
                <DailyinfoCard/>
                <RoominfoCard/>
            </div>
           
        </>
        
    );
}