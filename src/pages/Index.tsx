import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Droplets, Sun, Wind, Smartphone, Database, MapPin, TrendingUp } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/lib/translations";

const Index = () => {
  const { language, setLanguage } = useLanguage();
  const t = getTranslation(language);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Language Switcher */}
      <div className="container mx-auto px-4 pt-6 flex justify-end">
        <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
      </div>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
          {t.hero.badge}
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary-glow transition-all shadow-soft" onClick={() => window.location.href = '/access'}>
            <Smartphone className="mr-2 h-5 w-5" />
            {t.hero.getSMS}
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" onClick={() => window.location.href = '/access'}>
            <Database className="mr-2 h-5 w-5" />
            {t.hero.viewDashboard}
          </Button>
        </div>
      </header>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">{t.howItWorks}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-border hover:shadow-soft transition-all">
            <CardHeader>
              <MapPin className="h-10 w-10 text-primary mb-2" />
              <CardTitle>{t.features.location.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {t.features.location.desc}
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-soft transition-all">
            <CardHeader>
              <Cloud className="h-10 w-10 text-accent mb-2" />
              <CardTitle>{t.features.weather.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {t.features.weather.desc}
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-soft transition-all">
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-primary-glow mb-2" />
              <CardTitle>{t.features.ai.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {t.features.ai.desc}
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-soft transition-all">
            <CardHeader>
              <Smartphone className="h-10 w-10 text-secondary mb-2" />
              <CardTitle>{t.features.sms.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {t.features.sms.desc}
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Weather Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-card to-muted/50 rounded-2xl p-8 md:p-12 border border-border shadow-soft">
          <h2 className="text-3xl font-bold mb-8 text-center">{t.climateData}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background/60 rounded-xl border border-border">
              <Sun className="h-12 w-12 text-yellow-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground">32°C</div>
              <div className="text-sm text-muted-foreground mt-1">{t.temperature}</div>
            </div>
            <div className="text-center p-6 bg-background/60 rounded-xl border border-border">
              <Droplets className="h-12 w-12 text-blue-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground">65%</div>
              <div className="text-sm text-muted-foreground mt-1">{t.humidity}</div>
            </div>
            <div className="text-center p-6 bg-background/60 rounded-xl border border-border">
              <Wind className="h-12 w-12 text-gray-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground">12 km/h</div>
              <div className="text-sm text-muted-foreground mt-1">{t.windSpeed}</div>
            </div>
            <div className="text-center p-6 bg-background/60 rounded-xl border border-border">
              <Cloud className="h-12 w-12 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground">85 mm</div>
              <div className="text-sm text-muted-foreground mt-1">{t.rainfall}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Regions */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">{t.pilotRegions}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
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

          <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Andhra Pradesh
              </CardTitle>
              <CardDescription>Coastal Agriculture</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Rice, Chilli, Tobacco
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

          <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Karnataka
              </CardTitle>
              <CardDescription>Multi-Climate Zones</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Coffee, Ragi, Sugarcane
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  100+ farmers enrolled
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Kannada language support
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Tamil Nadu
              </CardTitle>
              <CardDescription>Paddy Cultivation Leader</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Rice, Groundnut, Cotton
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  100+ farmers enrolled
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Tamil language support
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Kerala
              </CardTitle>
              <CardDescription>Spice & Plantation Hub</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Rubber, Coconut, Pepper
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  100+ farmers enrolled
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Malayalam language support
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Gujarat
              </CardTitle>
              <CardDescription>Cotton Belt Region</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Cotton, Groundnut, Wheat
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  100+ farmers enrolled
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Gujarati language support
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Rajasthan
              </CardTitle>
              <CardDescription>Arid Zone Farming</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Bajra, Mustard, Barley
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  100+ farmers enrolled
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Hindi language support
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Madhya Pradesh
              </CardTitle>
              <CardDescription>Soybean Capital</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Soybean, Wheat, Chickpea
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  100+ farmers enrolled
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Hindi language support
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Uttar Pradesh
              </CardTitle>
              <CardDescription>Largest Agricultural State</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Wheat, Rice, Sugarcane
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  100+ farmers enrolled
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Hindi language support
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                West Bengal
              </CardTitle>
              <CardDescription>Rice Bowl of India</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Rice, Jute, Tea
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  100+ farmers enrolled
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Bengali language support
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Haryana
              </CardTitle>
              <CardDescription>Green Revolution Pioneer</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Wheat, Rice, Sugarcane
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  100+ farmers enrolled
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Hindi language support
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Bihar
              </CardTitle>
              <CardDescription>Vegetable & Pulses Hub</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Rice, Wheat, Maize
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  100+ farmers enrolled
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Hindi language support
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Odisha
              </CardTitle>
              <CardDescription>Eastern Coastal Agriculture</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Rice, Pulses, Oilseeds
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  100+ farmers enrolled
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Odia language support
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Assam
              </CardTitle>
              <CardDescription>Tea & Paddy Region</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Tea, Rice, Jute
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  100+ farmers enrolled
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Assamese language support
                </li>
              </ul>
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
          <p className="mt-2">Supporting farmers across 16 Indian states with multilingual SMS alerts</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
