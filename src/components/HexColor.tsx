export default function HexColor({
  variant,
  hexCode,
  colorName,
}: {
  variant: string;
  hexCode: string;
  colorName: string;
}) {
  return (
    <div className="mx-auto text-center">
      <div className={`w-32 h-32 rounded-full bg-${variant}`}></div>
      <p className="font-semibold tracking-wide mt-2">{hexCode}</p>
      <p className="text-[10px]">{colorName}</p>
    </div>
  );
}
