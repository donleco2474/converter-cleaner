import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Gauge,
  Leaf,
  Settings,
  Shield,
  Truck,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { trackButtonClick } from "@/lib/tracking";

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Deep Cleaning Action",
      description:
        "Removes harmful deposits without removing the catalytic converter. Prevents 'service engine' light activation.",
      highlight: "No Disassembly Required",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "50% Emission Reduction",
      description:
        "Dramatically lowers total hydrocarbon emissions, making your vehicle more environmentally friendly.",
      highlight: "Eco-Certified Results",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Enhanced Fuel Efficiency",
      description:
        "Improves fuel consumption and overall engine performance by cleaning fuel injection system and cylinders.",
      highlight: "Save Money on Gas",
      color: "from-brand-500 to-blue-500",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Comprehensive Cleaning",
      description:
        "Cleans oxygen sensors, fuel injectors, and cylinder heads in addition to the catalytic converter.",
      highlight: "All-in-One Solution",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Engine Protection",
      description:
        "Maintains proper fuel and exhaust flow, keeping your engine running cleaner and smoother.",
      highlight: "Reduces Maintenance",
      color: "from-gray-600 to-gray-800",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Easy Application",
      description:
        "Simply pour into fuel tank. Safe for gasoline, hybrid, and flex-fuel vehicles.",
      highlight: "User-Friendly",
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="bg-brand-100 text-brand-800 hover:bg-brand-200 px-4 py-2 mb-4"
          >
            <Settings className="w-4 h-4 mr-2" />
            Advanced Technology
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-brand-600 to-green-600 bg-clip-text text-transparent">
              CleanMax Pro?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced formula delivers measurable results that you'll notice
            immediately. Join thousands of satisfied customers who've
            transformed their vehicles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group p-6 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                <div>
                  <Badge variant="outline" className="text-xs mb-2">
                    {feature.highlight}
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="flex items-center text-brand-600 font-medium text-sm group-hover:text-brand-700 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Visual Benefits Section */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Engine Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/8478223/pexels-photo-8478223.jpeg"
              alt="Professional mechanic working on car engine"
              className="rounded-2xl shadow-2xl w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent rounded-2xl" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-bold mb-2">Professional Results</h3>
              <p className="text-sm text-gray-200">
                Deep engine cleaning without disassembly
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-brand-600 to-green-600 rounded-3xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">Proven Results</h3>
              <p className="text-brand-100">
                Real data from thousands of satisfied customers
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 text-center mb-6">
              <div>
                <div className="text-4xl font-bold mb-2">50%</div>
                <div className="text-brand-100">Emission Reduction</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">25%</div>
                <div className="text-brand-100">Fuel Savings</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15min</div>
                <div className="text-brand-100">Application Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-brand-100">Satisfaction Rate</div>
              </div>
            </div>

            {/* CTA in stats section */}
            <div className="text-center">
              <Button
                size="lg"
                onClick={() => {
                  trackButtonClick("order_now_stats", "features_section");
                  const element = document.getElementById("order-section");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white text-brand-600 hover:bg-gray-100 px-6 py-3 font-semibold"
              >
                Experience These Results
              </Button>
            </div>
          </div>
        </div>

        {/* Environmental Impact Section */}
        <div className="mt-20 relative">
          <img
            src="https://images.pexels.com/photos/4498091/pexels-photo-4498091.jpeg"
            alt="Environmental protection and recycling concept"
            className="w-full h-64 object-cover rounded-2xl shadow-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-blue-900/80 rounded-2xl flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl font-bold mb-4">
                Protect Our Environment
              </h3>
              <p className="text-xl text-green-100 max-w-2xl mb-6">
                Reduce harmful emissions and contribute to a cleaner planet with
                every drive
              </p>
              <Button
                size="lg"
                onClick={() => {
                  trackButtonClick("order_now_features", "features_section");
                  const element = document.getElementById("order-section");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white text-green-800 hover:bg-gray-100 px-6 py-3 font-semibold"
              >
                Start Reducing Emissions Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
