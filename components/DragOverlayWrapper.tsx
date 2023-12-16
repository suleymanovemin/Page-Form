import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import React, { useState } from "react";
import { SidebarBtnElementDragOverlay } from "./SidebarBtnelement";
import { ElementsType, FormElements } from "./FormElemets";

function DragOverlayWrapper() {
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);
  useDndMonitor({
    onDragStart(event) {
      setDraggedItem(event.active);
    },
    onDragCancel(event) {
      setDraggedItem(null);
    },
    //   onDragOver(event) {
    //     console.log('onDragOver', event)
    //   },
    onDragEnd(event) {
      setDraggedItem(null);
    },
  });
  if (!draggedItem) return null;
  let node = <div>No drag overlay</div>;
  const isSideBarBtnElement = draggedItem.data?.current?.isDesignerBtnElement;
  if (isSideBarBtnElement) {
    const type = draggedItem.data?.current?.type as ElementsType;
    node = <SidebarBtnElementDragOverlay formElement={FormElements[type]} />;
  }
  return <DragOverlay>{node}</DragOverlay>;
}

export default DragOverlayWrapper;
