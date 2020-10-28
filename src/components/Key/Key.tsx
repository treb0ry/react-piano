import React, { FunctionComponent, ReactEventHandler } from "react";
import clsx from "clsx";
import { NoteType } from "../../domain/note";
interface KeyProps {
  type: NoteType;
  label: string;
  disabled?: boolean;
  onUp: ReactEventHandler<HTMLButtonElement>;
  onDown: ReactEventHandler<HTMLButtonElement>;
}
export const Key: FunctionComponent<KeyProps> = (props) => {
  const { type, label, onDown, onUp, ...rest } = props;
  return (
    <button
      className={clsx(`key key--${type}`)}
      type="button"
      onMouseDown={onDown}
      onMouseUp={onUp}
      {...rest}
    >
      {label}
    </button>
  );
};
