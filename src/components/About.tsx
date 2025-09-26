import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-full py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            About AcSalerate
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Mission Statement</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empower sales teams by automating admin work, so they can focus on building relationships and closing deals.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Vision Statement</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI as your sales co-pilot - enhancing human potential to make selling smarter and more rewarding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;