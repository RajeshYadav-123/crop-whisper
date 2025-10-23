import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Droplets, Sun, Wind, Smartphone, Database, MapPin, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
          Farmer-Centric AgriTech
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          Climate-Resilient Crop Prediction
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          AI-powered crop predictions for Indian farmers. Get localized weather insights and recommendations via SMS in your language.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary-glow transition-all shadow-soft" onClick={() => window.location.href = '/access'}>
            <Smartphone className="mr-2 h-5 w-5" />
            Get SMS Updates
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" onClick={() => window.location.href = '/access'}>
            <Database className="mr-2 h-5 w-5" />
            View Dashboard
          </Button>
        </div>
      </header>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-border hover:shadow-soft transition-all">
            <CardHeader>
              <MapPin className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Location-Based</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Enter your farm coordinates to get hyper-local predictions tailored to your exact location.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-soft transition-all">
            <CardHeader>
              <Cloud className="h-10 w-10 text-accent mb-2" />
              <CardTitle>Weather Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Real-time weather data from Google Earth Engine and IMD for accurate forecasting.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-soft transition-all">
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-primary-glow mb-2" />
              <CardTitle>AI Predictions</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                TensorFlow-powered models analyze climate patterns to predict optimal crop choices.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-soft transition-all">
            <CardHeader>
              <Smartphone className="h-10 w-10 text-secondary mb-2" />
              <CardTitle>SMS Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Get predictions via SMS in Marathi, Punjabi, Hindi, or English - no internet needed!
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Weather Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-card to-muted/50 rounded-2xl p-8 md:p-12 border border-border shadow-soft">
          <h2 className="text-3xl font-bold mb-8 text-center">Real-Time Climate Data</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background/60 rounded-xl border border-border">
              <Sun className="h-12 w-12 text-yellow-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground">32°C</div>
              <div className="text-sm text-muted-foreground mt-1">Temperature</div>
            </div>
            <div className="text-center p-6 bg-background/60 rounded-xl border border-border">
              <Droplets className="h-12 w-12 text-blue-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground">65%</div>
              <div className="text-sm text-muted-foreground mt-1">Humidity</div>
            </div>
            <div className="text-center p-6 bg-background/60 rounded-xl border border-border">
              <Wind className="h-12 w-12 text-gray-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground">12 km/h</div>
              <div className="text-sm text-muted-foreground mt-1">Wind Speed</div>
            </div>
            <div className="text-center p-6 bg-background/60 rounded-xl border border-border">
              <Cloud className="h-12 w-12 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground">85 mm</div>
              <div className="text-sm text-muted-foreground mt-1">Rainfall (Month)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Regions */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Pilot Regions</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Maharashtra
              </CardTitle>
              <CardDescription>Kharif & Rabi Seasons</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Cotton, Soybean, Sugarcane
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  100+ farmers enrolled
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Marathi language support
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Punjab
              </CardTitle>
              <CardDescription>Wheat & Rice Focus</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Wheat, Rice, Maize
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  100+ farmers enrolled
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Punjabi language support
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Telangana
              </CardTitle>
              <CardDescription>Diverse Crop Portfolio</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Rice, Cotton, Turmeric
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  100+ farmers enrolled
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Telugu language support
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* API Documentation Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">API Endpoints</h2>
          <Card className="border-border">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <Badge className="bg-green-500 text-white">POST</Badge>
                  <code className="text-sm font-mono">/api/predict</code>
                  <span className="text-sm text-muted-foreground ml-auto">Get crop predictions</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <Badge className="bg-blue-500 text-white">GET</Badge>
                  <code className="text-sm font-mono">/api/farms</code>
                  <span className="text-sm text-muted-foreground ml-auto">List registered farms</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <Badge className="bg-blue-500 text-white">GET</Badge>
                  <code className="text-sm font-mono">/api/predictions</code>
                  <span className="text-sm text-muted-foreground ml-auto">View prediction history</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <Badge className="bg-green-500 text-white">POST</Badge>
                  <code className="text-sm font-mono">/webhook/sms</code>
                  <span className="text-sm text-muted-foreground ml-auto">Twilio SMS webhook</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Farming?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of farmers using AI-powered predictions to make climate-resilient decisions.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary-glow transition-all shadow-soft" onClick={() => window.location.href = '/access'}>
            Start Free Trial
          </Button>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-sm text-muted-foreground">
          <p>Powered by TensorFlow, Google Earth Engine, IMD Weather Data & Twilio</p>
          <p className="mt-2">Supporting Maharashtra, Punjab & Telangana farmers with multilingual SMS alerts</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
