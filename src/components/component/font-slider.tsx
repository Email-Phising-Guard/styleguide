"use client";
import { useState } from "react";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";

export default function FontSlider() {
  const [fontSize, setFontSize] = useState(16);
  return (
    <div className="flex items-center space-x-2 justify-center mt-10">
      <Slider
        name="font-size"
        onValueChange={(value) => setFontSize(value[0])}
        defaultValue={[fontSize]}
        max={20}
        min={12}
        step={1}
      />
      <Label htmlFor="font-size" className="text-lg">
        {fontSize}px
      </Label>
    </div>
  );
}
