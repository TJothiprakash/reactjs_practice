import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function TodoList() {
  const [tasks, setTasks] = useState([
    { id: "1", text: "Task 1" },
    { id: "2", text: "Task 2" },
    { id: "3", text: "Task 3" },
  ]);

  // Handles drag-and-drop reordering
  const onDragEnd = (result) => {
    if (!result.destination) return; // If dropped outside the list, do nothing

    const updatedTasks = Array.from(tasks);
    const [movedItem] = updatedTasks.splice(result.source.index, 1);
    updatedTasks.splice(result.destination.index, 0, movedItem);

    setTasks(updatedTasks);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="todo-list">
        {(provided) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              padding: "20px",
              backgroundColor: "#f8f9fa",
              borderRadius: "5px",
            }}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      padding: "10px",
                      margin: "5px 0",
                      backgroundColor: "white",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      cursor: "grab",
                      ...provided.draggableProps.style,
                    }}
                  >
                    {task.text}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder} {/* ✅ Ensures smooth drag-and-drop */}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default TodoList;
