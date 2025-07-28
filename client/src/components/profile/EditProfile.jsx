import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";

export default function EditProfile({ initialData = {} }) {
  const [formData, setFormData] = useState({
    firstname: initialData.firstname || "",
    lastname: initialData.lastname || "",
    age: initialData.age || "",
    gender: initialData.gender || "",
    email: initialData.email || "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Adjust endpoint as needed
      const response = await axios.put("/api/profile", formData);
      alert(response.data.message || "Profile updated!");
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background to-muted/30 px-4 py-6 sm:py-8">
      <div className="w-full max-w-sm sm:max-w-md bg-background border border-border rounded-xl shadow-xl p-6 sm:p-8 transition-all duration-300">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
          Edit Profile
        </h2>
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
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled
            />
          </div>
          <Button
            type="submit"
            className="w-full text-base font-semibold"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </form>
      </div>
    </div>
  );
}
