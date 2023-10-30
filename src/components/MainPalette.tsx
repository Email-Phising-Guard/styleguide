import HexColorGroup from "./HexColorGroup";

export default function MainPalette() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 my-24">
      <h2 className="text-3xl font-semibold border border-y-0 border-r-0 border-l-8 pl-[10px] border-primary">
        Main Palette
      </h2>
      <HexColorGroup />
    </div>
  );
}
