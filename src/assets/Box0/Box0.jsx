import {React} from 'react'
import { useState } from 'react'
import Button from '../Button/Button'
import Txt from '../Txt/Txt'
import "./Box0.css"
import "../Txt/Txt.css"
// import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSchool , faGraduationCap ,faStar ,faThumbsUp ,faGamepad} from '@fortawesome/free-solid-svg-icons'
faSchool
var teksSchool="I am a proud student of software engineering class in Vocational High School One of Jakarta";
var teksHobby="My hobbies are designing poster,presentation and website,i also do cycling once or twice a month";
var teksLearn="I have learning about coding since grade 8,for grade X my goal is to understanding React JS,and for class XII,i want to understand about android development "
var teksFav="Fav F&B=Mie Ayam & Plain tea,Fav Anime=Kaguya-Sama Love Is War,Waifu=MY istri Kaguya-chaan,Fav Song=Car's Outside,Fav Band=Radwimps,Fav Film=Suzume No Tojimari"
var teksGame="I usually plays on steam,im buying some games like ETS2,Big Ambition,Etc.But because i want to save my pc storage,maybe now im open to roblox.";
var arrTeks=[];
arrTeks.push(teksSchool);
arrTeks.push(teksHobby);
arrTeks.push(teksLearn)
arrTeks.push(teksFav);
arrTeks.push(teksGame)
console.table(arrTeks)

const Box0 = () => {
    var [teks,updTeks] = useState('');
    // updTeks(teks=arrTeks[0])
    const addTeks = (i) => {
        updTeks(teks=arrTeks[i]);
        // document.getElementById("addHTML").style.display='none'
    }
    return (
        <div className="row justify-content-between">
            <Button  icon={faSchool} tipe="button" text="School" classlist="d-flex justify-content-center align-items-center ignoreBtn my-2 shadow-lg btn btn-light col-2 p-2 " btnFunc={() =>{addTeks(0)}}/>
            <Button icon={faThumbsUp} tipe="button" text="Hobby" classlist="d-flex justify-content-center align-items-center ignoreBtn my-2 shadow-lg btn btn-light col-2 p-2" btnFunc={() =>{addTeks(1)}} />
            <Button icon={faGraduationCap} tipe="button" text="Learn" classlist="d-flex justify-content-center align-items-center ignoreBtn my-2 shadow-lg btn btn-light col-2 p-2" btnFunc={() =>{addTeks(2)}} />
            <Button icon={faStar} tipe="button" text="Fav " classlist="d-flex justify-content-center align-items-center ignoreBtn my-2 shadow-lg btn btn-light col-2 p-2" btnFunc={() =>{addTeks(3)}} />
            <Button icon={faGamepad} tipe="button" text="Game" classlist="d-flex justify-content-center align-items-center ignoreBtn my-2 shadow-lg btn btn-light col-2 p-2" btnFunc={() =>{addTeks(4)}} />
            <Txt teks={teks} addHTML="ketuk salah satu tombol" classlist='itemBox p-2 rounded-3'/>
            
        </div>
    )
}

export default Box0