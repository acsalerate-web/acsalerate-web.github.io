import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-full py-12 md:py-16 px-6 md:px-12 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            About AcSalerate
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-primary">Mission Statement</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to empower every sales professional by eliminating the friction of administrative tasks and information overload, allowing them to focus on the human connections and strategic conversations that win deals.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-primary">Vision Statement</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create a future where AI is not a replacement for human talent, but its most powerful co-pilot, making sales a more intelligent, intuitive, and rewarding profession.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;