import HexColor from "./HexColor";
import HexColorGroup from "./HexColorGroup";

export default function MainPalette() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 my-24">
      <h2 className="text-3xl font-semibold border border-y-0 border-r-0 border-l-8 pl-[10px] border-primary">
        Main Palette
      </h2>
      <h3 className="text-center text-xl font-bold">Light Mode</h3>
      <HexColorGroup>
        <HexColor
          darkMode={false}
          variant="primary"
          hexCode="#2563eb"
          colorName="Navy Blue"
        />
        <HexColor
          darkMode={false}
          variant="secondary"
          hexCode="#f1f5f9"
          colorName="Dove Grey"
        />
        <HexColor
          darkMode={false}
          variant="foreground"
          hexCode="#020817"
          colorName="Midnight Black"
        />
        <HexColor
          darkMode={false}
          variant="destructive"
          hexCode="#ef4444"
          colorName="Danger Red"
        />
      </HexColorGroup>
      <section className="dark bg-background space-y-10 py-8">
        <h3 className="text-foreground text-center text-xl font-bold">
          Dark Mode
        </h3>
        <HexColorGroup>
          <HexColor
            darkMode={true}
            variant="primary"
            hexCode="#3b82f6"
            colorName="Navy Blue"
          />
          <HexColor
            darkMode={true}
            variant="secondary"
            hexCode="#1e293b"
            colorName="Dove Grey"
          />
          <HexColor
            darkMode={true}
            variant="foreground"
            hexCode="#f8fafc"
            colorName="Midnight Black"
          />
          <HexColor
            darkMode={true}
            variant="destructive"
            hexCode="#7f1d1d"
            colorName="Danger Red"
          />
        </HexColorGroup>
      </section>
    </div>
  );
}
