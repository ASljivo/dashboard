import { MouseEventHandler, ReactElement } from "react";

export interface ModalProps {
  isModalOpen: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
  component: ReactElement;
}
