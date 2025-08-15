import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/lib/tracking";

interface WhatsAppButtonProps {
  productName?: string;
  className?: string;
  size?: "sm" | "lg" | "default";
  phoneNumber?: string;
}

const WhatsAppButton = ({
  productName = "CleanMax Pro",
  className = "",
  size = "default",
  phoneNumber = "2347030151874",
}: WhatsAppButtonProps) => {
  const message = `Hi, I just placed an order for ${productName}. Please confirm my order.`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    trackButtonClick("whatsapp_cta", "whatsapp_contact");
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      size={size}
      className={`bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 h-auto py-4 ${className}`}
    >
      <div className="text-center">
        <div className="text-base font-semibold">
          📲 Confirm Order on WhatsApp
        </div>
        <div className="text-xs mt-1 leading-tight opacity-90">
          Skip the waiting — get instant order confirmation
        </div>
      </div>
    </Button>
  );
};

export default WhatsAppButton;
