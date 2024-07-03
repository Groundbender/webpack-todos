import { Button, ButtonTheme } from "@/ui/Button"

interface ClearTogglerProps {
  clearAllTodos: () => void
}
export const ClearToggler = ({ clearAllTodos }: ClearTogglerProps) => {

  return (
    <Button onClick={clearAllTodos} theme={ButtonTheme.OUTLINE}>
      <span className="btn-text"> CLEAR</span>
    </Button>
  )
}