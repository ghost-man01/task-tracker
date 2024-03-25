
const CompletedTasks = ({task}) => {

    return (
        <>
        {
            <div key={task.id}>
                <p>{task.name}</p>
            </div>
        }
        </>

    )
} 

export default CompletedTasks;