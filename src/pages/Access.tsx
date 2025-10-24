import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Smartphone, User, Lock, MapPin, Droplets, Ruler, Leaf, IndianRupee } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Access = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [farmerId, setFarmerId] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [village, setVillage] = useState("");
  const [soilType, setSoilType] = useState("");
  const [farmSize, setFarmSize] = useState("");
  const [irrigation, setIrrigation] = useState("");
  const [currentCrop, setCurrentCrop] = useState("");
  const [budget, setBudget] = useState("");
  const [language, setLanguage] = useState("");
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
    if (!farmerId || !state || !district || !soilType || !farmSize || !irrigation) {
      toast({
        title: "Missing Information",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Data Submitted!",
      description: `Climate prediction analysis started for ${district}, ${state}`,
    });
    setTimeout(() => navigate("/"), 1500);
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

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Select value={state} onValueChange={setState}>
                        <SelectTrigger id="state">
                          <SelectValue placeholder="Select State" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="maharashtra">Maharashtra</SelectItem>
                          <SelectItem value="punjab">Punjab</SelectItem>
                          <SelectItem value="telangana">Telangana</SelectItem>
                          <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                          <SelectItem value="karnataka">Karnataka</SelectItem>
                          <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                          <SelectItem value="kerala">Kerala</SelectItem>
                          <SelectItem value="gujarat">Gujarat</SelectItem>
                          <SelectItem value="rajasthan">Rajasthan</SelectItem>
                          <SelectItem value="madhya-pradesh">Madhya Pradesh</SelectItem>
                          <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                          <SelectItem value="west-bengal">West Bengal</SelectItem>
                          <SelectItem value="haryana">Haryana</SelectItem>
                          <SelectItem value="bihar">Bihar</SelectItem>
                          <SelectItem value="odisha">Odisha</SelectItem>
                          <SelectItem value="assam">Assam</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="district">District</Label>
                      <Input
                        id="district"
                        type="text"
                        placeholder="Enter district"
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="village">Village/Town</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="village"
                        type="text"
                        placeholder="Enter village or town name"
                        value={village}
                        onChange={(e) => setVillage(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="soilType">Soil Type</Label>
                    <Select value={soilType} onValueChange={setSoilType}>
                      <SelectTrigger id="soilType">
                        <SelectValue placeholder="Select Soil Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="black">Black Soil (Regur)</SelectItem>
                        <SelectItem value="red">Red Soil</SelectItem>
                        <SelectItem value="alluvial">Alluvial Soil</SelectItem>
                        <SelectItem value="laterite">Laterite Soil</SelectItem>
                        <SelectItem value="sandy">Sandy Soil</SelectItem>
                        <SelectItem value="clayey">Clayey Soil</SelectItem>
                        <SelectItem value="loamy">Loamy Soil</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="farmSize">Farm Size (Acres)</Label>
                      <div className="relative">
                        <Ruler className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="farmSize"
                          type="number"
                          placeholder="e.g., 5"
                          value={farmSize}
                          onChange={(e) => setFarmSize(e.target.value)}
                          className="pl-10"
                          required
                          step="0.1"
                          min="0"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="irrigation">Irrigation Type</Label>
                      <Select value={irrigation} onValueChange={setIrrigation}>
                        <SelectTrigger id="irrigation">
                          <SelectValue placeholder="Select Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="drip">Drip Irrigation</SelectItem>
                          <SelectItem value="sprinkler">Sprinkler</SelectItem>
                          <SelectItem value="canal">Canal</SelectItem>
                          <SelectItem value="well">Well/Borewell</SelectItem>
                          <SelectItem value="rainfed">Rain-fed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentCrop">Current/Previous Crop</Label>
                    <div className="relative">
                      <Leaf className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="currentCrop"
                        type="text"
                        placeholder="e.g., Cotton, Wheat, Rice"
                        value={currentCrop}
                        onChange={(e) => setCurrentCrop(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Available Budget (₹)</Label>
                    <div className="relative">
                      <IndianRupee className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="budget"
                        type="number"
                        placeholder="e.g., 50000"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="pl-10"
                        min="0"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="language">Preferred Language</Label>
                    <Select value={language} onValueChange={setLanguage}>
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Select Language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="hindi">हिंदी (Hindi)</SelectItem>
                        <SelectItem value="marathi">मराठी (Marathi)</SelectItem>
                        <SelectItem value="punjabi">ਪੰਜਾਬੀ (Punjabi)</SelectItem>
                        <SelectItem value="telugu">తెలుగు (Telugu)</SelectItem>
                        <SelectItem value="tamil">தமிழ் (Tamil)</SelectItem>
                        <SelectItem value="kannada">ಕನ್ನಡ (Kannada)</SelectItem>
                        <SelectItem value="bengali">বাংলা (Bengali)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full">
                    <Lock className="mr-2 h-4 w-4" />
                    Get Climate Prediction
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
