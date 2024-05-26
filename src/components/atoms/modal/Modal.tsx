import { FC } from "react";
import "./style.css";
import { ModalProps } from "../../../models/modal";

export const Modal: FC<ModalProps> = ({
  isModalOpen,
  onClose,
  component,
}: ModalProps) => {
  if (isModalOpen !== true) {
    return null;
  }
  return (
    <section className="modal">
      <article className="modal-content p-lg-4">
        <div className="exit-icon text-end" onClick={onClose}>
          {" "}
          X
        </div>
        <main className="modal-mainContents">{component}</main>
      </article>
    </section>
  );
};
