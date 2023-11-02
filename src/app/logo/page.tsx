import Image from "next/image";

export default function LogoPage() {


return (
  
    <div className="max-w-5xl mx-auto">
    
       <h2 className="text-6xl my-6">Logo</h2>

       <p className="text-2xl">In designing our logo, we prioritized simplicity and recognizability, ensuring it would resonate especially with our older demographic. The decision to use an email and a shield as primary symbols was made with a clear purpose in mind - to underline the core functionality of our application, which is to robustly safeguard emails against the threats of hackers and spam. We deliberately selected the color blue, a universal symbol of protection, to reinforce the essence of our logo. The font we chose for our wordmark, Inter, was no random choice either. Known for its adaptability across various screen sizes and resolutions, Inter ensures that our content maintains a high readability quotient on all devices. We believe these thoughtful choices make our logo not just visually appealing, but also a true representation of our applications purpose and functionality. </p>

       <Image 
       src={"/emailGurardLogo.svg"}
       alt="Email Gurard Logo" 
       width={800}
       height={800}
       className="mx-auto"
       />


      <h2 className="text-6xl ">Variants</h2>
      <p className="text-xl">Acceptable logo Variants: include logo and wordmark seperation, different logo style, and color variants</p>

      <div className="flex flex-row items-center">
        <Image 
        src={"/logoVariants2.svg"}
        alt="Email Gurard Logo" 
        width={200}
        height={200}
        className="mx-auto"
        />
        <Image 
        src={"/logoVariant3.svg"}
        alt="Email Gurard Logo" 
        width={200}
        height={200}
        className="mx-auto"
        /><Image 
        src={"/LogoVeritcalVariants4.svg"}
        alt="Email Gurard Logo" 
        width={200}
        height={200}
        className="mx-auto"
        />
      </div>


      <div className="flex flex-row">
        <Image 
        src={"/ShieldSendLogo.svg"}
        alt="Email Gurard Logo" 
        width={200}
        height={200}
        className="mx-auto"
        />


        <Image 
        src={"/blackAndWhite.svg"}
        alt="Email Gurard Logo" 
        width={200}
        height={200}
        className="mx-auto"
        />

        <Image 
        src={"/blackAndWhite.svg"}
        alt="Email Gurard Logo" 
        width={200}
        height={200}
        className="mx-auto"
        />
      </div>


      <div className="flex flex-row items-center gap-9">
      <p className="">Full Color</p>
      <p className="">Black and White</p>
      <p className="">GrayScale</p>

      </div>


      <div>
      <h2 className="text-6xl ">Clearance</h2>
      <p className="text-lg">Acceptable clearance for the logos are listed below. No content may be within the clearance border in order to preserve logo integrity.</p>

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
  );
}
