export const WhatsAppFloat = () => {
  const whatsappNumber = "6287775559883"; // +62 877-7555-9883
  const message = "Halo, saya tertarik dengan produk/layanan IGTrade. Mohon info lebih lanjut ya.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <img src="/whatsapp.svg" alt="WhatsApp" className="h-16 w-16" />
    </a>
  );
};

