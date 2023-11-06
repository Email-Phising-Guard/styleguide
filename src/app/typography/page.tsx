import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import Image from "next/image";

export default function TypographyPage() {
  return (
    <main className="mb-24 mt-10 p-5 mx-auto max-w-5xl z-0">
      <h1 className="text-4xl font-bold">Typography</h1>
      <div className="my-10 text-lg flex flex-col gap-y-4">
        <p>
          Our application, Email Guard, is designed to cater to a broad
          audience, including elderly individuals who may{" "}
          <span style={{ fontStyle: "Italic" }}>not</span> be as tech-savvy. As
          an educational tool, our primary goal is to maintain simplicity and
          clarity in our design and content. To this end, we have chosen the{" "}
          <span style={{ fontWeight: "bold" }}>Inter</span> typeface for our
          typography.
        </p>
        <p>
          Inter is known for its clean and modern design, which enhances
          readability and ensures a user-friendly experience. Inter features a
          tall x-height to aid in readability of mixed-case and lower-case text,
          making it a perfect choice for our potential users. It has a wide
          range of weights and styles, including bold and italic, which helps
          highlight key info.
        </p>
        <p>
          We use font weights from{" "}
          <span style={{ fontWeight: "400" }}>400</span> to{" "}
          <span style={{ fontWeight: "700" }}>700</span>, sizes from 1.125rem up
          to 2.25rem, and styles like{" "}
          <span style={{ fontStyle: "Italic" }}>italic</span> and{" "}
          <span style={{ textDecoration: "Underline" }}>underline</span>. The
          main font color is black (#000000), with some headings in primary blue
          colors (<span style={{ color: "#2563eb" }}>#2563eb</span>) subject to
          the purpose of use.
        </p>
        <div className="flex flex-col items-center p-5">
          <Image
            src="/typography/inter.png"
            alt="inter font"
            width={1000}
            height={1000}
          ></Image>
        </div>
      </div>

      <h1 className="text-4xl font-bold">Typography Hierachy</h1>
      <Table className="mt-10">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px] text-lg">Content</TableHead>
            <TableHead className="w-[500px] text-lg">Example</TableHead>
            <TableHead className="text-right w-[600px] text-lg">
              Decription
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-base">Heading 1</TableCell>
            <TableCell className="text-4xl font-bold">Welcome!</TableCell>
            <TableCell className="text-right">
              Font size: 2.25rem | Font Weight:700 | Italic: none
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-base">Heading 2 </TableCell>
            <TableCell className="text-2xl font-bold">
              Quiz and Learning Centre
            </TableCell>
            <TableCell className="text-right">
              Font size: 1.5rem | Font Weight: 700 | Italic: none
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-base">Heading 3 </TableCell>
            <TableCell className="text-xl font-semibold">Quiz 2</TableCell>
            <TableCell className="text-right">
              Font size: 1.25rem | Font Weight: 600 | Italic: none
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-base">Paragraphs</TableCell>
            <TableCell className="text-lg">
              Which of the following is correct about spam email?
            </TableCell>
            <TableCell className="text-right">
              Font size: 1.125rem | Font Weight: default | Italic: none
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-base">Key words</TableCell>
            <TableCell className="text-lg italic">spam email</TableCell>
            <TableCell className="text-right">
              Font size: 1.125rem | Font Weight: default | Italic: yes
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-base">Links</TableCell>
            <TableCell className="text-lg">
              <Link
                href="https://www.youtube.com/watch?v=o0btqyGWIQw"
                className="underline"
              >
                Spot Phishing Emails | Here is how
              </Link>
            </TableCell>
            <TableCell className="text-right">
              Font size: 1.125rem | Font Weight: default | Italic: none
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
