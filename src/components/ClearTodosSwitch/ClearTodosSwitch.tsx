import { useAppSelector } from "@/hooks/useAppSelector";
import { clearTodos } from "@/store/todos/todos-actions";
import { selectTodosCount } from "@/store/todos/todos-selectors";
import { Button } from "@/ui/Button"
import { useDispatch } from "react-redux";

interface ClearTodosSwitchProps {
  setSearchInputIsShaking: (value: boolean) => void
}
export const ClearTodosSwitch = ({ setSearchInputIsShaking }: ClearTodosSwitchProps) => {
  const dispatch = useDispatch();
  const allTodosCount = useAppSelector(selectTodosCount)

  const handleClearAllTodos = () => {
    if (!allTodosCount) {
      setSearchInputIsShaking(true)

      setTimeout(() => {
        setSearchInputIsShaking(false)
      }, 500)
      return
    }
    dispatch(clearTodos())
  }

  return (
    <Button onClick={handleClearAllTodos} theme="outline">
      <span> CLEAR</span>
    </Button>
  )
}