import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, CheckCircle } from "lucide-react";
import { trackButtonClick } from "@/lib/tracking";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Open Your Fuel Tank",
      description: "Simply unscrew your fuel tank cap",
    },
    {
      number: "2",
      title: "Remove Seal",
      description: "Peel off the protective aluminum seal",
    },
    {
      number: "3",
      title: "Pour Into Tank",
      description: "Add the entire contents to your fuel tank",
    },
    {
      number: "4",
      title: "Fill Up With Fuel",
      description: "Top up your tank and drive normally",
    },
  ];

  const scrollToOrder = () => {
    const element = document.getElementById("order-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-4 py-2 mb-4"
          >
            <Zap className="w-4 h-4 mr-2" />
            Simple Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How to Use{" "}
            <span className="bg-gradient-to-r from-brand-600 to-blue-600 bg-clip-text text-transparent">
              CleanMax Pro
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our simple 4-step process takes just 15 minutes. No special tools or
            technical knowledge required.
          </p>
        </div>

        {/* Main Usage Image & Steps Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Usage Instructions Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-white to-gray-100 rounded-3xl p-4 shadow-2xl">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://i.imgur.com/XSJGLtG.png"
                  alt="4-step usage instructions for CleanMax Pro engine cleaner"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-brand-600 to-blue-600 text-white rounded-full px-6 py-2 shadow-lg">
              <div className="text-sm font-bold">Just 15 Minutes</div>
            </div>
          </div>

          {/* Steps Breakdown */}
          <div className="space-y-6 pt-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group flex gap-4 p-4 rounded-xl bg-white border-2 border-gray-100 hover:border-brand-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-blue-500 text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}

            {/* Key Benefits */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-100 mt-8">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                What Happens Next
              </h4>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span>
                    Immediate cleaning action begins as you drive normally
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span>
                    Deep carbon deposit removal from catalytic converter and
                    fuel injectors
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span>
                    Within 2-3 tanks, you'll notice improved acceleration and
                    fuel economy
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span>Results continue improving over subsequent driving</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Before & After Comparison */}
        <div className="mt-20 bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-blue-500/20" />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Real Results You Can See
            </h3>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Before/After Info */}
              <div className="space-y-4">
                <div className="bg-red-500/20 border border-red-400/50 rounded-xl p-6">
                  <h4 className="text-red-200 font-bold mb-3">
                    ❌ Before CleanMax Pro
                  </h4>
                  <ul className="space-y-2 text-red-100 text-sm">
                    <li>• Carbon buildup in engine</li>
                    <li>• Clogged catalytic converter</li>
                    <li>• Poor fuel economy</li>
                    <li>• Sluggish acceleration</li>
                    <li>• High emissions</li>
                    <li>• Service warning lights</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-green-500/20 border border-green-400/50 rounded-xl p-6">
                  <h4 className="text-green-200 font-bold mb-3">
                    ✓ After CleanMax Pro
                  </h4>
                  <ul className="space-y-2 text-green-100 text-sm">
                    <li>• Deep clean engine components</li>
                    <li>• Clear catalytic converter</li>
                    <li>• 25% better fuel efficiency</li>
                    <li>• Smooth, responsive acceleration</li>
                    <li>• 50% emission reduction</li>
                    <li>• Warning lights clear</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Product Showcase Image */}
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/20">
                <img
                  src="https://i.imgur.com/kyCL4Ag.png"
                  alt="CleanMax Pro before and after engine cleaning results"
                  className="w-full h-auto object-cover rounded-xl shadow-2xl"
                />
              </div>
              <p className="text-center text-gray-300 text-sm mt-4">
                See the dramatic difference in cleaning power and results
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            onClick={() => {
              trackButtonClick("order_now_how_it_works", "how_it_works_section");
              scrollToOrder();
            }}
            className="bg-gradient-to-r from-brand-600 to-green-600 hover:from-brand-700 hover:to-green-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Ready to Transform Your Engine? Order Now
          </Button>
          <p className="text-gray-600 mt-4">
            Join thousands of satisfied customers enjoying better performance
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
