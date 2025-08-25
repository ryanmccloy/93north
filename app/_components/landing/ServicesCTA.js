import Button from "../reusable/Button";

function ServicesCTA() {
  return (
    <div className=" grid-standard">
      <p className="max-w-[750px] strong-paragraph border-l-2  border-l-accent pl-15 md:pl-30">
        We’re a digital agency based in Northern Ireland, focused on creating
        websites and online strategies that work. From design to development and
        marketing, we help businesses show up and stand out online.
      </p>
      <div className="self-end flex flex-col gap-15">
        <p className="uppercase font-normal">Have a project in mind?</p>
        <Button underline={true} link={true} href="#contact">
          Get in touch
        </Button>
      </div>
    </div>
  );
}

export default ServicesCTA;
