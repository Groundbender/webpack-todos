import { Button, ButtonTheme } from "@/ui/Button"
import { useDispatch } from "react-redux";



interface ClearTogglerProps {
  clearAllTodos: () => void
}
export const ClearToggler = ({ clearAllTodos }: ClearTogglerProps & {}) => {

  return (
    <Button onClick={clearAllTodos} theme={ButtonTheme.OUTLINE}>
      <span className="btn-text"> CLEAR</span>
    </Button>
  )
}