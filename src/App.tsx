import { useState } from "react"
import { Footer } from "./components/Footer"
import { Title } from "./ui/Title"
import { TodoList } from "./components/TodoList"
import { AddEditTodosModal } from "./components/AddEditTodosModal"
import { TodosCountStatistics } from "./components/TodosCountStatistics/TodosCountStatistics"
import { useAppSelector } from "./hooks/useAppSelector"
import { selectTodosCount } from "./store/todos/todos-selectors"
import { Toaster } from "react-hot-toast"
import { TodosFilters } from "./components/TodosFilters"

const App = () => {
  const [isOpenAddEditTodosModal, setIsOpenAddEditTodosModal] = useState(false);
  const [selectedTodoOnEdit, setSelectedTodoOnEdit] = useState<Todo | null>(null);
  const todosCount = useAppSelector(selectTodosCount)
  
  const openAddEditTodosModal = () => {
    setIsOpenAddEditTodosModal(true)
  }
  const closeAddEditTodosModal = () => {
    setIsOpenAddEditTodosModal(false)
    setSelectedTodoOnEdit(null)
  }

  return (
    <div className="app">
      {!!todosCount && <TodosCountStatistics key={todosCount} />}
      <main className="container">
        <Title>
          TODO LIST
        </Title>
        <TodosFilters />
        <TodoList openEditTodosModal={openAddEditTodosModal} setSelectedTodoOnEdit={setSelectedTodoOnEdit} />
        <Footer openAddTodosModal={openAddEditTodosModal} />
      </main>
      <AddEditTodosModal isOpenAddEditTodosModal={isOpenAddEditTodosModal}
        closeAddEditTodosModal={closeAddEditTodosModal}
        selectedTodoOnEdit={selectedTodoOnEdit}
        key={selectedTodoOnEdit?.id || 0}
      />
      <Toaster
        position="top-right"
        gutter={12}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px ",
            backgroundColor: "var(--bg-color)",
            color: "var(--primary-color)",
          }
        }}
      />
    </div >
  )
}
export default App