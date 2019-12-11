
export const TodoList=[
    {
        details: "Homework logic",
        deadline: "Monday",
        important: "yes",
        done: "no"
    },
    {
        details: "Homework react",
        deadline: "Wednesday",
        important: "no;)",
        done: "in the proccess"
    },
    {
        details: "Read Scott Meyrs",
        deadline: "Tuesday",
        important:"very",
        done:"Yes!"
    },
    {
        details: "Sew dresses",
        deadline:"3 weeks",
        important:"extremely!",
        done:"nooooo"
    },
    {
        details: "Have fun",
        deadline:"NOW",
        important:"critical",
        done:":("
    },
    {
        details: "Go Home",
        deadline: "an hour ago",
        important:"crucial",
        done:"not yet"
    }
];
const Line=(props)=>{
    return(
        <p>-Details: {props.line.details}-, -Deadline: {props.line.deadline}-, -Importance: {props.line.important}-, -Done? {props.line.done}- </p>
    )
}


const App=()=>{
  
    return(
      <div  style={{color:"Tomato"}}>
          <h2>My ToDo List</h2>
           { todoList.map((line,i)=> <Line line={todoList[i]} key={i}/> )}</div>
    )
}
