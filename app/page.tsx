"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Target,
  Users,
  TrendingUp,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react"

export default function LandingPage() {
  // Function to open Tally form
  const openTallyForm = () => {
    window.open('https://tally.so/r/wagRoy', '_blank')
  }

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Smart Customer Discovery",
      description:
        "AI agents analyze millions of data points to identify your ideal customers across multiple channels",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Precision Targeting",
      description: "Get laser-focused leads that match your exact customer profile with 95% accuracy",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Revenue Optimization",
      description: "Increase conversion rates by 3x with customers who are ready to buy your product",
      color: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-Time Insights",
      description: "Get instant notifications when high-value prospects show buying intent signals",
      color: "bg-gradient-to-br from-yellow-500 to-orange-500",
    },
  ]

  const benefits = [
    "Find customers 10x faster than traditional methods",
    "Reduce customer acquisition costs by 70%",
    "Increase sales team efficiency by 4x",
    "Access to 1M+ verified business contacts",
    "24/7 AI agents working for you",
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Sales, TechFlow",
      content:
        "Thumos AI found us 200 qualified leads in the first week. Our sales team has never been more productive.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder, GrowthLab",
      content: "The AI agents are like having a team of expert researchers working 24/7. Game-changing technology.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "CMO, DataVault",
      content: "We closed 3 enterprise deals in our first month using Thumos AI. The ROI is incredible.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="border-b-4 border-black bg-white/40 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl border-2 border-black flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight">THUMOS AI</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-2 border-black rounded-xl px-4 py-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            🚀 Built for you
          </Badge>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            AI AGENTS THAT FIND YOUR{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              BEST CUSTOMERS
            </span>
          </h1>

          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-gray-700 font-medium">
            Stop wasting time on cold outreach. Our AI agents analyze millions of data points to find customers who are
            ready to buy from you right now.
          </p>

          {/* Waitlist Button */}
          <div className="max-w-md mx-auto mb-12">
            <Card className="border-4 border-black rounded-xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
              <div className="text-center">
                <Button
                  onClick={openTallyForm}
                  className="w-full py-6 bg-black hover:bg-black/80 text-white text-lg rounded-xl border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  Join Private Beta
                </Button>
                
              </div>
                <p className="text-sm text-gray-500 text-center mt-4">Join 2,847 founders already on the waitlist</p>
            </Card>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-4 border-black rounded-xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
              <div className="text-3xl font-black text-purple-600 mb-2">10x</div>
              <div className="font-bold">Faster Customer Discovery</div>
            </Card>
            <Card className="border-4 border-black rounded-xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
              <div className="text-3xl font-black text-blue-600 mb-2">100%</div>
              <div className="font-bold">Verified Leads</div>
            </Card>
            <Card className="border-4 border-black rounded-xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
              <div className="text-3xl font-black text-green-600 mb-2">3x</div>
              <div className="font-bold">Higher Conversion Rates</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              HOW OUR AI AGENTS{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                WORK FOR YOU
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our AI agents work 24/7 to identify, analyze, and deliver your perfect customers directly to your sales
              team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-4 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-transform"
              >
                <div className={`p-6 text-white ${feature.color}`}>
                  {feature.icon}
                  <h3 className="text-xl font-bold mt-4">{feature.title}</h3>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black mb-6">
                STOP CHASING{" "}
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  COLD LEADS
                </span>
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Traditional lead generation is broken. Our AI agents find customers who are already showing buying
                intent for products like yours.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="font-medium text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

    
            </div>

            <div className="relative">
              <Card className="border-4 border-black rounded-xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-bold">AI Agent Active</span>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-5 w-5" />
                        <span className="font-bold">Found 47 new prospects</span>
                      </div>
                      <p className="text-sm opacity-90">SaaS companies with 50-200 employees showing buying intent</p>
                    </div>

                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="h-5 w-5" />
                        <span className="font-bold">High-intent lead detected</span>
                      </div>
                      <p className="text-sm opacity-90">TechCorp Inc. - Downloaded pricing guide 3x this week</p>
                    </div>

                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-5 w-5" />
                        <span className="font-bold">Lead verified & enriched</span>
                      </div>
                      <p className="text-sm opacity-90">Contact info validated, company data updated</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              WHAT PEOPLE ARE{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                SAYING
              </span>
            </h2>
            <p className="text-xl text-gray-700">
              Join thousands of businesses who are already seeing incredible results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-4 border-black rounded-xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-4 border-black rounded-xl p-8 sm:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-gradient-to-br from-purple-500 to-pink-500 text-white">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">READY TO FIND YOUR BEST CUSTOMERS?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the waitlist and be among the first to experience the future of customer discovery.
            </p>

            <div className="max-w-md mx-auto">
              <Button
                onClick={openTallyForm}
                className="h-14 px-8 bg-black hover:bg-black/80 text-white rounded-xl border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-lg w-full py-6"
              >
                Join Waitlist
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-white/40 backdrop-blur-md py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg border-2 border-black flex items-center justify-center">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-black">THUMOS AI</span>
          </div>
          <p className="text-gray-600 mb-4">AI agents that find your best customers</p>
          <p className="text-sm text-gray-500">© 2024 Thumos AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
