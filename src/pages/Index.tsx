import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Testimonials from "@/components/landing/Testimonials";
import OrderSection from "@/components/landing/OrderSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Testimonials />
      <OrderSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-brand-400 to-green-400 bg-clip-text text-transparent">
                CleanMax Pro
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Revolutionary catalytic converter cleaner that transforms your
                vehicle's performance while protecting the environment. Join
                thousands of satisfied customers.
              </p>
              <div className="mt-6 space-y-2">
                <div className="text-sm text-gray-400">
                  📞 +234 812 345 6789
                </div>
                <div className="text-sm text-gray-400">
                  📧 info@cleanmaxpro.ng
                </div>
                <div className="text-sm text-gray-400">
                  🚚 Free Delivery Nationwide
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>How It Works</li>
                <li>Benefits</li>
                <li>Usage Instructions</li>
                <li>Safety Information</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Order Tracking</li>
                <li>Customer Service</li>
                <li>Returns & Refunds</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 CleanMax Pro. All rights reserved. | Made with ❤️ for
              Nigerian drivers
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
