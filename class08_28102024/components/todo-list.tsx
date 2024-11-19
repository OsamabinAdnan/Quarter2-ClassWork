'use client'
// Enables client-side rendering for this component.
// useState, useEffect, ChangeEvent, KeyboardEvent: React hooks for managing state, handling events, and running side effects.
import { useState, useEffect, ChangeEvent, KeyboardEvent } from "react"
// Input, Button, Checkbox: Custom UI components from the Shadcn UI library.
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"


// Interface: Defines the structure of a task object with an id (number), text (string), and completed (boolean) to ensure consistent and accurate handling of task data.

interface Task {
    id:number;
    text:string;
    completed:boolean;
}

export default function TodoList (){

    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Defining States @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    // tasks: A state variable that holds an array of tasks, each with a type Task. Initially, it's an empty array.
    // setTasks: A function used to update the tasks state.
    const [tasks, setTasks] = useState<Task[]>([]);

    // newTask: A state variable that holds the text for a new task being created. Initially, it's an empty string.
    // setNewTask: A function used to update the newTask state.
    const [newTask, setNewTask] = useState("");

    // editingTaskId: A state variable that holds the ID of the task currently being edited. Initially, it's null, meaning no task is being edited.
    // setEditingTaskId: A function used to update the editingTaskId state.
    const [editingTaskId, setEditingTaskId] = useState<number | null > (null);

    // editedTaskText: A state variable that holds the updated text of a task during editing. Initially, it's an empty string.
    // setEditedTaskText: A function used to update the editedTaskText state.
    const [editedTaskText, setEditedTaskText] = useState<string>("")

    // isMounted: A state variable that indicates whether the component has been mounted. Initially, it's false.
    // setIsMounted: A function used to update the isMounted state. | use to save error and send same value to client and server
    const [isMounted, setIsMounted] = useState<boolean>(false)

    // ** @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Effect Hook for Component Mount @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ **

    useEffect(()=>{ //The useEffect hook is used to perform side effects in a React component.
        setIsMounted(true) //This line sets the isMounted state to true, indicating that the component has finished mounting.
        const savedTasks = localStorage.getItem("tasks"); //This line sets the isMounted state to true, indicating that the component has finished mounting. | If there is no saved data, savedTasks will be null.
        //If savedTasks exists (is not null), it parses the JSON string back into a JavaScript object using JSON.parse(savedTasks).
        if (savedTasks) { 
            setTasks (JSON.parse(savedTasks)as Task[]);
            //The parsed data is then cast to a Task[] (an array of Task objects) and used to update the tasks state via setTasks.
        }
    },[]) 
    //The empty dependency array [] ensures that this effect runs only once, when the component mounts.

    // ** @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Effect Hook for Saving Tasks @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@**

    useEffect(()=>{
        // The if (isMounted) check ensures that localStorage is updated only after the component has finished mounting. Without this condition, the hook could attempt to update localStorage during the initial render when the tasks are being loaded from localStorage, causing a redundant or incorrect update.
        if (isMounted) {
            localStorage.setItem("tasks", JSON.stringify(tasks))
            // localStorage.setItem("tasks", JSON.stringify(tasks)) saves the current tasks state as a JSON string in the browser's localStorage under the key "tasks"
        }
    },[tasks,isMounted]) 
    //This useEffect runs whenever the tasks or isMounted state changes, as specified in the dependency array [tasks, isMounted].

    // ** @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Add Task Function @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ **

        //This is a function named addTask. The : void indicates that the function doesn't return any value.
    const addTask = (): void => {
        if (newTask.trim() !== "") {
        // newTask.trim() !== "": This checks if the newTask string is not empty (after removing any leading and trailing spaces). If the user hasn't entered any text (or just entered spaces), it will prevent adding an empty task.
        setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
            // setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]): This creates a new array by spreading the current tasks array and adding a new task object to it.
            /* id: A unique identifier for the task, created using Date.now() (which returns the current timestamp in milliseconds). This ensures each task has a unique ID.
            text: The content of the new task, which is the value of newTask.
            completed: A boolean that tracks whether the task has been completed, initialized to false.*/
            setNewTask(""); // Clear the new task input
            // After adding the task, this line clears the newTask state, effectively resetting the input field for the next task.
            }
        }
    
    // ** @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Toggle Task Completion Function @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ **
    
    //This is a function named toggleTaskCompletion that accepts an id (the task ID) as an argument. The : void indicates that the function does not return any value.
    const toggleTaskCompletion = (id:number):void => {
        //setTasks: This function is used to update the tasks state.
        setTasks (
            //tasks.map(...): The map() method is used to iterate over all tasks in the tasks array and create a new array where one specific task is updated, and others remain unchanged.
            tasks.map((task)=>
                //For each task, it checks if the task.id matches the provided id (the task the user wants to toggle).
                //If the id matches, the task is updated using the spread operator { ...task, completed: !task.completed }
                task.id === id ? {...task, completed: !task.completed}:task
                //This creates a new object with all the properties of the original task, but updates the completed property to its opposite value (i.e., if completed is true, it becomes false, and vice versa).
                //If the id doesn't match, it simply returns the original task without any changes.
            )
        )
    }

    // ** @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Start Editing Task Function @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ **

    const startEditingTask = (id:number,text:string):void => {
        setEditingTaskId(id); // Set the ID of the task to edit
        setEditedTaskText(text); // Set the current text of the task
    }

    // ** @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Update Task Function @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ **

    const updateTask = ():void => {
        //editedTaskText.trim(): Removes any leading and trailing whitespace from the editedTaskText string.
        //!== "": Checks if the trimmed editedTaskText is not an empty string.
        if (editedTaskText.trim() !== ""){
            setTasks (tasks.map((task)=>
            task.id === editingTaskId ? {...task, text:editedTaskText}: task //Otherwise, it returns the task unchanged.
            //If a task's id matches editingTaskId, it creates a new object with all of the task's existing properties ({...task}) but updates the text property to the value of editedTaskText.
            ))
            setEditingTaskId(null); //setEditingTaskId(null): Clears the editingTaskId to signal that no task is currently being edited.
            setEditedTaskText(""); // setEditedTaskText(""): Resets the editedTaskText to an empty string, clearing any input field or editor associated with the task.
        }
    }

    // ** @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Delete Task Function @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ **
    
    const deleteTask = (id:number):void => {
        setTasks (tasks.filter((task)=> task.id !== id)); 
        //setTasks(...) updates the list of tasks.
        //filter is a JavaScript array method that creates a new array including only the elements that satisfy a given condition.
        //In this case, the condition is: (task) => task.id !== id; If the task's id is not equal to the given id, it is included in the new array.
        // Otherwise, the task is excluded (deleted).
    }
    // Avoid rendering on the server to prevent hydration errors
    if (!isMounted){
        return null;
    }

    // JSX return statement rendering the todo list UI
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-tl from-[#73a942] via-[#f7b538] to-[#8d0801] dark:bg-gray-900">
        {/* Center the todo list within the screen */}
        <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          {/* Header with title */}
          <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Todo List
          </h1>
          {/* Input for adding new tasks */}
          <div className="flex items-center mb-4">
            <Input
              type="text"
              placeholder="Add a new task"
              value={newTask}
              onChange={
                (e: ChangeEvent<HTMLInputElement>) => setNewTask(e.target.value) // Update new task input
              }
              className="flex-1 mr-2 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            />
            <Button
              onClick={addTask}
              className="bg-black hover:bg-slate-800 text-white font-medium py-2 px-4 rounded-md"
            >
              Add
            </Button>
          </div>
          {/* List of tasks */}
          <div className="space-y-2">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 rounded-md px-4 py-2"
              >
                <div className="flex items-center">
                  {/* Checkbox to toggle task completion */}
                  <Checkbox
                    checked={task.completed}
                    className="mr-2"
                    onCheckedChange={() => toggleTaskCompletion(task.id)}
                  />
                  {editingTaskId === task.id ? (
                    // Input for editing task text
                    <Input
                      type="text"
                      value={editedTaskText}
                      onChange={
                        (e: ChangeEvent<HTMLInputElement>) =>
                          setEditedTaskText(e.target.value) // Update edited task text
                      }
                      onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                        if (e.key === "Enter") {
                          updateTask(); // Update task on Enter key press
                        }
                      }}
                      className="flex-1 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                    />
                  ) : (
                    // Display task text
                    <span
                      className={`flex-1 text-gray-800 dark:text-gray-200 ${
                        task.completed
                          ? "line-through text-gray-500 dark:text-gray-400"
                          : ""
                      }`}
                    >
                      {task.text}
                    </span>
                  )}
                </div>
                <div className="flex items-center">
                  {editingTaskId === task.id ? (
                    // Button to save edited task
                    <Button
                      onClick={updateTask}
                      className="bg-black hover:bg-slate-800 text-white font-medium py-1 px-2 rounded-md mr-2"
                    >
                      Save
                    </Button>
                  ) : (
                    // Button to start editing task
                    <Button
                      onClick={() => startEditingTask(task.id, task.text)}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-200 font-medium py-1 px-2 rounded-md mr-2"
                    >
                      Edit
                    </Button>
                  )}
                  {/* Button to delete task */}
                  <Button
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-2 rounded-md"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}   



