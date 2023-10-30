import { ChevronLeft, Settings } from "lucide-react";

export default function GraphicIconsPage() {
  return (
    <main className="max-w-4xl mx-auto mt-10 p-5">
      <h2 className="text-4xl font-bold mb-3">Graphics</h2>
      <h2 className="text-4xl font-bold mb-3">Icons</h2>
      <div className="flex gap-5 items-center">
        <div className="flex flex-col gap-2 items-center p-5">
          <Settings className="w-10 h-10" />
          <span>Settings Icon</span>
        </div>
        <div className="flex flex-col gap-2 items-center p-5">
          <ChevronLeft className="w-10 h-10" />
          <span>Back arrow</span>
        </div>
      </div>
    </main>
  );
}
