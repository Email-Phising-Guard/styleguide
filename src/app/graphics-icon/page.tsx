import FontSlider from "@/components/component/font-slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle2, ChevronLeft, Settings } from "lucide-react";

export default function GraphicIconsPage() {
  return (
    <main className="max-w-4xl mx-auto mt-10 p-5">
      <section className="mb-10">
        <h2 className="text-4xl font-bold mb-3">Graphics</h2>
        <div></div>
      </section>
      <section className="my-10">
        <h2 className="text-4xl font-bold mb-3">Icons</h2>
        <div className="flex gap-5 items-end justify-center">
          <div className="flex flex-col gap-2 items-center p-5">
            <Button className="p-1" variant="ghost" size="icon">
              <Settings className="w-10 h-10" />
            </Button>
            <span>Settings Icon</span>
          </div>
          <div className="flex flex-col gap-2 items-center p-5">
            <Button className="p-1" variant="ghost" size="icon">
              <ChevronLeft className="w-10 h-10" />
            </Button>
            <span>Back arrow</span>
          </div>
          <div className="flex flex-col gap-2 items-center p-5">
            <Button className="p-1" variant="ghost" size="icon">
              <AlertCircle className="w-10 h-10" stroke="red" />
            </Button>
            <span>Incorrect icon</span>
          </div>
          <div className="flex flex-col gap-2 items-center p-5">
            <Button className="p-1" variant="ghost" size="icon">
              <CheckCircle2 className="w-10 h-10" stroke="green" />
            </Button>
            <span>Correct icon</span>
          </div>
        </div>
      </section>
      <section className="my-10">
        <h2 className="text-4xl font-bold mb-3">Buttons</h2>
        <p className="text-2xl"></p>
        <div className="flex gap-5 items-center justify-center">
          <div className="flex flex-col gap-2 items-center p-5">
            <Button className="w-[100px]">Next</Button>
          </div>
          <div className="flex flex-col gap-2 items-center p-5">
            <Button variant="secondary" className="w-[100px]">
              Previous
            </Button>
          </div>

          <div className="flex flex-col gap-2 items-center p-5">
            <Button variant="destructive">Delete</Button>
          </div>
        </div>
      </section>
      <section className="my-10">
        <h2 className="text-4xl font-bold mb-3">Quiz Answer Radio Group</h2>
        <p className="text-2xl"></p>
        <RadioGroup defaultValue="q1" className="p-10 justify-center gap-10">
          <div className="flex items-center space-x-2">
            <RadioGroupItem defaultChecked value="1" id="a1" />
            <Label className="text-2xl" htmlFor="a1">
              Answer 1
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2" id="a2" />
            <Label className="text-2xl" htmlFor="a2">
              Answer 2
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3" id="a3" />
            <Label className="text-2xl" htmlFor="a3">
              Answer 3
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="4" id="a4" />
            <Label className="text-2xl" htmlFor="a4">
              Answer 4
            </Label>
          </div>
        </RadioGroup>
      </section>
      <section className="my-10">
        <h2 className="text-4xl font-bold mb-3">Form</h2>
        <p className="text-2xl"></p>
        <form className="space-y-3 max-w-xl mx-auto">
          <Input name="email" placeholder="Your Email" />
          <Textarea name="message" placeholder="Your Message" />
          <div className="flex">
            <Button className="w-full">Send</Button>
          </div>
        </form>
      </section>
      <section className="my-10">
        <h2 className="text-4xl font-bold mb-3">Settings Input Control</h2>
        <p className="text-2xl"></p>
        <div className="flex items-center space-x-2 justify-center mt-5">
          <Switch id="dark-mode" />
          <Label htmlFor="dark-mode">Dark Mode</Label>
        </div>
        <FontSlider />
      </section>
    </main>
  );
}
