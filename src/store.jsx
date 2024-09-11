import { create } from "zustand";

const useStore = create((set) => {
    return {
        tasks: [{title: "TestTask", state: "ONGOING"}],
        addTasks: (title, state) => 
            set((store) => ({tasks: [...store.tasks, { title, state }]})),
        deleteTasks: (title) =>
            set((store) => ({tasks: store.tasks.filter((task) => task.title !== title)}))
    }
})

export default useStore;