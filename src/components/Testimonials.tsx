
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "AcSalerate has been a game-changer. Our team's productivity and deal velocity have increased noticeably thanks to the real-time insights and voice-enabled CRM updates.",
      author: "Mark Johnson",
      position: "Sales Director, TechSphere Solutions",
      avatar: "bg-cosmic-light/30"
    },
    {
      quote: "This tool is a lifesaver. It takes the tedious work out of selling by unifying everything I need in one workspace, so I can focus on building relationships and closing deals.",
      author: "Lisa Chen",
      position: "Senior Account Executive, InnovateCo",
      avatar: "bg-cosmic-light/20"
    },
    {
      quote: "With AcSalerate, we finally have clear visibility into our sales pipeline. It's a strategic partner that gives us the clarity we need to hit our numbers every quarter.",
      author: "David Rodriguez",
      position: "Sales Manager, Global Dynamics Inc.",
      avatar: "bg-cosmic-light/40"
    }
  ];
  
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-card relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            What Our Users Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from sales professionals who've transformed their workflow with AcSalerate
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-border bg-background/80 backdrop-blur-sm hover:border-border/60 transition-all duration-300"
            >
              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary inline-block mr-1">★</span>
                ))}
              </div>
              <p className="text-lg mb-8 text-foreground/90 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className={`h-12 w-12 rounded-full ${testimonial.avatar} bg-muted`}></div>
                <div>
                  <h4 className="font-medium text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
