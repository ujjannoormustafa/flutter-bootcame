import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star, Package, Layout, Globe } from "lucide-react";
import Image from "next/image";
import Slider from "@/components/slider/page"


export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="text-2xl font-bold">FlutterCamp</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-sm font-medium hover:text-gray-300">
            Curriculum
          </a>
          <a href="#instructor" className="text-sm font-medium hover:text-gray-300">
            About us
          </a>
          {/* <a href="#" className="text-sm font-medium hover:text-gray-300">
            Testimonials
          </a> */}
          <a href="#instructor" className="text-sm font-medium hover:text-gray-300">
            Contact us
          </a>
        </nav>
        <Button variant="outline" className="text-black border-white hover:bg-white hover:text-black">Enroll Now</Button>
      </header>

      <main className="flex-grow">
        <section className="py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))] opacity-20">
            {[...Array(400)].map((_, i) => (
              <div key={i} className="border-t border-l border-gray-700"></div>
            ))}
          </div>
          <div className="container mx-auto relative z-10">
            <h1 className="text-4xl font-bold mb-4">
              Master Flutter Development in 12 Weeks
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Join our intensive online bootcamp and become a proficient Flutter developer
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white mb-8">Start Your Journey</Button>
            <div className="flex justify-center items-center space-x-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm text-gray-300">4.9 (50+ reviews)</span>
            </div>
           
            <Slider/>
          </div>
        </section>


                
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What You'll Learn</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Package, title: "Dart Fundamentals", description: "Master the Dart programming language, the foundation of Flutter development." },
                { icon: Layout, title: "UI/UX Design", description: "Learn to create beautiful and responsive user interfaces with Flutter widgets." },
                { icon: Globe, title: "Cross-Platform Development", description: "Build apps for iOS, Android, and web with a single codebase." }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <feature.icon className="w-12 h-12 mb-4 text-blue-400" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <p className="mb-4 text-gray-300">
                      "The FlutterCamp bootcamp was an incredible experience. I went from a complete beginner to building my own apps in just 12 weeks!"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-600 rounded-full mr-4" />
                      <div>
                        <div className="font-semibold">Sarah Johnson</div>
                        <div className="text-sm text-gray-400">Junior Flutter Developer</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        <section className="py-20 " id='instructor'>
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Meet Your Instructor</h2>
            <div className="flex flex-col items-center">
              <Image
                src="/assets/ustad.jpg"
                alt="Noor Illahi Ujjan"
                width={200}
                height={200}
                className="rounded-full mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Noor Illahi Ujjan</h3>
              <p className="text-xl text-gray-300 mb-4">Senior Flutter Developer & Educator</p>
              <p className="max-w-2xl text-center mb-8 text-gray-400">
                With over 4 years of experience in mobile app development and Founder Of Flutter Sukkur Community,
                Noor is passionate about sharing his knowledge and helping students become proficient Flutter developers.
              </p>
              <Button variant="outline" className="border-white text-black hover:bg-gay-900 hover:text-black">Learn More About Noor</Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {[
                { question: "Do I need prior coding experience?", answer: "While some programming experience is helpful, our bootcamp is designed for beginners. We'll start with the basics of Dart and progressively move to more advanced Flutter concepts." },
                { question: "What if I miss a class?", answer: "All our sessions are recorded and made available to students. You can catch up on any missed classes at your own pace. We also offer one-on-one support to help you stay on track." },
                { question: "Is there a certificate of completion?", answer: "Yes, upon successfully completing the bootcamp and all required projects, you'll receive a certificate of completion. This can be a valuable addition to your portfolio when applying for Flutter development positions." }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`} className="border-b border-gray-700">
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-500">© All rights reserved 2024</p>
        </div>
      </footer>
    </div>
  );
}