import HexColor from "./HexColor";

export default function HexColorGroup({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="grid grid-cols-3 gap-y-10">{children}</div>;
}
