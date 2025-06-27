'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Monitor,
  Users,
  TrendingUp,
  Search,
  MessageCircle,
  Home,
  ArrowLeft,
  Zap
} from 'lucide-react';

interface Service {
  icon: React.ElementType;
  name: string;
  color: string;
}

const NotFound = () => {
  const pathname = usePathname();
  const [glitchText, setGlitchText] = useState('404');
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const services: Service[] = [
    { icon: Monitor, name: 'Website Development', color: 'from-blue-500 to-cyan-500' },
    { icon: Users, name: 'Social Media Marketing', color: 'from-purple-500 to-pink-500' },
    { icon: TrendingUp, name: 'SEO Optimization', color: 'from-green-500 to-emerald-500' },
    { icon: Search, name: 'PPC Advertising', color: 'from-orange-500 to-red-500' },
    { icon: MessageCircle, name: 'Content Strategy', color: 'from-indigo-500 to-purple-500' }
  ];

  const glitchChars = ['4', '0', '4', '∂', 'Ø', '4', '●', '○', '4', '0', '4'];

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', pathname);

    const glitchInterval = setInterval(() => {
      const randomText = Array.from({ length: 3 }, () =>
        glitchChars[Math.floor(Math.random() * glitchChars.length)]
      ).join('');
      setGlitchText(randomText);

      setTimeout(() => setGlitchText('404'), 100);
    }, 2000);

    const serviceInterval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 1500);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(serviceInterval);
    };
  }, [pathname]);

  const currentService = services[currentServiceIndex];
  const CurrentIcon = currentService.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>


      {/* Main */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center">
          {/* Glitch Text */}
          <div className="relative mb-8">
            <h1
              className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-4 select-none"
              style={{
                textShadow: '0 0 30px rgba(139, 92, 246, 0.5)',
                filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))'
              }}
            >
              {glitchText}
            </h1>
            <div className="absolute inset-0 text-8xl md:text-9xl font-black text-red-500 opacity-20 animate-pulse mix-blend-multiply">
              404
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Oops! This page got lost in the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"> digital void</span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't worry! Even the best digital marketing campaigns sometimes take unexpected turns. Let's get you back on track.
          </p>

          {/* Rotating Card */}
          <Card className="bg-black/40 backdrop-blur-md border-purple-500/30 mb-8 max-w-md mx-auto transform transition-all duration-500 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${currentService.color} flex items-center justify-center`}>
                  <CurrentIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Meanwhile, check out our</h3>
              <p className={`text-lg font-medium bg-gradient-to-r ${currentService.color} bg-clip-text text-transparent`}>
                {currentService.name}
              </p>
            </CardContent>
          </Card>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Take Me Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start a Project
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { number: '2.8B+', label: 'Social Media Users', color: 'from-pink-500 to-rose-500' },
              { number: '8.5B', label: 'Daily Google Searches', color: 'from-blue-500 to-cyan-500' },
              { number: '4.2B', label: 'Email Users Worldwide', color: 'from-green-500 to-emerald-500' }
            ].map((stat, i) => (
              <Card key={i} className="bg-black/20 backdrop-blur-md border-gray-700/30 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-8 opacity-70">Error 404: Page not found, but opportunities are everywhere! 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
