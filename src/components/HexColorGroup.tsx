import HexColor from "./HexColor";

export default function HexColorGroup() {
  return (
    <div className="grid grid-cols-3 gap-y-10">
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
    </div>
  );
}
