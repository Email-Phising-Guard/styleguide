type VariantValues = "primary" | "secondary" | "foreground" | "destructive";
const variants: Record<VariantValues, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  foreground: "bg-foreground",
  destructive: "bg-destructive",
};

export default function HexColor({
  darkMode = false,
  variant,
  hexCode,
  colorName,
}: {
  darkMode: boolean;
  variant: VariantValues;
  hexCode: string;
  colorName: string;
}) {
  return (
    <div className="mx-auto text-center">
      <div
        className={`w-32 h-32 rounded-full ${darkMode ? "dark" : ""} ${
          variants[variant]
        }`}
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
