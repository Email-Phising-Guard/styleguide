import HexColor from "./HexColor";
import HexColorGroup from "./HexColorGroup";

export default function MainPalette() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 my-24">
      <h2 className="text-3xl font-semibold border border-y-0 border-r-0 border-l-8 pl-[10px] border-primary">
        Main Palette
      </h2>
      <HexColorGroup>
        <HexColor variant="primary" hexCode="#2563eb" colorName="Navy Blue" />
        <HexColor variant="secondary" hexCode="#f1f5f9" colorName="Dove Grey" />
        <HexColor
          variant="foreground"
          hexCode="#020817"
          colorName="Midnight Black"
        />
        <HexColor
          variant="destructive"
          hexCode="#ef4444"
          colorName="Danger Red"
        />
      </HexColorGroup>
    </div>
  );
}
