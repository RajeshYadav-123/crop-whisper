import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, User, Lock, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Access = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [farmerId, setFarmerId] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSMSAccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length >= 10) {
      toast({
        title: "OTP Sent!",
        description: `Verification code sent to ${phoneNumber}`,
      });
      // Navigate to dashboard or OTP verification page
      setTimeout(() => navigate("/"), 1500);
    }
  };

  const handleFarmerLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (farmerId && location) {
      toast({
        title: "Access Granted!",
        description: `Welcome back, Farmer ${farmerId}`,
      });
      setTimeout(() => navigate("/"), 1500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-primary/5 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Farmer Access Portal
          </h1>
          <p className="text-muted-foreground">
            Get personalized crop predictions for your farm
          </p>
        </div>

        <Card className="border-border shadow-soft">
          <CardHeader>
            <CardTitle>Choose Access Method</CardTitle>
            <CardDescription>
              Login with SMS or your Farmer ID
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="sms" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="sms">
                  <Smartphone className="h-4 w-4 mr-2" />
                  SMS Access
                </TabsTrigger>
                <TabsTrigger value="farmer">
                  <User className="h-4 w-4 mr-2" />
                  Farmer ID
                </TabsTrigger>
              </TabsList>

              <TabsContent value="sms" className="space-y-4 mt-4">
                <form onSubmit={handleSMSAccess} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Mobile Number</Label>
                    <div className="relative">
                      <Smartphone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      You'll receive an OTP via SMS
                    </p>
                  </div>
                  <Button type="submit" className="w-full">
                    Send OTP
                  </Button>
                </form>
                <div className="text-center text-sm text-muted-foreground">
                  <p>Supported in: Marathi • Punjabi • Hindi • English</p>
                </div>
              </TabsContent>

              <TabsContent value="farmer" className="space-y-4 mt-4">
                <form onSubmit={handleFarmerLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="farmerId">Farmer ID</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="farmerId"
                        type="text"
                        placeholder="e.g., MH-2024-001234"
                        value={farmerId}
                        onChange={(e) => setFarmerId(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Farm Location (District)</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="location"
                        type="text"
                        placeholder="e.g., Pune, Amritsar"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    <Lock className="mr-2 h-4 w-4" />
                    Access Dashboard
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Button
            variant="ghost"
            className="text-sm text-muted-foreground hover:text-primary"
            onClick={() => navigate("/")}
          >
            ← Back to Home
          </Button>
        </div>

        <div className="mt-8 p-4 bg-card rounded-lg border border-border">
          <p className="text-sm text-center text-muted-foreground">
            <strong className="text-foreground">New Farmer?</strong> Contact your local agricultural extension office to register and receive your Farmer ID.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Access;
