import { MessageCircle } from "lucide-react";
import { useLang } from "@/hooks/use-language";

export const WHATSAPP_NUMBER = "8801316357404";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Uperskill Agency! I'm interested in a website."
)}`;

export function WhatsAppButton() {
  const { t } = useLang();
  const label = t("হোয়াটসঅ্যাপে চ্যাট করুন", "Chat on WhatsApp");
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}