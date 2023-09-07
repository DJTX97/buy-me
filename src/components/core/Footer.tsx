import { socialMedia } from "@/utils/externalNav";

export default function Footer() {
  return (
    <div className="bg-slate-500">
      <div className="text-center pt-4 text-3xl text-white font-semibold">Contact us on social media!</div>
      <div className="flex justify-center gap-3 p-5">
        {socialMedia.map((item, index) => (
          <a key={index} href={item.link} target="_blank">
            <div>
              <img className="h-10" src={item.icon} alt="social" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
