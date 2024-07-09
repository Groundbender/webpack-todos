import { useState } from "react"
import { Footer } from "./components/Footer"
import { Title } from "./ui/Title"
import { TodoList } from "./components/TodoList"
import { AddOrEditTodoModal } from "./components/AddOrEditTodoModal"
import { TodosCountStatistics } from "./components/TodosCountStatistics/TodosCountStatistics"
import { useAppSelector } from "./hooks/useAppSelector"
import { selectTodosCount } from "./store/todos/todos-selectors"
import { Toaster } from "react-hot-toast"
import { TodosFilters } from "./components/TodosFilters"

const App = () => {
  const [isOpenAddOrEditTodoModal, setIsOpenAddOrEditTodoModal] = useState(false);
  const [selectedTodoOnEdit, setSelectedTodoOnEdit] = useState<Todo | null>(null);
  const todosCount = useAppSelector(selectTodosCount)

  const handleOpenAddOrEditTodoModal = () => {
    setIsOpenAddOrEditTodoModal(true)
  }

  const handleCloseAddOrEditTodoModal = () => {
    setIsOpenAddOrEditTodoModal(false)
    setSelectedTodoOnEdit(null)
  }

  return (
    <div className="app">
      {!!todosCount && <TodosCountStatistics />}
      <main className="container">
        <Title>
          TODO LIST
        </Title>
        <TodosFilters />
        <TodoList
          openEditTodoModal={handleOpenAddOrEditTodoModal}
          setSelectedTodoOnEdit={setSelectedTodoOnEdit}
        />
        <Footer openAddTodoModal={handleOpenAddOrEditTodoModal} />
      </main>
      {isOpenAddOrEditTodoModal &&
        <AddOrEditTodoModal
          isOpenAddOrEditTodoModal={isOpenAddOrEditTodoModal}
          closeAddOrEditTodoModal={handleCloseAddOrEditTodoModal}
          selectedTodoOnEdit={selectedTodoOnEdit}
        />}
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