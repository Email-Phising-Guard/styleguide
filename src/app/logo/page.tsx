import Image from "next/image";

export default function LogoPage() {


return (
  
    <div className="max-w-5xl mx-auto">
    
       <h2 className="text-6xl my-6">Logo</h2>

       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt commodi amet nobis sint eum asperiores repellat blanditiis aliquid dolore iusto. Odio neque fuga repellendus. Facere accusamus voluptas magnam! Ipsum, sit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt commodi amet nobis sint eum asperiores repellat blanditiis aliquid dolore iusto. Odio neque fuga repellendus. Facere accusamus voluptas magnam! Ipsum, sit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt commodi amet nobis sint eum asperiores repellat blanditiis aliquid dolore iusto. Odio neque fuga repellendus. Facere accusamus voluptas magnam! Ipsum, sit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt commodi amet nobis sint eum asperiores repellat blanditiis aliquid dolore iusto. Odio neque fuga repellendus. Facere accusamus voluptas magnam! Ipsum, sit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt commodi amet nobis sint eum asperiores repellat blanditiis aliquid dolore iusto. Odio neque fuga repellendus. Facere accusamus voluptas magnam! Ipsum, sit.</p>

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
        src={"/emailGurardLogo.svg"}
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
        /><Image 
        src={"/emailGurardLogo.svg"}
        alt="Email Gurard Logo" 
        width={200}
        height={200}
        className="mx-auto"
        />
      </div>

      <p>This will be all of the variants</p>

      <h2 className="text-6xl ">Clearance</h2>

      <p className="text-lg">Acceptable clearance for the logos are listed below. No content may be within the clearance border in order to preserve logo integrity.</p>


      <h2 className="text-6xl ">Do</h2>


      <h2 className="text-6xl ">Dont</h2>
    </div>
  );
}
