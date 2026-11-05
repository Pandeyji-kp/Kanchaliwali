import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const photos = [
  "/images/gallery/look-01.jpg",
  "/images/gallery/look-02.jpg",
  "/images/gallery/look-03.jpg",
  "/images/gallery/look-04.jpg",
  "/images/gallery/look-05.jpg",
  "/images/gallery/look-06.jpg",
  "/images/gallery/look-07.jpg",
  "/images/gallery/look-08.jpg",
  "/images/gallery/look-09.jpg",
  "/images/gallery/look-10.jpg",
  "/images/gallery/look-11.jpg",
  "/images/gallery/look-12.jpg",
  "/images/gallery/look-13.jpg",
  "/images/gallery/look-14.jpg",

  

];

export default function InstagramGallery() {
  return (
    <section className="bg-[#f7f0e5] px-5 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-12 text-center">
          <FaInstagram
            className="mx-auto mb-5 text-[#702b35]"
            size={24}
          />

          <p className="mb-3 text-[10px] tracking-[0.4em] text-[#96774e]">
            FOLLOW OUR JOURNEY
          </p>

          <h2 className="font-serif text-5xl text-[#702b35] md:text-7xl">
            A world of <span className="italic">tradition.</span>
          </h2>

          <p className="mt-4 text-sm text-[#81766a]">
            Discover the beauty of every creation.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4">
          {photos.map((photo, index) => (
            <Link
              href="https://www.instagram.com/kanchali_wali/"
              target="_blank"
              rel="noreferrer"
              key={photo}
              className={`group relative overflow-hidden ${
                index === 1 || index === 4
                  ? "aspect-[3/4]"
                  : "aspect-[4/5]"
              }`}
            >
              <Image
                src={photo}
                alt={`Kanchali Wali fashion look ${index + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                <FaInstagram
                  className="text-white opacity-0 transition-opacity group-hover:opacity-100"
                  size={26}
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="https://www.instagram.com/kanchali_wali/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border border-[#702b35] px-8 py-4 text-[10px] tracking-[0.2em] text-[#702b35] transition hover:bg-[#702b35] hover:text-white"
          >
            <FaInstagram size={16} />
            FOLLOW ON INSTAGRAM
          </Link>
        </div>
      </div>
    </section>
  );
}