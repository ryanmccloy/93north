import Image from "next/image";

function Testimonials() {
  return (
    <div className="width-size section-styles" id="testimonials">
      <p className="  max-w-[750px] strong-paragraph border-l-2  border-l-accent pl-15 md:pl-30">
        Every project is a collaboration — and our clients are at the heart of
        everything we build. From concept to launch, we focus on making the
        process as smooth, transparent, and enjoyable as possible. Here’s what
        they had to say about working with us.
      </p>

      <div className="flex flex-col-reverse  lg:flex-row lg:justify-end  gap-30 lg:gap-60 items-end  mt-90 md:mt-120">
        <div className="pb-2">
          <Image
            src="/images/landing/testimonials/goneichiwa-logo.svg"
            alt="Goneichiwa.com logo"
            quality={100}
            width={100}
            height={100}
          />
        </div>

        <div>
          <blockquote className="italic max-w-[850px] lg:text-large">
            &quot;93 North built us a beautiful, powerful site that’s ready to
            grow as we do. They gave us everything we need to launch with
            confidence — from the design to the e-commerce setup — so we can now
            focus on creating products, travel guides, and a blog for our
            audience. It feels amazing knowing our online home is built to scale
            and set us up for long-term success.&quot;
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
