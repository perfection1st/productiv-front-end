import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li id="add-task">
          <a href="#">
            <img width="75" src="images/icons/add-task.svg" alt="icon" />
            Add Task <span> ></span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
