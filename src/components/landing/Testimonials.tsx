import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, MapPin } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "James Kingston",
      location: "Uyo, Nigeria",
      rating: 5,
      text: "Wow!!! I noticed everything about my car has changed since I used this. Even the sound of the engine is a lot different and better.",
      verified: true,
      avatar: "JK",
      image:
        "https://images.pexels.com/photos/8715785/pexels-photo-8715785.jpeg",
      packagesOrdered: 2,
    },
    {
      name: "Sarah Adebayo",
      location: "Lagos, Nigeria",
      rating: 5,
      text: "My fuel consumption improved significantly after just one bottle. The engine runs so much smoother now and I'm saving money on gas!",
      verified: true,
      avatar: "SA",
      image:
        "https://images.pexels.com/photos/32552064/pexels-photo-32552064.jpeg",
      packagesOrdered: 4,
    },
    {
      name: "Michael Okafor",
      location: "Abuja, Nigeria",
      rating: 5,
      text: "I was skeptical at first, but this product really works. No more engine warning lights and my car feels like new again.",
      verified: true,
      avatar: "MO",
      image:
        "https://images.pexels.com/photos/9363545/pexels-photo-9363545.jpeg",
      packagesOrdered: 6,
    },
    {
      name: "Grace Emeka",
      location: "Port Harcourt, Nigeria",
      rating: 5,
      text: "Easy to use and immediate results. The delivery was fast and payment on delivery made it convenient. Highly recommend!",
      verified: true,
      avatar: "GE",
      image:
        "https://images.pexels.com/photos/28656263/pexels-photo-28656263.jpeg",
      packagesOrdered: 2,
    },
    {
      name: "David Yusuf",
      location: "Kano, Nigeria",
      rating: 5,
      text: "Been using this for 6 months now. My car's performance has never been better and emissions test passed with flying colors.",
      verified: true,
      avatar: "DY",
      image:
        "https://images.pexels.com/photos/32401765/pexels-photo-32401765.jpeg",
      packagesOrdered: 4,
    },
    {
      name: "Amina Hassan",
      location: "Kaduna, Nigeria",
      rating: 5,
      text: "Worth every naira! My hybrid car's engine efficiency improved dramatically. This product is a game-changer.",
      verified: true,
      avatar: "AH",
      image:
        "https://images.pexels.com/photos/7552373/pexels-photo-7552373.jpeg",
      packagesOrdered: 6,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-800 hover:bg-green-200 px-4 py-2 mb-4"
          >
            <Star className="w-4 h-4 mr-2" />
            Customer Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-brand-600 to-green-600 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers across Nigeria who have
            transformed their vehicles with CleanMax Pro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-lg animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Quote icon */}
                <div className="flex justify-between items-start">
                  <Quote className="w-8 h-8 text-brand-400 opacity-50" />
                  {testimonial.verified && (
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800 text-xs"
                    >
                      Verified Purchase
                    </Badge>
                  )}
                </div>

                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Customer info */}
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={`Happy customer ${testimonial.name}`}
                      className="w-12 h-12 rounded-full object-cover shadow-md"
                    />
                    {/* Packages ordered indicator */}
                    <div className="absolute -bottom-1 -right-1 bg-brand-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                      {testimonial.packagesOrdered}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-3 h-3 mr-1" />
                      {testimonial.location}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Ordered {testimonial.packagesOrdered} bottle
                      {testimonial.packagesOrdered > 1 ? "s" : ""}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Fuel Savings Visual */}
        <div className="mt-16 relative">
          <img
            src="https://images.pexels.com/photos/20500734/pexels-photo-20500734.jpeg"
            alt="Fuel pump showing fuel efficiency savings"
            className="w-full h-48 object-cover rounded-2xl shadow-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/80 to-green-900/80 rounded-2xl flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-2">Save Money Every Mile</h3>
              <p className="text-brand-100">
                Customers report up to 25% improvement in fuel efficiency
              </p>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-brand-600">5,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-600">98%</div>
              <div className="text-gray-600">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
