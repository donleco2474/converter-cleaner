import { useState } from "react";
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
  FileText,
} from "lucide-react";
import OrderForm from "./OrderForm";

const OrderSection = () => {

  const benefits = [
    "Reduces emissions by up to 50%",
    "Improves fuel efficiency immediately",
    "No engine disassembly required",
    "Safe for all gasoline vehicles",
    "Cleans entire fuel system",
    "Prevents costly repairs",
  ];

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

        {/* Pricing Packages */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {/* 2 Bottles Package */}
          <Card className="bg-white text-gray-900 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-brand-200">
            <div className="space-y-4">
              <div className="text-center">
                <Badge variant="outline" className="mb-3">
                  Starter Pack
                </Badge>
                <div className="bg-gradient-to-br from-brand-500 to-green-500 rounded-xl p-4 inline-block mb-3">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Basic Treatment</h3>
                <p className="text-gray-600 text-sm">
                  Perfect for single vehicle maintenance
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm border-b border-gray-200 pb-2">
                  <span className="font-medium">CleanMax Pro (120ml)</span>
                  <span className="text-gray-600">2 Bottles</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Free Delivery</span>
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-3">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">
                    ₦20,500
                  </div>
                  <div className="text-xs text-gray-600">Special Price</div>
                </div>
              </div>
            </div>
          </Card>

          {/* 4 Bottles Package - Most Popular */}
          <Card className="bg-gradient-to-br from-brand-500 to-green-500 text-white p-6 shadow-2xl transform scale-105 relative border-2 border-yellow-400">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-yellow-400 text-yellow-900 font-bold px-4 py-1">
                <Star className="w-3 h-3 mr-1" />
                MOST POPULAR
              </Badge>
            </div>

            <div className="space-y-4">
              <div className="text-center">
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white mb-3"
                >
                  Best Value
                </Badge>
                <div className="bg-white/20 rounded-xl p-4 inline-block mb-3">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Complete Treatment</h3>
                <p className="text-blue-100 text-sm">
                  2 treatment plans for optimal results
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm border-b border-white/20 pb-2">
                  <span className="font-medium">CleanMax Pro (120ml)</span>
                  <span className="text-blue-100">4 Bottles</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Free Priority Delivery</span>
                  <CheckCircle className="w-4 h-4 text-green-300" />
                </div>
              </div>

              <div className="bg-white/20 rounded-lg p-3">
                <div className="text-center">
                  <div className="text-sm line-through text-blue-200">
                    ₦41,000
                  </div>
                  <div className="text-2xl font-bold">₦37,000</div>
                  <div className="text-xs text-blue-100">Save ₦4,000!</div>
                </div>
              </div>
            </div>
          </Card>

          {/* 6 Bottles Package */}
          <Card className="bg-white text-gray-900 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-200">
            <div className="space-y-4">
              <div className="text-center">
                <Badge
                  variant="outline"
                  className="mb-3 border-green-500 text-green-700"
                >
                  Maximum Savings
                </Badge>
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl p-4 inline-block mb-3">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Premium Treatment</h3>
                <p className="text-gray-600 text-sm">
                  3 treatment plans for multiple vehicles
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm border-b border-gray-200 pb-2">
                  <span className="font-medium">CleanMax Pro (120ml)</span>
                  <span className="text-gray-600">6 Bottles</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Free Express Delivery</span>
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3">
                <div className="text-center">
                  <div className="text-sm line-through text-gray-500">
                    ₦61,500
                  </div>
                  <div className="text-lg font-bold text-green-600">
                    ₦55,500
                  </div>
                  <div className="text-xs text-gray-600">Save ₦6,000!</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-gray-50 to-blue-50 p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
              Every Package Includes:
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
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
          </Card>
        </div>

        {/* Order Form Section - Always Visible */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Complete Your Order
            </h3>
            <p className="text-gray-300">
              Fill out the form below and we'll contact you within 24 hours
            </p>
          </div>
          <OrderForm />
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4 pt-8 border-t border-gray-700 text-center">
            <div className="space-y-1">
              <Truck className="w-8 h-8 mx-auto mb-2 text-green-400" />
              <div className="text-sm font-medium text-white">
                Free Delivery
              </div>
              <div className="text-xs text-gray-300">Nationwide</div>
            </div>
            <div className="space-y-1">
              <CreditCard className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <div className="text-sm font-medium text-white">
                Pay on Delivery
              </div>
              <div className="text-xs text-gray-300">Secure Payment</div>
            </div>
            <div className="space-y-1">
              <Shield className="w-8 h-8 mx-auto mb-2 text-purple-400" />
              <div className="text-sm font-medium text-white">
                Satisfaction Guaranteed
              </div>
              <div className="text-xs text-gray-300">100% Secure</div>
            </div>
          </div>

          {/* Support Contact */}
          <div className="text-center pt-6">
            <p className="text-gray-300 text-sm mb-3">
              Have questions or need support?
            </p>
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5" />
                <div>
                  <div className="text-sm font-medium">
                    Call for Inquiries
                  </div>
                  <div className="text-lg font-bold text-white">
                    07030151874
                  </div>
                  <div className="text-xs text-gray-400">
                    Support & Questions Only
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-4 text-center mt-8">
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
    </section>
  );
};

export default OrderSection;
