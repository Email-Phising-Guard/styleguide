import FontSlider from "@/components/component/font-slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle2, ChevronLeft, Settings } from "lucide-react";

export default function IconsPage() {
  return (
    <main className="max-w-5xl mt-10 mx-auto p-5">
      <h1 className="text-4xl font-bold mb-5">Icons</h1>
      <p className="text-xl mb-3">
        The icons we are using are from the Lucide icon library.{"  "}
        <a
          href="https://lucide.dev/"
          className="text-primary hover:border-b border-primary"
        >
          Lucide
        </a>{" "}
        is a free and open-source icon set made by the Lucide Team. These icons
        are known for their simplicity and clarity, making them ideal for
        conveying information or functionality without clutter. Lucide icons are
        typically vector-based, allowing for scalability and customization, and
        they often come in a variety of styles and categories to suit different
        design needs.
      </p>
      <section className="py-10">
        <h2 className="text-3xl font-bold mb-3">Clickable Icons</h2>
        <p className="mb-3 text-xl">
          Clickable icons will be large (102px by 102px) to ensure that they
          will be able to easily clicked. Visible hover states will be added to
          the buttons to show feedback to the user that they can click on them.
          Hover over the buttons to check it out.
        </p>
        <div className="flex gap-5 items-end justify-center">
          <div className="flex flex-col gap-2 items-center p-5">
            <Button variant="ghost" className="w-24 h-24">
              <Settings className="w-20 h-20" />
            </Button>
            <span>Settings Icon</span>
          </div>
          <div className="flex flex-col gap-2 items-center p-5">
            <Button variant="ghost" className="w-24 h-24">
              <ChevronLeft className="w-20 h-20" />
            </Button>
            <span>Back arrow</span>
          </div>
        </div>
      </section>
      <section className="py-10">
        <h3 className="text-3xl font-bold mb-3">Visual Icons</h3>
        <p className="mb-3 text-xl">
          Visual icons will be 32px by 32px to ensure that they will be easily
          identifiable. The icons will have a padding of 5px all around to
          prevent the icons from being too close to other elements on the page.
        </p>
        <div className="flex gap-5 items-end justify-center">
          <div className="flex flex-col gap-2 items-center p-5">
            <AlertCircle className="w-8 h-8" stroke="red" />
            <span>Incorrect icon</span>
          </div>
          <div className="flex flex-col gap-2 items-center p-5">
            <CheckCircle2 className="w-8 h-8" stroke="green" />
            <span>Correct icon</span>
          </div>
        </div>
      </section>
      <section className="py-10">
        <h2 className="text-4xl font-bold mb-5">Buttons</h2>
        <p className="mb-3 text-xl">
          In terms of padding, the padding will be 5px on the top, bottom and
          left, right. The font size will be 24px inside the buttons. The
          buttons will have a maximum width of 576px. The height will be 85px.
          This ensures that our buttons are large enough to be easily clicked
          and legible to our main target audience of 40 - 60 year old adults.
        </p>
        <div className="mt-10">
          <div className="flex flex-col gap-2 items-center p-5">
            <Button className="w-full max-w-xl text-xl py-10">Next</Button>
          </div>
          <div className="flex flex-col gap-2 items-center p-5">
            <Button
              variant="secondary"
              className="w-full max-w-xl text-xl py-10"
            >
              Previous
            </Button>
          </div>

          <div className="flex flex-col gap-2 items-center p-5">
            <Button
              variant="destructive"
              className="w-full max-w-xl text-xl py-10"
            >
              Quit
            </Button>
          </div>
        </div>
      </section>
      <section className="py-20">
        <h2 className="text-4xl font-bold mb-5">Quiz Answer Radio Cards</h2>
        <p className="mb-3 text-xl">
          The answer cards have have a max width of 576px. The font size for the
          answers inside the answer cards is 24px. The answer cards have a
          border to indicate the which area the user can click to select the
          answer. The answer cards have a padding of 5px on the top, bottom,
          left and right. The answer cards have a border radius of 8px. The
          answer cards have a margin of 10px on the top and bottom. This ensures
          that our answer cards are large enough to be easily clicked and
          legible to our main target audience of 40 - 60 year old adults.
        </p>
        <RadioGroup defaultValue="q1" className="p-10 gap-5 mx-auto max-w-xl">
          <div className="flex items-center space-x-8 border w-full max-w-xl pl-5 rounded-lg">
            <RadioGroupItem defaultChecked value="1" id="a1" />
            <Label className="text-2xl w-full py-5" htmlFor="a1">
              Answer 1
            </Label>
          </div>
          <div className="flex items-center space-x-8 border w-full max-w-xl pl-5 rounded-lg">
            <RadioGroupItem value="2" id="a2" />
            <Label className="text-2xl w-full py-5" htmlFor="a2">
              Answer 2
            </Label>
          </div>
          <div className="flex items-center space-x-8 border w-full max-w-xl  pl-5 rounded-lg">
            <RadioGroupItem value="3" id="a3" />
            <Label className="text-2xl w-full py-5" htmlFor="a3">
              Answer 3
            </Label>
          </div>
          <div className="flex items-center space-x-8 border w-full pl-5 max-w-xl rounded-lg">
            <RadioGroupItem value="4" id="a4" />
            <Label className="text-2xl w-full py-5" htmlFor="a4">
              Answer 4
            </Label>
          </div>
        </RadioGroup>
      </section>
      <section className="py-20">
        <h2 className="text-4xl font-bold mb-5">Form</h2>
        <p className="mb-3 text-xl">
          Font size in forms will be 16px to ensure that user can easily read
          their inputs. The inputs will have a padding of 5px on the top, bottom
          and left, right. The inputs will have a border radius of 8px. The
          inputs will have a margin of 10px on the top and bottom. This ensures
          that our inputs are large enough to be easily clicked and legible to
          our main target audience of 40 - 60 year old adults.
        </p>
        <form className="space-y-3 max-w-xl mx-auto mt-10">
          <Input name="email" placeholder="Your Email" />
          <Textarea name="message" placeholder="Your Message" />
          <div className="flex">
            <Button className="w-full max-w-xl text-xl py-10">Submit</Button>
          </div>
        </form>
      </section>
      <section className="py-20">
        <h2 className="text-4xl font-bold mb-5 mt-10">
          Settings Input Control
        </h2>
        <p className="text-xl">
          We want to ensure that settings can be easily adjusted so the labels
          are provided for each control to ensure that user will be able to
          understand what they do. The font size for the labels is 18px.
        </p>
        <div className="flex items-center space-x-2 justify-center mt-10">
          <Switch id="dark-mode" />
          <Label htmlFor="dark-mode" className="text-lg">
            Dark Mode
          </Label>
        </div>
        <FontSlider />
      </section>
    </main>
  );
}
