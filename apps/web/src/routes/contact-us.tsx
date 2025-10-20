import type { Route } from "./+types/contact-us";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { motion } from "framer-motion";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hubungi Kami - Infinity Globalindo" },
    {
      name: "description",
      content:
        "Hubungi tim Infinity Globalindo untuk konsultasi produk dan layanan impor-ekspor terpercaya.",
    },
  ];
}

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const emailContent = `
Nama: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Telepon: ${formData.phone}
Perusahaan: ${formData.company}
Subjek: ${formData.subject}

Pesan:
${formData.message}
`.trim();

      const mailtoLink = `mailto:halo@igtrade.id?subject=Kontak dari Website - ${formData.subject}&body=${encodeURIComponent(
        emailContent,
      )}`;

      window.location.href = mailtoLink;

      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero Section */}
      <section className="relative mx-4 my-8 rounded-3xl sm:mx-6 sm:my-12 sm:p-16 lg:mx-8 text-left sm:text-center">
        <div className="max-w-4xl mx-auto">
          <span
            className="inline-block px-4 py-1 text-sm font-medium uppercase"
            style={{
              backgroundColor: "rgba(245, 245, 245, 1)",
              color: "rgba(29, 152, 196, 1)",
            }}
          >
            Hubungi Kami
          </span>
          <h1 className="mt-6 font-serif font-medium text-[24px] leading-[36px] sm:text-[28px] sm:leading-[42px] md:text-[32px] md:leading-[48px] lg:text-[40px] lg:leading-[60px] tracking-[0px] text-[rgba(40,40,40,1)] mb-4 sm:mb-6">
            Mari Diskusikan Kebutuhan Bisnis Anda
          </h1>
          <p className="font-sans font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[150%] tracking-[0px] text-[rgba(136,136,136,1)] mb-6 sm:mb-8">
            Tim profesional kami siap membantu Anda menemukan solusi terbaik untuk kebutuhan impor-ekspor dan perdagangan global.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-4 mb-12 sm:mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-26 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-left sm:text-center lg:text-left"
            >
              <h2 className="font-serif font-medium text-[20px] leading-[150%] sm:text-[24px] md:text-[28px] lg:text-[32px] tracking-[0px] text-[rgba(40,40,40,1)] mb-4 sm:mb-6">
                Kirim Pesan
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <Label
                      htmlFor="firstName"
                      className="text-[rgba(40,40,40,1)] font-medium text-sm sm:text-base"
                    >
                      Nama Depan
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama depan"
                      required
                      className="mt-1 sm:mt-2"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="lastName"
                      className="text-[rgba(40,40,40,1)] font-medium text-sm sm:text-base"
                    >
                      Nama Belakang
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama belakang"
                      required
                      className="mt-1 sm:mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="text-[rgba(40,40,40,1)] font-medium text-sm sm:text-base"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="contoh@email.com"
                    required
                    className="mt-1 sm:mt-2"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="phone"
                    className="text-[rgba(40,40,40,1)] font-medium text-sm sm:text-base"
                  >
                    Nomor Telepon
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+62 812-3456-7890"
                    required
                    className="mt-1 sm:mt-2"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="company"
                    className="text-[rgba(40,40,40,1)] font-medium text-sm sm:text-base"
                  >
                    Nama Perusahaan
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Nama perusahaan Anda"
                    className="mt-1 sm:mt-2"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="subject"
                    className="text-[rgba(40,40,40,1)] font-medium text-sm sm:text-base"
                  >
                    Subjek
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Tentang apa yang ingin Anda diskusikan?"
                    required
                    className="mt-1 sm:mt-2"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="text-[rgba(40,40,40,1)] font-medium text-sm sm:text-base"
                  >
                    Pesan
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Ceritakan lebih detail tentang kebutuhan bisnis Anda..."
                    required
                    className="mt-1 sm:mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(29,152,196,1)] focus:border-[rgba(29,152,196,1)] resize-none text-sm sm:text-base text-black bg-white"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto text-white px-6 sm:px-8 py-2 sm:py-3 hover:opacity-90 text-sm sm:text-base disabled:opacity-50"
                  style={{ backgroundColor: "rgba(29, 152, 196, 1)" }}
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </Button>

                {submitStatus === "success" && (
                  <p className="text-green-600 text-sm mt-2">
                    ✅ Email client dibuka! Silakan kirim email untuk melanjutkan.
                  </p>
                )}

                {submitStatus === "error" && (
                  <p className="text-red-600 text-sm mt-2">
                    ❌ Terjadi kesalahan. Silakan coba lagi.
                  </p>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-left sm:text-center md:text-center lg:text-left"
            >
              <h2 className="font-serif font-medium text-[20px] leading-[150%] sm:text-[24px] md:text-[28px] lg:text-[32px] tracking-[0px] text-[rgba(40,40,40,1)] mb-4 sm:mb-6">
                Informasi Kontak
              </h2>

              <div className="space-y-4 sm:space-y-6 md:grid md:grid-cols-2 md:gap-4 lg:flex lg:flex-col lg:space-y-4 lg:gap-0">
                {/* Phone */}
                <div className="flex items-start md:items-center md:justify-center lg:items-start lg:justify-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(29,152,196,1)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans font-medium text-[16px] sm:text-[18px] leading-[150%] text-[rgba(40,40,40,1)] mb-1">
                      Telepon
                    </h3>
                    <p className="font-sans font-normal text-[14px] sm:text-[16px] leading-[150%] text-[rgba(136,136,136,1)]">
                      +62 877-7555-9883
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start md:items-center md:justify-center lg:items-start lg:justify-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(29,152,196,1)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans font-medium text-[16px] sm:text-[18px] leading-[150%] text-[rgba(40,40,40,1)] mb-1">
                      Email
                    </h3>
                    <p className="font-sans font-normal text-[14px] sm:text-[16px] leading-[150%] text-[rgba(136,136,136,1)]">
                      halo@igtrade.id
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start md:items-center md:justify-center lg:items-start lg:justify-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(29,152,196,1)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans font-medium text-[16px] sm:text-[18px] leading-[150%] text-[rgba(40,40,40,1)] mb-1">
                      Alamat
                    </h3>
                    <p className="font-sans font-normal text-[14px] sm:text-[16px] leading-[150%] text-[rgba(136,136,136,1)]">
                      Jl. Sudirman No. 123
                      <br />
                      Jakarta Pusat 10270
                      <br />
                      Indonesia
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start md:items-center md:justify-center lg:items-start lg:justify-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(29,152,196,1)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans font-medium text-[16px] sm:text-[18px] leading-[150%] text-[rgba(40,40,40,1)] mb-1">
                      Jam Operasional
                    </h3>
                    <p className="font-sans font-normal text-[14px] sm:text-[16px] leading-[150%] text-[rgba(136,136,136,1)]">
                      Senin - Jumat: 08:00 - 17:00
                      <br />
                      Sabtu: 08:00 - 12:00
                      <br />
                      Minggu: Tutup
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-6 sm:mt-8">
                <a
                  href="https://wa.me/6287775559883?text=Halo, saya tertarik dengan produk/layanan IGTrade. Mohon info lebih lanjut ya."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm sm:text-base"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  Chat via WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}


