import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowUp, MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 pt-20 pb-8 text-sm font-sans text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Logo & Brand */}
          <div className="lg:col-span-4 flex flex-col items-start gap-6">
            <div className="p-2 bg-white rounded-lg inline-block">
              <img src="/infinity-globalindo-logo.svg" alt="Infinity Globalindo" className="h-8 w-auto" />
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm text-base">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.instagram.com/infinityglobalindotrade?igsh=MTNldzVxd21taWNwbQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#1D98C4] hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#1D98C4] hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#1D98C4] hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex gap-4 group">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-[#1D98C4]/20 group-hover:text-[#1D98C4] transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">{t('footer.head_office')}</h4>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors">
                  JL. PANTAI INDAH UTARA 2 PIK, Desa/Kelurahan Kapuk Muara,
                  Kec. Penjaringan, Kota Adm. Jakarta Utara, DKI Jakarta, 14460
                </p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-[#1D98C4]/20 group-hover:text-[#1D98C4] transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">{t('footer.workshop')}</h4>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors">
                  Ruko Kopi Mas Lantai 3, Jl Kopi 4 L, Roa Malaka Tambora
                  Jakarta Barat, DKI Jakarta 11230
                </p>
              </div>
            </div>
          </div>

          {/* Contact & Actions */}
          <div className="lg:col-span-4 flex flex-col lg:items-end justify-between gap-8">
            <div className="space-y-6 lg:text-right w-full">
              <div className="group flex flex-row lg:flex-row-reverse items-center justify-start lg:justify-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-[#1D98C4] group-hover:text-white transition-all duration-300 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-1">{t('footer.phone')}</h4>
                  <a href="tel:+6287775559883" className="block text-slate-400 hover:text-[#1D98C4] transition-colors text-lg font-medium">
                    +62 877-7555-9883
                  </a>
                </div>
              </div>

              <div className="group flex flex-row lg:flex-row-reverse items-center justify-start lg:justify-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-[#1D98C4] group-hover:text-white transition-all duration-300 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-1">{t('footer.email')}</h4>
                  <a href="mailto:halo@igtrade.id" className="block text-slate-400 hover:text-[#1D98C4] transition-colors text-lg font-medium">
                    halo@igtrade.id
                  </a>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              onClick={scrollToTop}
              className="self-start lg:self-end group bg-transparent border-slate-700 text-slate-400 hover:text-white hover:border-[#1D98C4] hover:bg-[#1D98C4] transition-all duration-300"
            >
              {t('footer.back_to_top')} <ArrowUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
            </Button>
          </div>
        </div>

        <Separator className="bg-slate-800 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <p>© {year} PT Infinity Globalindo Trade. {t('footer.rights')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
