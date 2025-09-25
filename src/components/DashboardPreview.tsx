
import React, { useState, useEffect, useRef } from 'react';
import { Search, Bell, ChevronDown, Play, Phone, Plus, MessageSquare, Calendar, TrendingUp, Users, BarChart3, Clock } from 'lucide-react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  ResponsiveContainer, 
  CartesianGrid, 
  Tooltip, 
  Area 
} from 'recharts';

const DashboardPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Recent Emails');
  const dashboardRef = useRef<HTMLDivElement>(null);

  // Sample data for charts
  const pipelineData = [
    { name: '9 AM', value: 240 },
    { name: '10 AM', value: 260 },
    { name: '11 AM', value: 280 },
    { name: '12 PM', value: 300 },
    { name: '1 PM', value: 290 },
    { name: '2 PM', value: 320 },
    { name: '3 PM', value: 340 },
  ];

  const focusData = [
    { name: 'Completed', value: 75 },
    { name: 'Remaining', value: 25 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = dashboardRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div ref={dashboardRef} className="relative w-full overflow-x-auto">
      <div 
        className={`relative rounded-xl overflow-hidden border bg-card shadow-2xl transition-all duration-1000 min-w-[90vw] md:min-w-[80vw] lg:min-w-[1200px] ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
          {/* Dashboard Header */}
          <div className="flex items-center justify-between p-4 border-b bg-card/80 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                <BarChart3 className="h-4 w-4 text-primary" />
              </div>
              <span className="text-foreground font-semibold text-lg">Sales Pipeline Dashboard</span>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search deals, contacts, activities..." 
                  className="w-80 h-9 pl-9 pr-4 bg-background border rounded-md text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              {/* User Info */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Bell className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full"></div>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:bg-accent rounded-md px-2 py-1 transition-colors">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xs text-primary font-medium">JS</span>
                  </div>
                  <span className="text-sm text-foreground font-medium">John Smith</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex min-h-[700px] bg-background">
            {/* Fixed Sidebar Navigation */}
            <div className="w-64 border-r bg-card/50 backdrop-blur-sm">
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
                  <BarChart3 className="h-4 w-4" />
                  <span className="text-sm font-medium">Dashboard</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground cursor-pointer transition-all">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">Pipeline</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground cursor-pointer transition-all">
                  <BarChart3 className="h-4 w-4" />
                  <span className="text-sm">Analytics</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground cursor-pointer transition-all">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">Team</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground cursor-pointer transition-all">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">Settings</span>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-6 overflow-auto bg-background">
              <div className="grid grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Today's Focus Card */}
                  <div className="bg-card border rounded-lg p-6 shadow-sm">
                    <div className="mb-6">
                      <h3 className="text-foreground font-semibold text-lg">Today's Focus</h3>
                    </div>
                    
                    <div className="flex items-center gap-6 mb-6">
                      <div className="relative w-24 h-24">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={focusData}
                              cx="50%"
                              cy="50%"
                              innerRadius={30}
                              outerRadius={42}
                              dataKey="value"
                            >
                              <Cell fill="hsl(var(--primary))" />
                              <Cell fill="hsl(var(--muted))" />
                            </Pie>
                          </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary">75%</span>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <p className="text-sm text-foreground font-medium mb-1">Daily Call Goal Progress</p>
                        <p className="text-xs text-muted-foreground mb-2">15 of 20 calls completed</p>
                        <p className="text-xs text-muted-foreground">Outbound Prospecting Campaign</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 hover:text-white transition-colors">
                        <Play className="h-3 w-3" />
                        Start Call
                      </button>
                      <button className="px-4 py-2 text-muted-foreground text-sm border rounded-md hover:bg-accent hover:text-foreground transition-colors">
                        View Prep
                      </button>
                    </div>
                  </div>

                  {/* Upcoming Meeting */}
                  <div className="bg-card border rounded-lg p-6 shadow-sm">
                    <div className="mb-6">
                      <h3 className="text-foreground font-semibold text-lg">Upcoming Meeting</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Peggy Rhode</p>
                          <p className="text-xs text-muted-foreground">Global Dynamics Inc.</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">Product demo and pricing discussion</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded">High Priority</span>
                        <span>$70k potential</span>
                        <span>Q4 Close</span>
                      </div>
                      <button className="w-full py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 hover:text-white transition-colors">
                        Join Meeting
                      </button>
                    </div>
                  </div>
                </div>

                {/* Middle Column */}
                <div className="space-y-6">
                  {/* Intelligent Pipeline Overview */}
                  <div className="bg-card border rounded-lg p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-foreground font-semibold text-lg">Intelligent Pipeline Overview</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2.5 py-1 rounded-full bg-muted text-foreground">This Week</span>
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                          <span className="text-sm text-muted-foreground">Revenue Forecast</span>
                        </div>
                        <span className="text-sm font-medium text-foreground">$284k this quarter</span>
                      </div>
                      
                      <div className="h-48 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={pipelineData} margin={{ top: 10, right: 0, left: 0, bottom: 5 }}>
                            <defs>
                              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.01}/>
                              </linearGradient>
                            </defs>
                            <XAxis 
                              dataKey="name"
                              axisLine={false}
                              tickLine={false}
                              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
                              tickMargin={8}
                            />
                            <YAxis 
                              axisLine={false}
                              tickLine={false}
                              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
                              tickFormatter={(value) => `$${value}`}
                              tickMargin={8}
                              width={40}
                            />
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted))" opacity={0.3} />
                            <Tooltip 
                              contentStyle={{
                                backgroundColor: 'hsl(var(--card))',
                                borderColor: 'hsl(var(--border))',
                                borderRadius: 'var(--radius)',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                              }}
                              labelStyle={{
                                color: 'hsl(var(--muted-foreground))',
                                fontSize: 12
                              }}
                              formatter={(value: number) => [`$${value}`, 'Revenue']}
                            />
                            <Area 
                              type="monotone" 
                              dataKey="value" 
                              stroke="hsl(var(--primary))" 
                              fillOpacity={1} 
                              fill="url(#colorValue)"
                              strokeWidth={2}
                            />
                            <Line 
                              type="monotone" 
                              dataKey="value" 
                              stroke="hsl(var(--primary))" 
                              strokeWidth={2}
                              dot={{
                                fill: 'hsl(var(--primary))',
                                stroke: 'hsl(var(--card))',
                                strokeWidth: 2,
                                r: 3,
                                style: { opacity: 0.8 }
                              }}
                              activeDot={{
                                r: 5,
                                stroke: 'hsl(var(--primary))',
                                strokeWidth: 2,
                                fill: 'hsl(var(--card))',
                                style: { filter: 'drop-shadow(0 0 2px rgba(0, 0, 0, 0.1))' }
                              }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-card border rounded-lg p-6 shadow-sm">
                    <h3 className="text-foreground font-semibold text-lg mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-3 gap-3">
                      <button className="flex flex-col items-center justify-center gap-2 p-3 border rounded-md text-sm hover:bg-accent hover:text-foreground transition-colors">
                        <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                          <Phone className="h-4 w-4 text-primary" />
                        </div>
                        <span>Log Call</span>
                      </button>
                      <button className="flex flex-col items-center justify-center gap-2 p-3 border rounded-md text-sm hover:bg-accent hover:text-foreground transition-colors">
                        <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                          <Plus className="h-4 w-4 text-primary" />
                        </div>
                        <span>Add Note</span>
                      </button>
                      <button className="flex flex-col items-center justify-center gap-2 p-3 border rounded-md text-sm hover:bg-accent hover:text-foreground transition-colors">
                        <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                          <Clock className="h-4 w-4 text-primary" />
                        </div>
                        <span>Set Reminder</span>
                      </button>
                    </div>
                  </div>

                  {/* Meeting Prep Workspace */}
                  <div className="bg-card border rounded-lg p-6 shadow-sm">
                    <div className="mb-6">
                      <h3 className="text-foreground font-semibold text-lg">Meeting Prep Workspace</h3>
                    </div>
                    
                    {/* Tabs */}
                    <div className="flex gap-1 mb-4 bg-muted p-1 rounded-lg">
                      {['Recent Emails', 'Talking Points', 'Company Intel'].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                            activeTab === tab 
                              ? 'bg-background text-foreground shadow-sm' 
                              : 'text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                    
                    <div className="space-y-4">
                      {activeTab === 'Recent Emails' && (
                        <div className="space-y-3">
                          <div className="p-3 border rounded-lg">
                            <p className="text-sm font-medium text-foreground mb-1">Re: Budget discussion</p>
                            <p className="text-xs text-muted-foreground">From Peggy Rhode • 2 hours ago</p>
                          </div>
                          <div className="p-3 border rounded-lg">
                            <p className="text-sm font-medium text-foreground mb-1">Pricing questions</p>
                            <p className="text-xs text-muted-foreground">From Global Dynamics • Yesterday</p>
                          </div>
                        </div>
                      )}
                      {activeTab === 'Talking Points' && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            <span className="text-sm text-foreground">ROI comparison with current solution</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            <span className="text-sm text-foreground">Implementation timeline discussion</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            <span className="text-sm text-foreground">Team training requirements</span>
                          </div>
                        </div>
                      )}
                      {activeTab === 'Company Intel' && (
                        <div className="space-y-3">
                          <div className="p-3 border rounded-lg">
                            <p className="text-sm font-medium text-foreground mb-1">Company Growth</p>
                            <p className="text-xs text-muted-foreground">25% revenue increase this year</p>
                          </div>
                          <div className="p-3 border rounded-lg">
                            <p className="text-sm font-medium text-foreground mb-1">Recent News</p>
                            <p className="text-xs text-muted-foreground">Expanded to 3 new markets</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Deal-Breaking Insights */}
                  <div className="bg-card border rounded-lg p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-foreground font-semibold text-lg">Deal-Breaking Insights</h3>
                      <span className="text-xs px-2 py-1 rounded bg-muted text-foreground">Action Required</span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-3 border rounded-lg bg-card">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mt-0.5">
                          <span className="text-xs text-foreground font-medium">!</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">Budget concerns identified</p>
                          <p className="text-xs text-muted-foreground">Competitor pricing mentioned in recent emails</p>
                        </div>
                        <MessageSquare className="h-4 w-4 text-muted-foreground cursor-pointer" />
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 border rounded-lg bg-card">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mt-0.5">
                          <span className="text-xs text-foreground font-medium">i</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">Decision timeline accelerated</p>
                          <p className="text-xs text-muted-foreground">Implementation needed by Q1 2024</p>
                        </div>
                        <Calendar className="h-4 w-4 text-muted-foreground cursor-pointer" />
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 border rounded-lg bg-card">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mt-0.5">
                          <span className="text-xs text-foreground font-medium">✓</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">Strong champion identified</p>
                          <p className="text-xs text-muted-foreground">IT Director actively promoting solution</p>
                        </div>
                        <Users className="h-4 w-4 text-muted-foreground cursor-pointer" />
                      </div>
                    </div>
                  </div>

                  {/* Team Activity Feed */}
                  <div className="bg-card border rounded-lg p-6 shadow-sm">
                    <div className="mb-6">
                      <h3 className="text-foreground font-semibold text-lg">Team Activity Feed</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-xs text-primary font-medium">MJ</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">Mark Johnson closed TechCorp deal</p>
                          <p className="text-xs text-muted-foreground">$85k ARR • Enterprise plan • 12 minutes ago</p>
                        </div>
                        <span className="text-xs text-muted-foreground">12m</span>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                          <span className="text-xs text-green-600 font-medium">LC</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">Lisa Chen booked demo</p>
                          <p className="text-xs text-muted-foreground">InnovateCo • 5 users • 28 minutes ago</p>
                        </div>
                        <span className="text-xs text-muted-foreground">28m</span>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <span className="text-xs text-blue-600 font-medium">DR</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">David Rodriguez sent proposal</p>
                          <p className="text-xs text-muted-foreground">StartUp Inc • Pro plan • 1 hour ago</p>
                        </div>
                        <span className="text-xs text-muted-foreground">1h</span>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                          <span className="text-xs text-purple-600 font-medium">SM</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">Sarah Miller updated pipeline</p>
                          <p className="text-xs text-muted-foreground">3 deals moved to negotiation • 2 hours ago</p>
                        </div>
                        <span className="text-xs text-muted-foreground">2h</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
