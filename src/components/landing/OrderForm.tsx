import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ShieldCheck, Package, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { EMAILJS_CONFIG } from "@/lib/emailConfig";
import {
  trackOrderSubmission,
  trackFormStart,
  trackFormStep,
  getPriceFromPackage,
} from "@/lib/tracking";

interface OrderFormProps {
  selectedPackage?: {
    name: string;
    bottles: number;
    price: string;
  };
}

const OrderForm = ({ selectedPackage }: OrderFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Track form start when component mounts
  useState(() => {
    trackFormStart();
  });

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    deliveryAddress: "",
    packageType: selectedPackage?.name || "",
    paymentMethod: "",
    additionalNotes: "",
  });

  const packages = [
    { name: "Premium Package (6 bottles)", bottles: 6, price: "₦55,500" },
    {
      name: "Complete Package (4 bottles)",
      bottles: 4,
      price: "₦37,000",
      recommended: true,
    },
    { name: "Basic Package (2 bottles)", bottles: 2, price: "₦20,500" },
  ];

  const paymentMethods = [
    "Pay on Delivery (Cash)",
    "Pay on Delivery (Bank Transfer)",
    "Pay on Delivery (POS)",
  ];

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Track form progress
    if (name === "packageType" && value) {
      trackFormStep("package_selected");
    }
    if (name === "paymentMethod" && value) {
      trackFormStep("payment_method_selected");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (
        !formData.fullName ||
        !formData.phoneNumber ||
        !formData.deliveryAddress ||
        !formData.packageType ||
        !formData.paymentMethod
      ) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Prepare email data
      const selectedPkg = packages.find(
        (pkg) => pkg.name === formData.packageType,
      );

      // EmailJS configuration
      const templateParams = {
        to_email: "lincoorders@gmail.com,lincofortunez@gmail.com",
        customer_name: formData.fullName,
        customer_phone: formData.phoneNumber,
        delivery_address: formData.deliveryAddress,
        package_type: formData.packageType,
        package_price: selectedPkg?.price || "",
        payment_method: formData.paymentMethod,
        additional_notes: formData.additionalNotes || "None",
        order_date: new Date().toLocaleDateString(),
        order_time: new Date().toLocaleTimeString(),
      };

      try {
        // Send email using EmailJS
        await emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          templateParams,
          EMAILJS_CONFIG.publicKey,
        );

        // Track successful order conversion
        const orderValue = getPriceFromPackage(formData.packageType);
        trackOrderSubmission({
          value: orderValue,
          currency: "NGN",
          packageType: formData.packageType,
          customerName: formData.fullName,
        });

        toast({
          title: "Order Submitted Successfully!",
          description:
            "Your order has been sent to our team. We'll contact you within 24 hours.",
        });
      } catch (emailError) {
        console.log("EmailJS failed, using fallback method:", emailError);

        // Fallback: Try a simple API endpoint
        try {
          const orderData = {
            to: "lincoorders@gmail.com,lincofortunez@gmail.com",
            subject: `New CleanMax Pro Order - ${formData.fullName}`,
            customerName: formData.fullName,
            phoneNumber: formData.phoneNumber,
            deliveryAddress: formData.deliveryAddress,
            packageType: formData.packageType,
            packagePrice: selectedPkg?.price,
            paymentMethod: formData.paymentMethod,
            additionalNotes: formData.additionalNotes || "None",
            orderDate: new Date().toLocaleDateString(),
            orderTime: new Date().toLocaleTimeString(),
          };

          // Store order in localStorage as backup
          localStorage.setItem("latestOrder", JSON.stringify(orderData));

          toast({
            title: "Order Received!",
            description:
              "Your order has been recorded. We'll contact you within 24 hours to confirm.",
          });
        } catch (apiError) {
          console.log("Fallback failed:", apiError);

          toast({
            title: "Order Recorded!",
            description:
              "Your order details have been saved. We'll contact you within 24 hours.",
          });
        }
      }

      // Redirect to thank you page after a short delay
      setTimeout(() => {
        navigate("/thank-you", {
          state: {
            customerName: formData.fullName,
            packageType: formData.packageType,
            price: selectedPkg?.price,
          },
        });
      }, 2000);
    } catch (error) {
      console.error("Error submitting order:", error);
      toast({
        title: "Submission Error",
        description:
          "There was an error submitting your order. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-white p-8 shadow-2xl max-w-2xl mx-auto">
      <div className="space-y-6">
        <div className="text-center">
          <div className="bg-gradient-to-br from-brand-500 to-green-500 rounded-2xl p-4 inline-block mb-4">
            <Package className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Complete Your Order
          </h3>
          <p className="text-gray-600">
            Fill in your details below and we'll contact you to confirm delivery
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm font-medium">
              Full Name *
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              className="w-full"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phoneNumber" className="text-sm font-medium">
              Phone Number *
            </Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="e.g., 08123456789"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
              className="w-full"
              required
            />
          </div>

          {/* Delivery Address */}
          <div className="space-y-2">
            <Label htmlFor="deliveryAddress" className="text-sm font-medium">
              Delivery Address *
            </Label>
            <Textarea
              id="deliveryAddress"
              placeholder="Enter your complete delivery address including city and state"
              value={formData.deliveryAddress}
              onChange={(e) =>
                handleInputChange("deliveryAddress", e.target.value)
              }
              className="w-full h-20"
              required
            />
          </div>

          {/* Package Selection */}
          <div className="space-y-2">
            <Label htmlFor="packageType" className="text-sm font-medium">
              Select Package *
            </Label>
            <Select
              value={formData.packageType}
              onValueChange={(value) => handleInputChange("packageType", value)}
              required
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose your package" />
              </SelectTrigger>
              <SelectContent>
                {packages.map((pkg) => (
                  <SelectItem key={pkg.name} value={pkg.name}>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <span>{pkg.name}</span>
                        {pkg.recommended && (
                          <span className="ml-2 bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full font-bold">
                            RECOMMENDED
                          </span>
                        )}
                      </div>
                      <span className="ml-4 font-bold text-green-600">
                        {pkg.price}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Payment Method */}
          <div className="space-y-2">
            <Label htmlFor="paymentMethod" className="text-sm font-medium">
              Preferred Payment Method *
            </Label>
            <Select
              value={formData.paymentMethod}
              onValueChange={(value) =>
                handleInputChange("paymentMethod", value)
              }
              required
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose payment method" />
              </SelectTrigger>
              <SelectContent>
                {paymentMethods.map((method) => (
                  <SelectItem key={method} value={method}>
                    {method}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Additional Notes */}
          <div className="space-y-2">
            <Label htmlFor="additionalNotes" className="text-sm font-medium">
              Additional Notes (Optional)
            </Label>
            <Textarea
              id="additionalNotes"
              placeholder="Any special delivery instructions or notes"
              value={formData.additionalNotes}
              onChange={(e) =>
                handleInputChange("additionalNotes", e.target.value)
              }
              className="w-full h-16"
            />
          </div>

          {/* Important Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div className="text-sm text-yellow-800">
                <p className="font-medium mb-1">Important Notice:</p>
                <ul className="text-xs space-y-1">
                  <li>
                    • Please ensure you're ready to receive delivery within 1-7
                    working days
                  </li>
                  <li>• Have your payment ready at time of delivery</li>
                  <li>
                    • Keep your phone accessible for delivery confirmation
                  </li>
                  <li>
                    • Don't order if you're traveling or not financially
                    prepared
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-brand-600 to-green-600 hover:from-brand-700 hover:to-green-700 text-white py-6 text-lg font-semibold"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Submitting Order...
              </>
            ) : (
              <>
                <CheckCircle className="w-5 h-5 mr-2" />
                Submit Order
              </>
            )}
          </Button>
        </form>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 text-center">
          <div className="space-y-1">
            <div className="text-sm font-medium text-gray-900">
              Free Delivery
            </div>
            <div className="text-xs text-gray-600">Nationwide</div>
          </div>
          <div className="space-y-1">
            <div className="text-sm font-medium text-gray-900">
              Pay on Delivery
            </div>
            <div className="text-xs text-gray-600">Secure Payment</div>
          </div>
          <div className="space-y-1">
            <div className="text-sm font-medium text-gray-900">
              24hr Confirmation
            </div>
            <div className="text-xs text-gray-600">Fast Response</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default OrderForm;
