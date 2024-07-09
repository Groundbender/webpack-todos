import { useAppSelector } from "@/hooks/useAppSelector";
import { clearTodos } from "@/store/todos/todos-actions";
import { selectTodosCount } from "@/store/todos/todos-selectors";
import { Button } from "@/ui/Button"
import { useDispatch } from "react-redux";

interface ClearTodosSwitchProps {
  setSearchTodosInputIsShaking: (value: boolean) => void
}

const SHAKING_INPUT_DELAY_MS = 500;

export const ClearTodosSwitch = ({ setSearchTodosInputIsShaking }: ClearTodosSwitchProps) => {
  const dispatch = useDispatch();
  const allTodosCount = useAppSelector(selectTodosCount)

  const handleClearAllTodos = () => {
    if (!allTodosCount) {
      setSearchTodosInputIsShaking(true)

      setTimeout(() => {
        setSearchTodosInputIsShaking(false)
      }, SHAKING_INPUT_DELAY_MS)
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