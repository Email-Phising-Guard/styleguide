import Image from "next/image";

export default function LogoPage() {
  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-10">Logo</h1>

      <p className="text-xl">
        In designing our logo, we prioritized simplicity and recognizability,
        ensuring it would resonate especially with our older demographic. The
        decision to use an email and a shield as primary symbols was made with a
        clear purpose in mind - to underline the core functionality of our
        application, which is to robustly safeguard emails against the threats
        of hackers and spam. We deliberately selected the color blue, a
        universal symbol of protection, to reinforce the essence of our logo.
        The font we chose for our wordmark, Inter, was no random choice either.
        Known for its adaptability across various screen sizes and resolutions,
        Inter ensures that our content maintains a high readability quotient on
        all devices. We believe these thoughtful choices make our logo not just
        visually appealing, but also a true representation of our applications
        purpose and functionality.{" "}
      </p>
      <div className="border p-5 my-10">
        <Image
          src={"/emailGuardLogoMain.svg"}
          alt="Email Guard Logo"
          width={500}
          height={500}
          className="mx-auto my-20"
        />
      </div>

      <h2 className="text-4xl font-bold mb-10 mt-20">Variants</h2>
      <p className="text-xl">
        Acceptable logo Variants: include logo and wordmark seperation,
        different logo style, and color variants
      </p>

      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col items-center p-5 gap-2">
          <Image
            src={"/logoVariants2.svg"}
            alt="Email Guard Logo"
            width={200}
            height={200}
            className="mx-auto"
          />
          <Image
            src={"/ShieldSendLogo.svg"}
            alt="Email Guard Logo"
            width={200}
            height={200}
            className="mx-auto"
          />
          <p className="font-bold">Full Color</p>
        </div>
        <div className="flex flex-col items-center p-5 gap-2">
          <Image
            src={"/logoVariant3.svg"}
            alt="Email Guard Logo"
            width={200}
            height={200}
            className="mx-auto"
          />
          <Image
            src={"/blackAndWhite.svg"}
            alt="Email Guard Logo"
            width={200}
            height={200}
            className="mx-auto"
          />
          <p className="font-bold">Black and White</p>
        </div>
        <div className="flex flex-col items-center p-5 gap-2">
          <Image
            src={"/LogoVeritcalVariants4.svg"}
            alt="Email Guard Logo"
            width={200}
            height={200}
            className="mx-auto"
          />
          <Image
            src={"/blackAndWhite.svg"}
            alt="Email Guard Logo"
            width={200}
            height={200}
            className="mx-auto"
          />
          <p className="font-bold">GrayScale</p>
        </div>
      </div>

      <Image
        src={"/nameVariants.png"}
        alt="different color variants"
        width={800}
        height={800}
        className="flex items-center mx-auto"
      />
      <p className="font-bold text-center">Wordmark variants</p>

      <div>
        <h2 className="text-4xl font-bold mb-10 mt-20">Clearance</h2>
        <p className="text-xl">
          Acceptable clearance for the logos are listed below. No content may be
          within the clearance border in order to preserve logo integrity.
        </p>
        <div className="space-y-12">
          <Image
            src={"/logo.png"}
            alt="Title"
            width={600}
            height={600}
            className="mx-auto"
          />

          <Image
            src={"/logoName.png"}
            alt="Title"
            width={600}
            height={600}
            className="mx-auto"
          />

          <Image
            src={"/title.png"}
            alt="Title"
            width={600}
            height={600}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
