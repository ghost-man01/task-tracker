import { useGlobalContext } from "../context";

const DefferdTasks = () => {
  const { task } = useGlobalContext();
  const getTask = task.filter(
    (item) => item.status === "defferd" || !item.status
  );

  return (
    <>
      <h2>hacker</h2>
      {getTask.map((task) => {
        return (
          <div key={task.title}>
            {task.title}
            {task.status}
            {task.desc}
          </div>
        );
      })}
    </>
  );
};

export default DefferdTasks;
