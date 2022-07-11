import { Button, Col, Input, Row, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  todoSelector
} from "../../redux/selectors";
import { todoSlice } from "../../redux/todoSlice";
import Todo from "../Todo";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const todoList = useSelector(todoSelector);
  // const searchText = useSelector(searchTextSelector);

  const dispatch = useDispatch();
  const handleAddButtonClick = () => {
    dispatch(
      // dispatch 1 action la addTodo
      // addTodo({
      //   id: uuidv4(),
      //   name: todoName,
      //   priority: priority,
      //   completed: false,
      // })
      todoSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
    setTodoName("");
    setPriority("Medium");
  };
  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };
  const handlePriorityChange = (value) => {
    setPriority(value);
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            priority={todo.priority}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            value={priority}
            onChange={handlePriorityChange}
            defaultValue="Medium"
          >
            <Select.Option value="High" label="High">
              <Tag color="success">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="processing">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="default">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
