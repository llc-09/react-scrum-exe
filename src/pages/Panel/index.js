import { DragDropContext } from "react-beautiful-dnd"
function Index() {
    const onDragStart = () => {
      };
      const onDragUpdate = () => {
      }
      const onDragEnd = () => {
      }
    return (
        <div>
            kanban
            <div className="dragable-container">
                <DragDropContext
                    onDragStart={onDragStart}
                    onDragUpdate={onDragUpdate}
                    onDragEnd={onDragEnd}
                >
                    <div>Hello world</div>
                </DragDropContext>
            </div>
        </div>
    )
}
export default Index