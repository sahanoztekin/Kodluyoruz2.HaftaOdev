import style from "./Card.module.css";


export default function Card({ children }) {

  console.log(children)
  return (
    <div className={style.card}>
     <h1> {children && children.length > 0 && children[0].group}</h1>
      {children.map(item => (
        <div className={style.itemlist} key={item.id}>
          <ul>
            <li> {item.name}</li>
            <li> Group : {item.group}</li>
            <hr />
          </ul>
        </div>

      ))}


    </div>

  )

}

