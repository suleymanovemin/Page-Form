import { FormElements } from "./FormElemets";
import SidebarBtnelement from "./SidebarBtnelement";

function DesignerSideBar() {
  return (
    <aside className="w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-l-2 border-muted p-4 bg-background overflow-y-auto h-full">
      Elements
      <SidebarBtnelement formElement={FormElements.TextField} />
    </aside>
  );
}

export default DesignerSideBar;
