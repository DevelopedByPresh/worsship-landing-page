import img1 from "../images/living.png";
import img2 from "../images/faith.png";
import img3 from "../images/com.png";
import img4 from "../images/holy.png"; 

export default function Trusted() {
  const ministries = [
    { image: img1, name: "Living Word Ministry" },
    { image: img2, name: "Faith Podcast Network" },
    { image: img3, name: "Community Church" },
    { image: img4, name: "Holy Grounds Ministry" },
  ];

  return (
    <section className="w-full py-2 px-6 md:px-10 flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-3xl font-extrabold text-[#191A15]">
        Trusted by Ministries <br /> Worldwide
      </h2>

      <p className="text-[#5E5F6B] mt-3 max-w-xl">
        Trusted by Churches, ministries and Christian Creators worldwide
      </p>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-7 md:gap-10">
        {ministries.map((m, index) => (
          <div key={index} className="flex flex-col cursor-pointer items-center text-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white">
              <img
                src={m.image}
                alt={m.name}
                className="w-12 h-12 object-contain"
              />
            </div>
<p className="mt-3 text-[#42424A] text-[10px] md:text-sm">
  {m.name}
</p>

          </div>
        ))}
      </div>
    </section>
  );
}
