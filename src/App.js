import './App.css';
import { useState,useEffect } from 'react';

function App() {
const [birthdate, setbirthdate] = useState('');
const [Today, settoday] = useState("");
const [age,setage]=useState({
  milisecond:0,
  second:0,
  minute:0,
  hours:0,
  day:0,
  week:0,
  month:0,
  year:0,
});
const [name,setname] = useState("");

// current date
useEffect(() => {
  const Today = new Date();
  const formattedDate = Today.toISOString().split('T')[0];
  settoday(formattedDate);
},[]);

const Calculatage=()=>{
  const Birthdate=new Date(birthdate);
  const nowdate=new Date(Today);

  const milisecond=nowdate-Birthdate;
  const second=Math.round(milisecond/1000);
  const minute=Math.round(second/60);
  const hours=Math.round(minute/60);
  const day=Math.round(hours/24);
  const week=Math.round(day/7);
  const month=Math.round(week*0.229984);
  const year=Math.round(month/12);

  if(name==="")
  {
    alert("Plzz Enter Your Name...");
  }else
  {
      setage({milisecond,second,minute,hours,day,week,month,year});
  }
}
  return (
    <>
        Name:<input type="text" name="" onChange={(e) => setname(e.target.value)}></input>
        Birth date:<input type="date" name="" value={birthdate} onChange={(e) => setbirthdate(e.target.value)}></input>
        Today date:<input type="date" name="" value={Today} onChange={(e) => settoday(e.target.value)}></input>
        <div className='btn'><input type="button" name="" value="Caluclate your age " class="button" onClick={Calculatage}></input></div>
        <p>milisecond:=<span>{age.milisecond}</span></p>
        <p>second:=<span>{age.second}</span></p>
        <p>minute:=<span>{age.minute}</span></p>
        <p>hours:=<span>{age.hours}</span></p>
        <p>day:=<span>{age.day}</span></p>
        <p>week:=<span>{age.week}</span></p>
        <p>month:=<span>{age.month}</span></p>
        <p>year:=<span>{age.year}</span></p>
    </>
  );
}
export default App;