

const DeployedTasks = ({task}) => {

    return (
         
        <>
            {
                <div key={task.id}>
                    {task.name}
                    {task.id}
                </div>
            }
        </>
    )
} 

export default DeployedTasks;