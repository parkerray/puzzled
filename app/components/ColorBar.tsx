type ColorBarProps = {
  colors: Array<string>;
};

export default function ColorBar({ colors }: ColorBarProps) {
  let reversedColors = colors.slice().reverse();
  return (
    <div className='mt-10 pl-8 pr-8 pt-4 pb-4 rounded-full bg-white flex flex-row items-center justify-center gap-4'>
      {colors.map((color) =>
        color !== "" ? (
          <div
            key={Math.random()}
            className='p-2 rounded-full outline outline-black'
            style={{ backgroundColor: color }}
          ></div>
        ) : (
          <div
            key={Math.random()}
            className='p-2 rounded-full bg-gray-200'
          ></div>
        )
      )}
    </div>
  );
}
