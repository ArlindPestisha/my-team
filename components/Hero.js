import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[#014E56] pt-10 mt-12 flex-row flex">
      <div className="lex-row flex">
        <div className=" dis">
          <Image
            
            src="/assets/bg-pattern-home-1.svg"
            width={200}
            height={200}
          />
        </div>

        <div className=" w-[560px] h-[200px]">
          <h1 className=" text-8xl font-bold text-white">
            Find the best <span className=" text-yellow-500  ">talent</span>
          </h1>
        </div>
      </div>

      <div>
        <div className="w-[400px] h-[112px]">
          <line className="border-[#79C8C7] border-r-[50px] pb-[-10px]"></line>
          <p className=" text-white mt-[65px]">
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>

        <div className=" mt-[350px] pr-40">
          <Image src="/assets/bg-pattern-home-2.svg" width={358} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
