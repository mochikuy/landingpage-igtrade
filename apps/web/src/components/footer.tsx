import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  const year = new Date().getFullYear();
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="pt-16 bg-white">
        <div className="px-4 sm:px-8 md:px-16 lg:px-28">
        <Separator className="bg-gray-200" />
        </div>
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/infinity-globalindo-logo.svg" alt="Infinity Globalindo" className="h-12 w-auto" />
          </div>

          {/* Address */}
          <div className="flex-1">
            <div className="text-xs uppercase tracking-wide text-gray-500">Address</div>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              JL. PANTAI INDAH UTARA 2 PIK, Desa/Kelurahan Kapuk Muara,<br />
              Kec. Penjaringan, Kota Adm. Jakarta Utara, Provinsi DKI Jakarta, Kode Pos: 14460
            </p>
          </div>

          {/* Phone + Back to Top */}
          <div className="flex flex-row items-center md:items-center gap-32">
            <div>
              <div className="text-xs uppercase tracking-wide text-gray-500">Phone Number</div>
              <p className="mt-2 text-sm text-gray-700">+62 877-7555-9883</p>
            </div>
            <Button variant="outline" onClick={scrollToTop} className="!text-black !bg-white !border-gray-300 hover:!bg-gray-100 hover:!text-black">Back to Top</Button>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-28">
        <Separator className="bg-gray-200" />
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between text-sm text-gray-600">
          <div>© All Right Reserved. PT Infinity Globalindo Trade</div>
          <div>{year}</div>
        </div>
      </div>
    </footer>
  );
};
