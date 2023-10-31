export default function HexColor({
  darkMode,
  variant,
  hexCode,
  colorName,
}: {
  darkMode: boolean;
  variant: string;
  hexCode: string;
  colorName: string;
}) {
  return (
    <div className="mx-auto text-center">
      <div
        className={`w-32 h-32 rounded-full ${
          darkMode ? "dark" : ""
        } bg-${variant}`}
      ></div>
      <p
        className={`font-semibold tracking-wide mt-2 text-foreground ${
          darkMode ? "dark" : ""
        }`}
      >
        {hexCode}
      </p>
      <p className={`text-[10px] text-foreground ${darkMode ? "dark" : ""}`}>
        {colorName}
      </p>
    </div>
  );
}
