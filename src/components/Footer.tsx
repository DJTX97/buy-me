import { socialMedia } from "@/utils/externalNav";

export default function Footer() {
  return (
    <div className="bg-slate-500">
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
