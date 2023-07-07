import ColorChoice from "./components/ColorChoice";

const colors = [
  { name: "white", hex: "#ffffff" },
  { name: "grey", hex: "#999999" },
  { name: "black", hex: "#000000" },
  { name: "red", hex: "#ff0000" },
  { name: "green", hex: "#00ff00" },
  { name: "blue", hex: "#0000ff" },
];

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen min-w-full p-8'>
      <p className='mb-10'>welcome to the game</p>
      <div className='grid grid-cols-3 gap-6'>
        {colors.map((color) => (
          <ColorChoice key={color.name} name={color.name} hex={color.hex} />
        ))}
      </div>
    </div>
  );
}
