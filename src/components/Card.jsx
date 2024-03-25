import { useGlobalContext } from "../context";
import PendingTasks from "./PendingTasks";
import CompletedTasks from "./CompletedTasks";
import DefferdTasks from "./DefferdTasks";
import DeployedTasks from "./DeployedTasks";

const Card = () => {
  const { filters } = useGlobalContext();
  const { task } = useGlobalContext();
  //filters based upon Card status
  const completedTasks = task.filter((item) => item.status === "completed");
  const pendingTasks = task.filter((item) => item.status === "pending");
  const defferdTasks = task.filter(
    (item) => item.status === "defferd" || !item.status
  );
  const deployedTasks = task.filter((item) => item.status === "deployed");

  // Filters based upon users

  return (
    <>
      {filters.assignName === pendingTasks.owner && (
        <PendingTasks key={pendingTasks.id} task={pendingTasks} />
      )}

      {filters.assignName === completedTasks.owner && (
        <CompletedTasks
          key={completedTasks.id}
          task={completedTasks}
          filters={filters}
        />
      )}
      {(filters.assignName === defferdTasks.owner || !filters.owner) && (
        <DefferdTasks
          key={defferdTasks.id}
          task={defferdTasks}
          filters={filters}
        />
      )}
      {filters.assignName === deployedTasks.owner && (
        <DeployedTasks
          key={deployedTasks.id}
          task={deployedTasks}
          filters={filters}
        />
      )}
    </>
  );
};

export default Card;
