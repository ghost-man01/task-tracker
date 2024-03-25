import { useState } from "react";
import { useGlobalContext } from "../context";
import "../styles/addTask.css";
const AddTask = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({
    title: "",
    desc: "",
    team: "",
    assignees: "",
    priority: "",
  });

  const { setNewData } = useGlobalContext();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requiredFields = ["title", "desc", "team", "assignees", "priority"];
    const missingFields = requiredFields.filter((field) => !data[field]);
    if (missingFields.length > 0) {
      console.log("provide dataa");
      return;
    }

    const { title, desc, team, assignees, priority } = data;
    setNewData({ title, desc, team, assignees, priority });
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>Add Task</button>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <form onSubmit={handleSubmit} className="modal-content">
              <h4>New Task</h4>
              <span>
                <button onClick={() => setShowModal(false)}>Close</button>
              </span>
              <div>
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={data.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="description">Description:</label>
                <textarea
                  name="desc"
                  id="description"
                  cols="20"
                  rows="3"
                  value={data.desc}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div>
                <label htmlFor="teamName">Team:</label>
                <input
                  type="text"
                  id="teamName"
                  name="team"
                  value={data.team}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="assignees">Assiggees:</label>
                <input
                  type="text"
                  id="assignees"
                  name="assignees"
                  value={data.assignees}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="priority">Priority:</label>
                <select
                  name="priority"
                  id="priority"
                  onChange={handleChange}
                  required
                >
                  <option value="1">p0</option>
                  <option value="2">p1</option>
                  <option value="3">p2</option>
                </select>
              </div>
              <div>
                <button>Create Task</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTask;
