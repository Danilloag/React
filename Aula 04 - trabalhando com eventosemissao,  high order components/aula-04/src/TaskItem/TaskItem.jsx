function TaskItem({title, completed}) {
    return (
        <>
            <h3>{title}</h3>
            <span><strong>{completed ? "completed" : "Uncompleted"}</strong></span>
        </>
    )
}