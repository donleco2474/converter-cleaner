import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Truck,
  CreditCard,
  Shield,
  Clock,
  Phone,
  Package,
  Star,
} from "lucide-react";

const OrderSection = () => {
  const benefits = [
    "Reduces emissions by up to 50%",
    "Improves fuel efficiency immediately",
    "No engine disassembly required",
    "Safe for all gasoline vehicles",
    "Cleans entire fuel system",
    "Prevents costly repairs",
  ];

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      "Hi! I want to order CleanMax Pro Catalytic Converter Cleaner (2 bottles for ₦20,500). Please confirm my order and delivery details.",
    );
    window.open(`https://wa.me/2348123456789?text=${message}`, "_blank");
  };

  const handleCallOrder = () => {
    window.open("tel:+2348123456789", "_self");
  };

  return (
    <section
      id="order-section"
      className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-800 hover:bg-green-200 px-4 py-2 mb-4"
          >
            <Package className="w-4 h-4 mr-2" />
            Limited Time Offer
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Your{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              CleanMax Pro
            </span>{" "}
            Today
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your vehicle's performance with our premium catalytic
            converter cleaner. Order now and experience the difference
            immediately.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Product Package */}
          <Card className="bg-white text-gray-900 p-8 shadow-2xl">
            <div className="space-y-6">
              <div className="text-center">
                <div className="bg-gradient-to-br from-brand-500 to-green-500 rounded-2xl p-6 inline-block mb-4">
                  <Package className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Premium Package</h3>
                <p className="text-gray-600">
                  Everything you need for optimal results
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium">CleanMax Pro (120ml)</span>
                  <span className="text-gray-600">2 Bottles</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium">Free Nationwide Delivery</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium">Payment on Delivery</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium">Usage Instructions</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-sm text-gray-600 line-through">
                    Regular Price: ₦25,000
                  </div>
                  <div className="text-3xl font-bold text-green-600">
                    ₦20,500
                  </div>
                  <div className="text-sm text-gray-600">
                    Special Launch Price
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-red-100 text-red-800 mt-2"
                  >
                    Save ₦4,500!
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Order Options */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-4">Ready to Order?</h3>
              <p className="text-gray-300 text-lg">
                Choose your preferred ordering method below. We offer multiple
                convenient ways to place your order with secure payment options.
              </p>
            </div>

            <div className="space-y-4">
              {/* WhatsApp Order */}
              <Card
                className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 hover:shadow-xl transition-all cursor-pointer group"
                onClick={handleWhatsAppOrder}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 rounded-full p-3 group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-1">
                      Order via WhatsApp
                    </h4>
                    <p className="text-green-100">
                      Quick and easy ordering process
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-90">Most Popular</div>
                    <Badge
                      variant="secondary"
                      className="bg-white/20 text-white"
                    >
                      <Star className="w-3 h-3 mr-1" />
                      Instant
                    </Badge>
                  </div>
                </div>
              </Card>

              {/* Phone Order */}
              <Card
                className="bg-gradient-to-r from-brand-600 to-blue-700 text-white p-6 hover:shadow-xl transition-all cursor-pointer group"
                onClick={handleCallOrder}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 rounded-full p-3 group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-1">Call to Order</h4>
                    <p className="text-blue-100">
                      Speak directly with our team
                    </p>
                  </div>
                  <div className="text-right text-lg font-bold">
                    +234 812 345 6789
                  </div>
                </div>
              </Card>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-700">
              <div className="text-center">
                <Truck className="w-8 h-8 mx-auto mb-2 text-green-400" />
                <div className="text-sm text-gray-300">Free Delivery</div>
              </div>
              <div className="text-center">
                <CreditCard className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                <div className="text-sm text-gray-300">Pay on Delivery</div>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <div className="text-sm text-gray-300">
                  Satisfaction Guaranteed
                </div>
              </div>
            </div>

            {/* Urgency */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Clock className="w-5 h-5" />
                <span className="font-bold">Limited Time Offer</span>
              </div>
              <p className="text-sm text-orange-100">
                Special launch price ends soon. Order now to secure your
                discount!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
