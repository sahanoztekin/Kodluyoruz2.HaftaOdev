import Card from "../Card/Card";
import style from "./K139.module.css";
import data from "./data.json"

const K139 = () => {


   
 let assistant = data.filter(member => member.assistant )
 let group1 = data.filter(member => member.group === "OrangeRed")
 let group2 = data.filter(member => member.group === "AliceBlue")
 let group3 = data.filter(member => member.group === "DeepPink")

  return (

    <div className={style.k139}>
      <Card children={assistant}></Card> 
      <Card children={group1}></Card> 
      <Card children={group2}></Card> 
      <Card children={group3}></Card> 
      
    </div>
  )
}

export default K139;  