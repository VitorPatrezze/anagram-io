import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
    return <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>
            {task.text}
            <FaTimes style={{ borderRadius: '3px', backgroundColor: 'red', color: 'white', cursor: 'pointer' }}
                onClick={onDelete} />
        </h3>
        <p>{task.day}</p>

    </div>;
};

export default Task;
