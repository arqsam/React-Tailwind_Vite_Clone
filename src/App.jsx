import Card from "./components/Card";

export default function App() {
  return (
    <div className="container flex flex-wrap justify-between columns-2 mt-3 pt-10 pb-10 ">
      <div className="columns-1 h-50 flex-column grow w-[28rem] self-center pt-20 ">
        <h1 className="font-Inter font-[700] text-[56px] text-transparent bg-clip-text bg-gradient-to-tl from-[#c226d3] from-10%  via-[#ac32f2] via-60% to-[rgb(95,162,218)] to-80%">
          Vite
        </h1>
        <h1 className="font-Inter text-[56px] text-[rgb(255,255,245,0.86)] font-bold">
          {" "}
          Next Generation Frontend Tooling{" "}
        </h1>
        <h3 className="mt-2.5 text-[24px] text-[rgb(235,235,245,0.6)]">
          Get ready a development environment that can finally catch up with
          you.
        </h3>
        <div className="columns-1 pl-0 pt-2 pb-2 mt-7 flex-column space-x-7 ">
          <button className="rounded-full py-1.5 pl-5 pr-5 border-[1.3px] text-white text-[14px] font-medium border-solid border-[rgba(82,82,89,0.2)] bg-[rgb(100,108,255,1)]  hover:bg-[rgb(116,123,255,1)]">
            Get Started
          </button>
          <button className="rounded-full py-1.5 pl-5 pr-5 border-[1.3px] text-white text-[14px] font-medium border-solid border-[rgba(82,82,89,0.2)] bg-[rgb(49,49,54,1)] hover:bg-[rgba(60,60,67,0.5)]">
            Why Vite?
          </button>
          <button className="rounded-full py-1.5 pl-5 pr-5 border-[1.3px] text-white text-[14px] font-medium border-solid border-[rgba(82,82,89,0.2)] bg-[rgb(49,49,54,1)] hover:bg-[rgba(60,60,67,0.5)]">
            View on Github
          </button>
        </div>
      </div>
      <div className="column flex justify-center grow w-46 p-20 pt-20">
        <div className="rounded-full absolute h-[21rem] w-[21rem] blur-3xl bg-gradient-to-tl from-[#9d21aa] from-10%  via-[#ac32f2] via-45% to-[rgb(95,162,218)] to-5%"></div>
        <img
          className=" relative blur-none w-[300px] h-[300px] z-[10] "
          src="https://vitejs.dev/logo-with-shadow.png"
          alt="vite-logo"
        ></img>
      </div>
      <div className="flex-row mt-30 grow w-50 p-0 pt-10 pb-10">
        <div className="grid grid-cols-3 gap-12">
          <Card
            iconCard="💡"
            titleCard="Instant Server Start"
            textCard="On demand file serving over native ESM, no bundling required!"
          />
          <Card
            iconCard="⚡"
            titleCard="Lightning Fast HMR"
            textCard="Hot Module Replacement (HMR) that stays fast regardless of app size."
          />
          <Card
            iconCard="🛠️"
            titleCard="Rich Features"
            textCard="Out-of-the-box support for TypeScript, JSX, CSS and more."
          />
          <Card
            iconCard="📦"
            titleCard="Optimized Build"
            textCard="Pre-configured Rollup build with multi-page and library mode support."
          />
          <Card
            iconCard="🔩"
            titleCard="Universal Plugins"
            textCard="Rollup-superset plugin interface shared between dev and build."
          />
          <Card
            iconCard="🔑"
            titleCard="Fully Typed APIs"
            textCard="Flexible programmatic APIs with full TypeScript typing."
          />
        </div>
      </div>
    </div>
  );
}
