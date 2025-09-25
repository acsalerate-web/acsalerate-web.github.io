
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Brain, Calendar, User, AlertTriangle, Database, BarChart3 } from "lucide-react";

const Features = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  
  const features = [
    {
      title: "Real-time Insights",
      description: "Address client objections and product questions quickly",
      expandedDescription: "Get instant access to relevant insights across your entire sales ecosystem. Address client objections with confidence using AI-powered research that pulls from emails, CRM data, and past interactions. Never be caught off guard in client conversations again.",
      icon: (
        <Brain size={24} className="text-primary" />
      )
    },
    {
      title: "Smart Meeting Prep",
      description: "For meetings with instant research and past interaction context",
      expandedDescription: "Prepare for every meeting with comprehensive context about your prospects. Our AI analyzes past interactions, email threads, meeting notes, and CRM data to provide you with talking points, potential objections, and personalized insights before every call.",
      icon: (
        <Calendar size={24} className="text-primary" />
      )
    },
    {
      title: "Executive Assistant",
      description: "Stay organized and ensure follow-ups",
      expandedDescription: "Never miss a follow-up again. Our AI assistant tracks all your interactions, schedules reminders, and suggests next best actions. Stay on top of your entire pipeline with intelligent task prioritization and automated follow-up suggestions.",
      icon: (
        <User size={24} className="text-primary" />
      )
    },
    {
      title: "Spots Risk",
      description: "Focus on the highest value actions recommended every day",
      expandedDescription: "Identify at-risk deals before they slip away. Our AI analyzes communication patterns, engagement metrics, and deal progression to flag potential risks and recommend high-impact actions to keep deals on track.",
      icon: (
        <AlertTriangle size={24} className="text-primary" />
      )
    },
    {
      title: "Auto Data Entry",
      description: "Just ask to hear answers based on the apps you use daily",
      expandedDescription: "Eliminate manual data entry forever. Our AI automatically captures and updates information from your emails, calls, Slack messages, and meetings. Ask questions and get answers from all your connected applications instantly.",
      icon: (
        <Database size={24} className="text-primary" />
      )
    },
    {
      title: "Performance Analytics",
      description: "Track your sales performance and identify improvement opportunities",
      expandedDescription: "Get detailed insights into your sales performance with AI-powered analytics. Track conversion rates, identify bottlenecks in your pipeline, and discover what strategies work best for different types of prospects.",
      icon: (
        <BarChart3 size={24} className="text-primary" />
      )
    }
  ];
  
  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };
  
  return (
    <section id="features" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Focus. Elevate. Close.
          </h2>
          <p className="text-muted-foreground text-lg">
            Identify the highest value actions everyday. Prepare for customer meetings with instant insights across emails, meeting notes, Slack messages, and CRM. Increase win rates by enhanced personalization. Be 10X more productive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Collapsible
              key={index}
              open={openFeature === index}
              onOpenChange={() => toggleFeature(index)}
              className={`rounded-xl border ${openFeature === index ? 'border-border' : 'border-border/50'} bg-card transition-all duration-300 hover:border-border`}
            >
              <CollapsibleTrigger className="w-full text-left p-6 flex flex-col">
                 <div className="flex justify-between items-start">
                   <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-6">
                     {feature.icon}
                   </div>
                   <ChevronDown
                     className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                       openFeature === index ? 'rotate-180' : ''
                     }`}
                   />
                 </div>
                 <h3 className="text-xl font-medium tracking-tighter mb-3">{feature.title}</h3>
                 <p className="text-muted-foreground">{feature.description}</p>
              </CollapsibleTrigger>
               <CollapsibleContent className="px-6 pb-6 pt-2">
                 <div className="pt-3 border-t border-border">
                   <p className="text-muted-foreground">{feature.expandedDescription}</p>
                   <div className="mt-4 flex justify-end">
                     <button className="text-primary hover:text-primary/80 text-sm font-medium">
                       Learn more →
                     </button>
                   </div>
                 </div>
               </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
