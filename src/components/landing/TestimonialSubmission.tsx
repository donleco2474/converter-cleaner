import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Shield } from "lucide-react";

const TestimonialSubmission = () => {
  const handleSendTestimonial = () => {
    const subject = encodeURIComponent("Testimonial for Herb Cutter");
    const mailtoLink = `mailto:lincomarket@gmail.com?subject=${subject}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header with emoji */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-100 rounded-full mb-4">
              <MessageSquare className="w-8 h-8 text-brand-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              🔧 Got Your Own Experience to Share?
            </h2>
          </div>

          {/* Main content */}
          <div className="space-y-6 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              We love hearing from our customers! If you've used this product, please send your honest feedback to{" "}
              <span className="font-medium text-brand-600">lincomarket@gmail.com</span> — or simply click the button below to share your testimonial.
            </p>

            <div className="flex items-start justify-center space-x-3 text-left max-w-2xl mx-auto">
              <Shield className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-600">
                ✅ We rotate these testimonials often to keep things fresh and genuine. Want to stay anonymous? Just let us know, and we'll keep your name private.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            onClick={handleSendTestimonial}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-5 h-5 mr-2" />
            🔘 Send Testimonial
          </Button>

          {/* Small disclaimer */}
          <p className="text-sm text-gray-500 mt-4">
            Your feedback helps other customers make informed decisions
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSubmission;
