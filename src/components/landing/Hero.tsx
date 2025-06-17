import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Gauge, Leaf } from "lucide-react";

const Hero = () => {
  const scrollToOrder = () => {
    const element = document.getElementById("order-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 min-h-screen flex items-center">
      {/* Background car image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.pexels.com/photos/3752194/pexels-photo-3752194.jpeg"
          alt="Luxury car background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-green-500/5" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-brand-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-green-400/20 to-brand-400/20 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800 hover:bg-green-200 px-4 py-2"
              >
                <Leaf className="w-4 h-4 mr-2" />
                Eco-Friendly Engine Solution
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Transform Your</span>
                <br />
                <span className="bg-gradient-to-r from-brand-600 to-green-600 bg-clip-text text-transparent">
                  Engine Performance
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Revolutionary catalytic converter cleaner that reduces emissions
                by up to 50%, improves fuel efficiency, and restores your
                engine's power - all without removal.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-lg p-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700">
                  50% Less Emissions
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-lg p-3">
                <Zap className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-medium text-gray-700">
                  Instant Results
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-lg p-3">
                <Gauge className="w-5 h-5 text-brand-500" />
                <span className="text-sm font-medium text-gray-700">
                  Better Fuel Economy
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToOrder}
                className="bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Order Now - ₦20,500
                <span className="ml-2 text-brand-200">2 Bottles</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-6 text-lg font-semibold border-2 hover:bg-gray-50"
              >
                Learn More
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">120ml</div>
                <div className="text-sm text-gray-600">Premium Formula</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">Safe</div>
                <div className="text-sm text-gray-600">All Vehicles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">Free</div>
                <div className="text-sm text-gray-600">Delivery</div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Visual */}
          <div
            className="relative animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative mx-auto max-w-md">
              {/* Product container with glow effect */}
              <div className="relative bg-gradient-to-br from-white to-gray-100 rounded-3xl p-8 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-green-500/10 rounded-3xl" />

                {/* Product bottle showcase */}
                <div className="relative z-10 bg-white rounded-2xl h-80 flex items-center justify-center shadow-lg p-8">
                  {/* Product bottle */}
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/31864989/pexels-photo-31864989.jpeg"
                      alt="CleanMax Pro Catalytic Converter Cleaner - Professional automotive treatment bottle"
                      className="h-64 w-auto object-contain rounded-lg shadow-md"
                    />
                    {/* Product overlay information */}
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-brand-600 to-green-600 text-white rounded-lg p-2 shadow-lg">
                      <div className="text-xs font-bold">120ml</div>
                    </div>
                  </div>

                  {/* Product details overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-brand-600/90 to-green-600/90 text-white rounded-lg p-3 backdrop-blur-sm">
                    <div className="text-lg font-bold">CleanMax Pro</div>
                    <div className="text-sm opacity-90">
                      Catalytic Converter Cleaner
                    </div>
                    <div className="text-xs mt-1 opacity-80">
                      Professional Formula • Made in Nigeria
                    </div>
                  </div>

                  {/* Quality badges */}
                  <div className="absolute top-4 right-4 space-y-2">
                    <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      50% Less Emissions
                    </div>
                    <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      25% Fuel Savings
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full p-3 shadow-lg animate-pulse">
                  <Leaf className="w-6 h-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white rounded-full p-3 shadow-lg animate-pulse">
                  <Gauge className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
