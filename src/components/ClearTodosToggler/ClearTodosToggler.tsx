import { Button, ButtonTheme } from "@/ui/Button"

interface ClearTodosTogglerProps {
  clearAllTodos: () => void
}
export const ClearTodosToggler = ({ clearAllTodos }: ClearTodosTogglerProps) => {

  return (
    <Button onClick={clearAllTodos} theme={ButtonTheme.OUTLINE}>
      <span className="btn-text"> CLEAR</span>
    </Button>
  )
}