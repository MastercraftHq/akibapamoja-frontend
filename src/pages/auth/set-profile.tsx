
import { ArrowLeft, Plus, Check } from "lucide-react";
import { useState, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { assets } from "@/assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SetProfile = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const avatarOptions = [
    { id: 1, src: assets.avator1, bg: "bg-[#FFDBDE]" },
    { id: 2, src: assets.avator2, bg: "bg-[#FFF2B9]" },
    { id: 3, src: assets.avator3, bg: "bg-[#D1FFF4]" },
    { id: 4, src: assets.avator4, bg: "bg-[#FFC0B8]" },
    { id: 5, src: assets.avator5, bg: "bg-[#FFF2B9]" },
    { id: 6, src: assets.avator6, bg: "bg-[#FFA576]" },
  ];

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
        setSelectedAvatar(null); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarSelect = (avatarId) => {
    setSelectedAvatar(avatarId);
    setUploadedImage(null); 
  };

  const handleNext = () => {
    const profileData = {
      uploadedImage,
      selectedAvatar,
    };
    
    
    localStorage.setItem("profileSetup", JSON.stringify(profileData));
    
    navigate("/auth/login");
  };

  const displayImage = uploadedImage || assets.profileAvatar;
  const hasSelection = uploadedImage || selectedAvatar;

  return (
    <div className="min-h-screen flex flex-col p-6 relative w-full font-geist">
      <div className="flex justify-between w-full mb-8">
        <Button variant="ghost" size="sm" className="mr-4 p-2">
          <Link to="/auth/set-password">
            <ArrowLeft size={24} className="text-gray-600" />
          </Link>
        </Button>
        <Link
          to="/auth/login"
          className="text-primary hover:opacity-80 transition-opacity"
        >
          Skip
        </Link>
      </div>
      
      <div className="flex flex-col justify-center items-center gap-6 py-4">
        <h2 className="text-xl font-semibold font-geist mb-3">
          Choose Profile picture
        </h2>
        
        <div className="relative w-52 h-52 rounded-full border border-dashed border-gray-400 flex items-center justify-center">
          <img
            src={displayImage}
            alt="Profile Avatar"
            className="w-38 h-38 object-cover rounded-full"
          />
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="absolute top-[20%] -right-4 -translate-x-1/2 -translate-y-1/2 bg-[#4107A5] text-white rounded-full w-9 h-9 flex items-center justify-center shadow-md z-10 hover:bg-[#350689] transition-colors"
            aria-label="Add profile picture"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs mt-6">Or choose Akiba Chama avatar</p>
        
        <div className="flex flex-col gap-3 items-center">
          <div className="flex gap-4">
            {avatarOptions.slice(0, 4).map((avatar) => (
              <button
                key={avatar.id}
                onClick={() => handleAvatarSelect(avatar.id)}
                className={`${avatar.bg} p-1 rounded-full inline-block relative transition-all ${
                  selectedAvatar === avatar.id
                    ? "ring-4 ring-[#4107A5] ring-offset-2"
                    : "hover:scale-110"
                }`}
                aria-label={`Select avatar ${avatar.id}`}
              >
                <Avatar className="w-10 h-10">
                  <AvatarImage src={avatar.src} alt={`Avatar ${avatar.id}`} />
                  <AvatarFallback>A{avatar.id}</AvatarFallback>
                </Avatar>
                {selectedAvatar === avatar.id && (
                  <div className="absolute -top-1 -right-1 bg-[#4107A5] rounded-full w-5 h-5 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
          
          <div className="flex gap-4">
            {avatarOptions.slice(4, 6).map((avatar) => (
              <button
                key={avatar.id}
                onClick={() => handleAvatarSelect(avatar.id)}
                className={`${avatar.bg} p-1 rounded-full inline-block relative transition-all ${
                  selectedAvatar === avatar.id
                    ? "ring-4 ring-[#4107A5] ring-offset-2"
                    : "hover:scale-110"
                }`}
                aria-label={`Select avatar ${avatar.id}`}
              >
                <Avatar className="w-10 h-10">
                  <AvatarImage src={avatar.src} alt={`Avatar ${avatar.id}`} />
                  <AvatarFallback>A{avatar.id}</AvatarFallback>
                </Avatar>
                {selectedAvatar === avatar.id && (
                  <div className="absolute -top-1 -right-1 bg-[#4107A5] rounded-full w-5 h-5 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="w-1/2 md:w-1/3 absolute bottom-0 py-1 px-4">
          <button
            onClick={handleNext}
            disabled={!hasSelection}
            className={`w-full py-3 sm:py-4 rounded-md mb-4 font-semibold text-base transition-all ${
              hasSelection
                ? "bg-primary text-white hover:bg-[#350689]"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetProfile;