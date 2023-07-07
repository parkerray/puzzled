type ColorChoiceProps = {
  name: string;
  hex: string;
};

export default function ColorChoice({ name, hex }: ColorChoiceProps) {
  return (
    <div
      className='p-10 outline outline-1 outline-white outline-offset-2 cursor-pointer'
      style={{ backgroundColor: hex }}
    ></div>
  );
}
