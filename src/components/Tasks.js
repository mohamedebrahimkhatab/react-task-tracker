import { useState } from "react"

const Tasks = () => {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctors',
        day: 'Feb 5th at 2:30pm',
        reminder: true
      },
      {
        id: 2,
        text: 'Meetings',
        day: 'Feb 6th at 1:30pm',
        reminder: true
      },
      {
        id: 3,
        text: 'Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false
      }
    ]
  );
  return (
    <>
      {tasks.map(task => (<h3 key={task.id}>{task.text}</h3>))}
    </>
  )
}

export default Tasks