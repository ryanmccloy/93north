const text = ["Make your vision a reality!"];

export default function ScrollingBanner() {
  return (
    <div className="  text-secondary-grey overflow-hidden flex">
      <ul className="flex  gap-60 text-nowrap animate-infinite-scroll">
        {[...text, ...text, ...text, ...text, ...text].map(
          (sentence, index) => (
            <li key={index} className="flex gap-15 items-center">
              <span className="hero-heading">{sentence}</span>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
