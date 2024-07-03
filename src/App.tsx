import { useState } from "react"
import { Filters } from "./components/Filters/Filters"
import { Footer } from "./components/Footer"
import { Title } from "./components/Title"
import { TodoList } from "./components/TodoList"
import { TodosModal } from "./components/TodosModal"
import { Statistics } from "./components/Statistics/Statistics"
import { useAppSelector } from "./hooks/useAppSelector"
import { selectTodosCount } from "./store/todos/todos-selectors"
import { Toaster } from "react-hot-toast"


const App = () => {

  const [isOpenTodosModal, setIsOpenTodosModal] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const todosCount = useAppSelector(selectTodosCount)
  const handleOpenTodosModal = () => {
    setIsOpenTodosModal(true)
  }
  const handleCloseTodosModal = () => {
    setIsOpenTodosModal(false)
    setSelectedTodo(null)
  }

  return (
    <div className="app">
      {todosCount !== 0 && <Statistics key={todosCount} />}
      <main className="container">
        <Title>
          TODO LIST
        </Title>
        <Filters />
        <TodoList handleOpenModal={handleOpenTodosModal} setSelectedTodo={setSelectedTodo} />
        <Footer handleOpenTodosModal={handleOpenTodosModal} />
      </main>
      <TodosModal isOpen={isOpenTodosModal}
        handleCloseModal={handleCloseTodosModal}
        selectedTodo={selectedTodo}
        key={selectedTodo?.id || 0}
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