import { useLocation, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Phone,
  Clock,
  Truck,
  ArrowLeft,
  MessageCircle,
  Gift,
} from "lucide-react";
import WhatsAppButton from "@/components/ui/whatsapp-button";

const ThankYou = () => {
  const location = useLocation();
  const orderData = location.state || {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8">
        {/* Main Success Card */}
        <Card className="bg-white p-8 shadow-2xl text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-blue-500" />
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl" />

          <div className="relative z-10 space-y-6">
            {/* Success Icon */}
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-pulse">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>

            {/* Main Message */}
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                CONGRATULATIONS!
              </h1>
              <p className="text-xl text-gray-700 font-medium">
                Your order has been received successfully
              </p>
              {orderData.customerName && (
                <p className="text-lg text-gray-600">
                  Thank you,{" "}
                  <span className="font-semibold text-brand-600">
                    {orderData.customerName}
                  </span>
                  !
                </p>
              )}
            </div>

            {/* Order Summary */}
            {orderData.packageType && (
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Order Summary
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Package:</span>
                    <span className="font-medium">{orderData.packageType}</span>
                  </div>
                  {orderData.price && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total:</span>
                      <span className="font-bold text-green-600 text-lg">
                        {orderData.price}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* What Happens Next */}
            <div className="text-left bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-center">
                What Happens Next?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Step 1: Confirmation Call
                    </p>
                    <p className="text-sm text-gray-600">
                      We'll call you within 24 hours to confirm your order
                      details
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 rounded-full p-2">
                    <Truck className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Step 2: Dispatch & Delivery
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Lagos:</strong> 24-48 hours delivery
                      <br />
                      <strong>Other States:</strong> 2-5 working days
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-2">
                    <Clock className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Step 3: Delivery Contact
                    </p>
                    <p className="text-sm text-gray-600">
                      Our dispatch rider will contact you when your order is
                      ready
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact & Support Card */}
        <Card className="bg-white p-6 shadow-xl">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-center text-gray-900">
              Need Help or Have Questions?
            </h3>

            <div className="max-w-md mx-auto space-y-4">
              {/* WhatsApp Confirmation Button */}
              <WhatsAppButton
                productName={orderData.packageType || "CleanMax Pro"}
                className="w-full p-6 h-auto text-lg"
              />

              {/* Phone Contact for Inquiries */}
              <Button
                onClick={() => window.open("tel:+2347030151874", "_self")}
                className="w-full bg-brand-600 hover:bg-brand-700 text-white p-6 h-auto"
              >
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-6 h-6" />
                  <div className="text-center">
                    <div className="font-medium text-lg">Call for Support</div>
                    <div className="text-sm text-brand-100">07030151874</div>
                    <div className="text-xs text-brand-200">
                      Questions & Inquiries
                    </div>
                  </div>
                </div>
              </Button>
            </div>

            {/* Important Reminders */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-medium text-yellow-800 mb-2">
                Important Reminders:
              </h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>
                  • Keep your phone number accessible for delivery coordination
                </li>
                <li>• Ensure someone is available to receive the package</li>
                <li>• Have your payment ready (Cash, Bank Transfer, or POS)</li>
                <li>• Contact us immediately if your details change</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Additional Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="outline" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Button>
          </Link>

          <Button
            onClick={() => {
              const shareText = `I just ordered CleanMax Pro Catalytic Converter Cleaner! 🚗✨ Reduces emissions by 50% and improves fuel efficiency. Check it out!`;
              if (navigator.share) {
                navigator.share({
                  title: "CleanMax Pro Order",
                  text: shareText,
                  url: window.location.origin,
                });
              } else {
                navigator.clipboard.writeText(
                  `${shareText} ${window.location.origin}`,
                );
                alert("Link copied to clipboard!");
              }
            }}
            variant="outline"
            className="flex items-center space-x-2 border-green-200 hover:bg-green-50"
          >
            <Gift className="w-4 h-4" />
            <span>Share with Friends</span>
          </Button>
        </div>

        {/* Trust Badge */}
        <div className="text-center">
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-800 px-4 py-2"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Secure Order Processing
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
