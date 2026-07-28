import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-[#161515] font-sans">
      <main
        className="w-full max-w-[480px] py-0 px-8 pb-10 text-center rounded-[32px] mx-6"
        style={{
          background:
            "radial-gradient(circle at top, rgba(255, 255, 255, 0.14), transparent 55%), linear-gradient(145deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.06))",
          boxShadow:
            "0 32px 80px rgba(15, 23, 42, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
        }}
      >
        <div className="inline-flex items-center justify-center w-[300px] h-[300px] rounded-[28px] relative overflow-hidden max-sm:w-22 max-sm:h-22 max-sm:mb-3.5">
          <div className="w-[250px] h-[250px] rounded-[22px] bg-white relative max-sm:w-20 max-sm:h-20">
            <Image
              src="/ic_logo_new.png"
              alt="EngChatt logo"
              width={250}
              height={250}
              className="w-full h-full rounded-[inherit] object-contain block"
            />
          </div>
        </div>

        <h1 className="text-[32px] tracking-[0.02em] mb-2 text-[#F69326] max-sm:text-[26px]">
          <span className="block">EngChatt</span>
        </h1>
        <p className="text-[15px] text-[#878B87] mb-8 max-sm:text-sm max-sm:mb-6 max-sm:text-[#FCC419]">
          Awesome Reading Game
        </p>

        <div className="flex flex-col items-center gap-2 mb-8 max-sm:mb-6">
          <a
            className="inline-block no-underline p-0 rounded-none bg-transparent shadow-none"
            href="#"
            aria-label="Download on the App Store"
          >
            <Image
              src="/app-store.svg"
              alt="Download on the App Store"
              width={200}
              height={60}
              className="block max-w-[200px] w-full h-auto"
            />
          </a>
          <a
            className="inline-block no-underline p-0 rounded-none bg-transparent shadow-none"
            href="#"
            aria-label="Get it on Google Play"
          >
            <Image
              src="/google-play.png"
              alt="Get it on Google Play"
              width={200}
              height={60}
              className="block max-w-[200px] w-full h-auto"
            />
          </a>
        </div>

        <p className="text-[13px] text-[#161515] mb-0">
          Contact:{" "}
          <a
            href="mailto:support@email.com"
            className="text-[#161515] font-medium no-underline hover:text-[#F69326]"
          >
            hi@meettheet.com
          </a>
        </p>

        <div className="inline-flex items-center gap-2 text-xs text-[#161515] mt-4">
          <span>Powered by EngChatt</span>
        </div>
      </main>
    </div>
  );
}
