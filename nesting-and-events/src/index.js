import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom/client";
import TaskContainer from "./components/TaskContainer";
import Task from "./components/Task";

const taskList = [
  { id: "task1", title: "Buy Milk", isComplete: true },
  { id: "task2", title: "Read a book", isComplete: false },
  { id: "task3", title: "Early morning run", isComplete: false },
  { id: "task4", title: "Drink water", isComplete: false },
  { id: "task5", title: "Visit the puppy shelter", isComplete: true },
  { id: "task6", title: "Watch Bad Sisters", isComplete: false },
];

function App() {
  const [data, setData] = useState(taskList);

  function toggleComplete(id) {
    const newState = data.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    setData(newState);
    console.log(`Task with the id '${id}' was clicked`);
  }

  return (
    <Fragment>
      <h1 key="heading">Task List</h1>
      <TaskContainer>
        {taskList.map((props) => {
          return (
            <Task
              handleClick={toggleComplete}
              key={props.id}
              id={props.id}
              title={props.title}
              isComplete={props.isComplete}
            />
          );
        })}
      </TaskContainer>
    </Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

/* <Task id="task1" title="Buy Milk" isComplete={true}/>
          <Task id="task2" title="Read a book" isComplete={false}/>
          <Task id="task4" title= "Drink water" isComplete={false}/>
          <Task /> */
