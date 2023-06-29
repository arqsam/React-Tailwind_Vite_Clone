export default function Card(props) {
  console.log("PROPS: ", props);
  const { iconCard } = props;
  const { titleCard } = props;
  const { textCard } = props;
  return (
    <article className="flex-col bg-clip-border rounded-lg p-6 bg-[rgb(37,37,41,1)]">
      <div className="grow w-12 bg-clip-border rounded-md p-1 bg-[rgb(30,30,32,1)]">
        <p className="text-[27px] justify-center "> {iconCard} </p>
      </div>
      <h3 className="mt-4 font-semibold text-[16px] text-[rgb(255,255,245,0.86)]">
        {" "}
        {titleCard}{" "}
      </h3>
      <p className="mt-2.5 text-[14px] text-[rgb(235,235,245,0.6)]">
        {" "}
        {textCard}{" "}
      </p>
    </article>
  );
}
