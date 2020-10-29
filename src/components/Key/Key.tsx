import React, { FunctionComponent, ReactEventHandler } from "react";
import clsx from "clsx";
import { NoteType } from "../../domain/note";
import { usePressObserver } from "../PressObserver/usePressObserver";
import "./style.css";
interface KeyProps {
  type: NoteType;
  label: string;
  disabled?: boolean;
  onUp: ReactEventHandler<HTMLButtonElement>;
  onDown: ReactEventHandler<HTMLButtonElement>;
}
export const Key: FunctionComponent<KeyProps> = (props) => {
  const BackgroundColor = ["#7eb8da", "#92ddea", "#ffa5d8", "#be9ddf", "#9579d1"];
  const color = BackgroundColor[Math.floor(Math.random() * BackgroundColor.length)];
  const style = {
    backgroundColor: `${color}`,
    boxShadow: `0px 0px 20px 2px ${color}`,
  };
  const { type, label, onDown, onUp, ...rest } = props;
  const pressed = usePressObserver({
    watchKey: label,
    onStartPress: onDown,
    onFinishPress: onUp,
  });
  console.log(pressed);
  return (
    <button
      className={clsx(`key key--${type}`, pressed && "is-pressed")}
      style={type === "natural" && pressed ? style : {}}
      type="button"
      onMouseDown={onDown}
      onMouseUp={onUp}
      {...rest}
    >
      {label}
    </button>
  );
};
