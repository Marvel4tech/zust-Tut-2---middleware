import { create } from "zustand";

const useStore = create((set) => {
    return {
        tasks: [{title: "TestTask", state: "ONGOING"}],
    }
})

export default useStore;