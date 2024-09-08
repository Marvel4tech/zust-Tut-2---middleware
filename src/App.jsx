import Column from "./components/Column"


function App() {

  return (
    <div className=" max-w-6xl mx-auto flex flex-wrap justify-center gap-5 box-border">
       <Column state={"PLANNED"} />
       <Column state={"ONGOING"} />
       <Column state={"DONE"} />
    </div>
  )
}

export default App
