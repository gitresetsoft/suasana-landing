
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Volume2, Play, Users, MapPin, Clock, CheckCircle } from "lucide-react";
import WaitlistDialog from "@/components/WaitlistDialog";

const Index = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);

  const soundscapes = [
    {
      id: 1,
      title: "Petaling Street Morning",
      description: "Bustling market sounds, vendors calling, footsteps on old tiles",
      duration: "45 min",
      listeners: "2.1k",
      image: "🏮"
    },
    {
      id: 2,
      title: "KTM Komuter Journey",
      description: "Rhythmic train sounds, announcements, gentle swaying",
      duration: "30 min",
      listeners: "1.8k",
      image: "🚊"
    },
    {
      id: 3,
      title: "Mamak Evening",
      description: "Sizzling woks, ice clinking, conversations in multiple languages",
      duration: "60 min",
      listeners: "3.2k",
      image: "🍜"
    },
    {
      id: 4,
      title: "Shopping Mall Ambience",
      description: "Air conditioning hum, escalator sounds, distant music",
      duration: "40 min",
      listeners: "1.5k",
      image: "🏬"
    },
    {
      id: 5,
      title: "Kampung Morning",
      description: "Roosters crowing, palm leaves rustling, distant mosque calls",
      duration: "50 min",
      listeners: "2.7k",
      image: "🌴"
    },
    {
      id: 6,
      title: "Kuala Lumpur Traffic",
      description: "Gentle honking, motorbike engines, city rhythm",
      duration: "35 min",
      listeners: "1.9k",
      image: "🚗"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-amber-400/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
                Suasana
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                Immerse yourself in the authentic sounds of Malaysia. From bustling street markets to peaceful kampung mornings.
              </p>
            </div>
            
            {/* Sound Wave Animation */}
            <div className="flex justify-center items-center space-x-2 mb-12">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-t from-orange-400 to-amber-400 rounded-full animate-pulse`}
                  style={{
                    width: '4px',
                    height: `${Math.random() * 40 + 20}px`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '1.5s'
                  }}
                ></div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => setShowWaitlist(true)}
              >
                <Users className="mr-2 h-5 w-5" />
                Join the Waitlist
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-orange-300 text-orange-700 hover:bg-orange-50 px-8 py-3 text-lg transition-all duration-300"
              >
                <Play className="mr-2 h-4 w-4" />
                Preview Sounds
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Soundscapes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Soundscapes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the diverse audio landscape of Malaysia, from urban energy to tranquil nature
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {soundscapes.map((sound, index) => (
            <Card 
              key={sound.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-4 text-center">{sound.image}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{sound.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{sound.description}</p>
                
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {sound.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {sound.listeners}
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-500 hover:to-amber-500 text-white transition-all duration-300"
                  size="sm"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Preview
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Coming Soon</h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed">
            We're crafting the perfect audio experience that captures the heart and soul of Malaysia. 
            Be the first to experience Suasana when we launch.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Volume2 className="h-12 w-12 text-orange-100 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">High-Quality Audio</h3>
              <p className="text-orange-100 text-sm">Professionally recorded ambient sounds</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-orange-100 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Authentic Locations</h3>
              <p className="text-orange-100 text-sm">Recorded across Malaysia's diverse landscapes</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-orange-100 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Ad-Free Experience</h3>
              <p className="text-orange-100 text-sm">Uninterrupted ambient soundscapes</p>
            </div>
          </div>

          <Button 
            size="lg" 
            variant="outline"
            className="mt-12 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg transition-all duration-300"
            onClick={() => setShowWaitlist(true)}
          >
            <Users className="mr-2 h-5 w-5" />
            Secure Your Spot
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Suasana</h3>
          <p className="text-gray-400 mb-6">The sounds of Malaysia, wherever you are.</p>
          <p className="text-gray-500 text-sm">© 2024 Suasana. Made with ❤️ in Malaysia.</p>
        </div>
      </footer>

      <WaitlistDialog open={showWaitlist} onOpenChange={setShowWaitlist} />
    </div>
  );
};

export default Index;
