import Image from "next/image";

const Intro = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div>
          <Image src={`/image.png`} alt="Femi Portrait" height={204}  width={204} quality={90}
          className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
