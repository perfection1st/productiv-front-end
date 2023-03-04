import './ModuleContainer.css';

import Time from '../modules/Time';

import Tasks from '../modules/Tasks';

const ModuleContainer = () => {
  return (
    <aside id="module-container">
      <Time />
      <Tasks />
    </aside>
  );
};

export default ModuleContainer;
