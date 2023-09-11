import { socialMedia } from "@/utils/externalNav";

export default function Footer() {
  return (
    <div className="bg-slate-500">
      <div className="text-center pt-4 2xl:pt-10 2xl:mb-5 text-3xl 2xl:text-5xl text-white font-semibold">Contact us on social media!</div>
      <div className="flex justify-center gap-3 2xl:gap-10 p-5 2xl:pb-10">
        {socialMedia.map((item, index) => (
          <a key={index} href={item.link} target="_blank">
            <div>
              <img className="h-10 2xl:h-20" src={item.icon} alt="social" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
