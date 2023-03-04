import './Tasks.css';

const Tasks = () => {
  return (
    <div id="module-current-tasks" className="module">
      <h3 id="module-title-current-tasks" className="module-title">
        Your Day
      </h3>
      <ul id="todo-items">
        <li>Learn Java</li>
        <li className="important-task">Teeth cleaning appointment at 3pm</li>
        <li>Follow up with Thomas Smith about VA appointment</li>
      </ul>
      <div id="completed-tasks">
        <h4 id="completed-tasks">Completed tasks</h4>
        <ul id="completed-todos" className="module-list">
          <li>Learn Java</li>
          <li className="important-task">Teeth cleaning appointment at 3pm</li>
          <li>Follow up with Thomas Smith about VA appointment</li>
        </ul>
      </div>
    </div>
  );
};

export default Tasks;
