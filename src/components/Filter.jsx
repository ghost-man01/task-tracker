import { useState } from "react";
import { useGlobalContext } from "../context";

const Filter = () => {
  const [data, setData] = useState({
    assignName: "",
    priority: "",
    sortBy: "",
  });

  const { setFilters } = useGlobalContext();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const sendfilters = () => {
    setFilters(data);
  };

  return (
    <form>
      <div>
        <label htmlFor="owner">AssignName: </label>
        <input
          type="text"
          id="owner"
          name="assignName"
          value={data.assignName}
          onChange={handleChange}
          onBlur={sendfilters}
        />

        <label htmlFor="priority">Priority: </label>
        <select
          name="priority"
          id="priority"
          onChange={handleChange}
          onBlur={sendfilters}
        >
          <option value="p0">p0</option>
          <option value="p1">p1</option>
          <option value="p2">p2</option>
        </select>
      </div>

      <div>
        <label htmlFor="sort">SortBy:</label>
        <select
          name="sortBy"
          id="sort"
          onChange={handleChange}
          onBlur={sendfilters}
        >
          <option value="priority">Priority</option>
          <option value="name">Owner</option>
          <option value="date">Date</option>
        </select>
      </div>
    </form>
  );
};

export default Filter;
