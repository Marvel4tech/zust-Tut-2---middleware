import { create } from "zustand";

const useStore = create((set) => {
    return {
        tasks: [{title: "TestTask", state: "ONGOING"}],
        addTasks: (title, state) => 
            set((store) => ({tasks: [...store.tasks, { title, state }]})),
        deleteTask: (title) =>
            set((store) => ({tasks: store.tasks.filter((task) => store.task !== title)}))
    }
})

export default useStore;