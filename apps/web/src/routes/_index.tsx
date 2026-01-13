import type { Route } from "./+types/_index";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Infinity Globalindo - Connecting Global Markets" },
    {
      name: "description",
      content: "Leading export-import management, product sourcing, and international shipping solutions.",
    },
  ];
}

export default function Home() {
  const { t } = useTranslation();

  const products = [
    {
      title: t('products.items.safety.title'),
      description: t('products.items.safety.desc'),
      icon: "/safety-box.svg",
      delay: 0,
    },
    {
      title: t('products.items.padel.title'),
      description: t('products.items.padel.desc'),
      icon: "/padel-tennis.svg",
      delay: 0.1,
    },
    {
      title: t('products.items.pneumatic.title'),
      description: t('products.items.pneumatic.desc'),
      icon: "/pneumatic.svg",
      delay: 0.2,
    },
    {
      title: t('products.items.financial.title'),
      description: t('products.items.financial.desc'),
      icon: "/financial.svg",
      delay: 0.3,
    },
  ];

  const services = [
    {
      title: t('services.items.export_import.title'),
      description: t('services.items.export_import.desc'),
      icon: "/export-import.svg",
    },
    {
      title: t('services.items.sourcing.title'),
      description: t('services.items.sourcing.desc'),
      icon: "/product-sourcing.svg",
    },
    {
      title: t('services.items.shipping.title'),
      description: t('services.items.shipping.desc'),
      icon: "/international-shipping.svg",
    },
    {
      title: t('services.items.inspection.title'),
      description: t('services.items.inspection.desc'),
      icon: "/quality-inspection.svg",
    },
    {
      title: t('services.items.warehouse.title'),
      description: t('services.items.warehouse.desc'),
      icon: "/warehouse.svg",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white font-sans selection:bg-blue-100">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden flex flex-col justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Overlay Gradients - Creating the dark shadow effect top, left, bottom */}
        {/* Left gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000814] via-[#000814]/80 to-transparent z-10 w-[70%]" />

        {/* Top gradient for navbar */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#000814] to-transparent z-10" />

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#000814] to-transparent z-10" />

        {/* Full overlay for consistency/dimming */}
        <div className="absolute inset-0 bg-[#000814]/20 z-0" />

        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col justify-center text-left"
            >
              <h1
                className="font-serif font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-white mb-8 drop-shadow-lg"
                dangerouslySetInnerHTML={{ __html: t('hero.title').replace('text-blue-600', 'text-[#38bdf8]') }}
              />
              <p className="font-sans text-lg sm:text-xl leading-relaxed text-slate-200 mb-12 max-w-xl drop-shadow-md">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Button
                  size="lg"
                  className="h-14 px-10 text-lg bg-[#1D98C4] hover:bg-[#1787b0] text-white shadow-xl hover:shadow-[#1D98C4]/20 transition-all hover:scale-105 rounded-xl border-none"
                  onClick={() => window.open('https://wa.me/6287775559883', '_blank')}
                >
                  {t('hero.cta_primary')}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-10 text-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/30 text-white shadow-xl transition-all hover:scale-105 rounded-xl"
                  onClick={() => window.open('https://ecatalog.igtrade.id/', '_blank')}
                >
                  {t('hero.cta_secondary')}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-white relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-wider uppercase rounded-full bg-slate-50 text-[#1D98C4] mb-4">
              {t('services.badge')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6 leading-tight">
              {t('services.title')}
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              {t('services.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, idx) => (
              <ServiceCard key={idx} service={service} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {services.slice(3).map((service, idx) => (
              <ServiceCard key={idx + 3} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-4 bg-slate-50/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-wider uppercase rounded-full bg-white border border-slate-100 text-[#1D98C4] mb-4">
              {t('products.badge')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6 leading-tight">
              {t('products.title')}
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              {t('products.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: product.delay }}
                viewport={{ once: true }}
                className="group relative rounded-[2rem] border border-slate-100 bg-white p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="flex-shrink-0 p-4 rounded-2xl bg-slate-50 group-hover:bg-blue-50 transition-colors">
                    <img src={product.icon} alt={product.title} className="h-16 w-16 object-contain" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-2 group-hover:text-[#1D98C4] transition-colors">{product.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{product.description}</p>
                    <div className="flex items-center text-[#1D98C4] font-medium text-sm group/btn cursor-pointer">
                      {t('products.detail_btn')} <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl rounded-[2.5rem] p-10 sm:p-16 text-center relative overflow-hidden"
          style={{ backgroundColor: "rgba(29, 152, 196, 1)" }}
        >
          {/* Abstract Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <img
              src="/infinity-globalindo-white-logo.svg"
              alt="Infinity Globalindo"
              className="h-12 w-auto mb-10 opacity-90"
            />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
              {t('cta.title')}
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl leading-relaxed mb-10">
              {t('cta.description')}
            </p>
            <Button size="lg" className="h-14 px-10 text-lg bg-white text-[#1D98C4] hover:bg-slate-50 border-0 shadow-xl hover:scale-105 transition-all">
              {t('cta.btn')}
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function ServiceCard({ service }: { service: { title: string, description: string, icon: string } }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
    >
      <div className="mb-6 p-4 rounded-full bg-blue-50/50">
        <img src={service.icon} alt={service.title} className="h-16 w-16" />
      </div>
      <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
      <p className="text-slate-600 text-center leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  )
}
