

const PendingTasks = ({task}) => {

    return (
        <>
        {
            <div key={task.id}>
            <h2>Pending Tasks</h2>
            

                <p>{task.name}</p>

                </div>
            }
        </>
    )

}

export default PendingTasks;