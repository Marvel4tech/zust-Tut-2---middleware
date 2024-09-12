import { create } from "zustand";

const useStore = create((set) => {
    return {
        tasks: [{title: "TestTask", state: "ONGOING"}],
        draggedTask: null,
        addTasks: (title, state) => 
            set((store) => ({tasks: [...store.tasks, { title, state }]})),
        deleteTasks: (title) =>
            set((store) => ({tasks: store.tasks.filter((task) => task.title !== title)})),
        setDraggedTask:  (title) =>
            set({draggedTask: title}),
        moveTask: (title, state) =>
            set((store) => ({
                tasks: store.tasks.map((task) => (task.title === title ? {title, state} : task)),
            })),
    }
})

export default useStore;