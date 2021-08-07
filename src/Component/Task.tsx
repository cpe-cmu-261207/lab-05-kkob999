import { useState } from "react"
type TaskProps = {
  id: number;
  name: string;
  deleteFn: Function;
  doneFn: Function;
  IsDone: boolean;
}

const Task = ({ id, name, deleteFn, doneFn, IsDone }: TaskProps) => {

  const [mouseIn, setMouseIn] = useState<boolean>(false);

  const onMouseEnter = () => {
    setMouseIn(true)
  }

  const onMouseLeave = () => {
    setMouseIn(false)
  }
  return (

    <div className="flex justify-between h-8 items-center py-6 border-b"  onMouseEnter={() => onMouseEnter()} onMouseLeave={() => onMouseLeave()}>
      <span className="text-2xl" style={IsDone ? { textDecoration: "line-through" } : {}}> {name} </span>
      <div className="flex space-x-1 items-center" style={(mouseIn && !IsDone)? {visibility:"visible"}:{visibility:"hidden"}}>
        <button id="done_btn" className="bg-green-400 w-24 text-2xl" onClick={() => doneFn(id)}>Done</button>
        <button className="bg-red-400 w-24 text-2xl" onClick={() => deleteFn(id)}>Delete</button>
      </div>


    </div>
  )
}



export default Task