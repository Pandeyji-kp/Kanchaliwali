
import Image from "next/image";

const details = [
  {
    number: "01",
    title: "Inspired by Heritage",
    description: "Traditional silhouettes and timeless Rajasthani aesthetics.",
  },
  {
    number: "02",
    title: "Details That Matter",
    description: "Intricate embroidery, rich textures and beautiful finishes.",
  },
  {
    number: "03",
    title: "Made to Celebrate",
    description: "Fashion that makes every special moment memorable.",
  },
];

export default function Craftsmanship() {
  return (
    <section
      id="craftsmanship"
      className="bg-[#eee4d5] px-5 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/gallery/look-04.jpg"
            alt="Traditional Indian fashion details"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="mb-5 text-[10px] tracking-[0.4em] text-[#8c6842]">
            THE ART BEHIND EVERY LOOK
          </p>

          <h2 className="font-serif text-5xl leading-tight text-[#702b35] md:text-7xl">
            Beauty lives
            <br />
            in the <span className="italic">details.</span>
          </h2>

          <div className="mt-12">
            {details.map((item) => (
              <div
                key={item.number}
                className="grid grid-cols-[45px_1fr] gap-4 border-t border-[#702b35]/20 py-7"
              >
                <span className="text-xs text-[#a17b50]">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-serif text-2xl text-[#702b35]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#786d61]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
