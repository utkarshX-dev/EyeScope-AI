import { useState, useContext, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import userContext from "../../context/UserContext";
import axios from "axios";

export default function EditProfile() {
  const navigate = useNavigate();
  const { user, setUser, token } = useContext(userContext);

  useEffect(() => {
    if (!token || !user) {
      navigate("/auth");
    }
  }, [token, user, navigate]);

  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [formData, setFormData] = useState({
    firstname: user?.firstname || "",
    lastname: user?.lastname || "",
    age: user?.age || "",
    gender: user?.gender || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setErr("");
    try {
      const payload = { ...formData, userId: user.id };
      const response = await axios.put(
        `${import.meta.env.VITE_SERVER_URL}/users/edit`,
        payload,
      );
      
      localStorage.removeItem("currUser");
      localStorage.setItem("currUser", JSON.stringify(response.data.user));
      setUser(response.data.user);
      setMsg("Profile updated successfully! Redirecting to your profile...");
      setErr("");
      setTimeout(() => navigate("/profile"), 1500);
    } catch (err) {
      console.error(err);
      setErr(
        err.response?.data?.error?.message ||
          err.response?.data?.message ||
          "Internal Server Error"
      );
      setMsg("");
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background to-muted/30 px-4 py-6 sm:py-8">
      <div className="w-full max-w-sm sm:max-w-md bg-background border border-border rounded-xl shadow-xl p-6 sm:p-8 transition-all duration-300">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
          Edit Profile
        </h2>
        {msg && <p className="text-green-600 text-center mb-4">{msg}</p>}
        {err && <p className="text-red-600 text-center mb-4">{err}</p>}
        <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstname">First Name</Label>
              <Input
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="lastname">Last Name</Label>
              <Input
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="age">Age</Label>
              <Input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="gender">Gender</Label>
              <div className="relative">
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="block w-full appearance-none rounded-md border border-border bg-muted py-2 px-3 text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                  ▼
                </div>
              </div>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full mt-5 text-base font-semibold"
          >
            Save Changes
          </Button>
        </form>
      </div>
    </div>
  );
}