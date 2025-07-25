
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col max-w-md mx-auto w-full px-6 py-4 md:py-8">
        {/* Header */}
        <div className="flex items-center mb-8 md:mb-12">
          <Button variant="ghost" size="icon" className="p-0 h-8 w-8 -ml-2">
            <ArrowLeft className="h-5 w-5" />
            <p className="hidden md:block">Back to Homescreen</p>
          </Button>
        </div>

        {/* Title and Description */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">Create your account</h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Register your account using either
            <br />
            your phone number or email
          </p>
        </div>


        {/* Tabs for Phone/Email */}
        <Tabs defaultValue="phone" className="mb-8 w-full">
          <TabsList className="w-full bg-gray-100 rounded-lg p-1">
            <TabsTrigger value="phone" className="flex-1 py-3 px-4 text-sm font-medium rounded-md data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700">
              Phone
            </TabsTrigger>
            <TabsTrigger value="email" className="flex-1 py-3 px-4 text-sm font-medium rounded-md data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700">
              Email
            </TabsTrigger>
          </TabsList>

          <TabsContent value="phone" className="space-y-4 mb-auto mt-4">
            <div>
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                Phone number
              </Label>
              <div className="flex gap-2">
                <Select defaultValue="ke">
                  <SelectTrigger className="w-24 bg-gray-100 border-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ke">KE +254</SelectItem>
                    <SelectItem value="us">US +1</SelectItem>
                    <SelectItem value="uk">UK +44</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone number"
                  className="flex-1 bg-gray-100 border-0 placeholder:text-gray-400"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="email" className="space-y-4 mb-auto mt-4">
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                Email address
              </Label>
              <div>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  className="flex-1 bg-gray-100 border-0 placeholder:text-gray-400"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Bottom Section */}
        <div className="space-y-6 mt-8">
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg font-medium">
            Next
          </Button>

          <div className="text-center text-xs text-gray-500 leading-relaxed">
            By clicking Sign up, you agree to Akiba Chama's{" "}
            <a href="#" className="text-purple-600 underline">
              Constitution
            </a>{" "}
            and{" "}
            <a href="#" className="text-purple-600 underline">
              Privacy Policy
            </a>
            .
          </div>

          <div className="text-center text-sm text-gray-600">
            Already a member?{" "}
            <a href="#" className="text-purple-600 font-medium">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
