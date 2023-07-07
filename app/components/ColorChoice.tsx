import { MouseEventHandler } from "react";

type ColorChoiceProps = {
  name: string;
  hex: string;
  action: MouseEventHandler;
};

export default function ColorChoice({ name, hex, action }: ColorChoiceProps) {
  return (
    <div
      className='p-10 rounded outline outline-1 outline-white outline-offset-2 cursor-pointer'
      style={{ backgroundColor: hex }}
      onClick={action}
    ></div>
  );
}
