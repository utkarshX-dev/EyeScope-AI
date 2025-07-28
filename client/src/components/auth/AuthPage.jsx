import { useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import userContext from "../../context/UserContext";
import axios from "axios";
import { useNavigate} from "react-router-dom";

export default function AuthPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");
  const { setToken } = useContext(userContext);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    gender: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleAuthChange = () => {
    setIsLogin(!isLogin);
    setErr("");
    setMsg("");
    setFormData({
      firstname: "",
      lastname: "",
      age: "",
      gender: "",
      email: "",
      password: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "/login" : "/signup";
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/users${endpoint}`,
        formData
      );
      console.log(response.data);
      setToken(response.data.token);
      localStorage.setItem("session_token", JSON.stringify(response.data.token));
      console.log(`token : ${response.data.token}`);
      setMsg(response.data.message + " Redirecting to your home page...");
      setErr("");
      setFormData({
        firstname: "",
        lastname: "",
        age: "",
        gender: "",
        email: "",
        password: "",
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      setErr(err.response?.data?.error?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background to-muted/30 px-4 py-6 sm:py-8">
      <div className="w-full max-w-sm sm:max-w-md bg-background border border-border rounded-xl shadow-xl p-6 sm:p-8 transition-all duration-300">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
          {isLogin ? "Login to EyeScope AI" : "Create Your EyeScope Account"}
        </h2>
        {err && <p className="text-red-500 text-sm text-center mb-4 font-bold">{err}</p>}
        {msg && (
          <p className="text-green-500 text-center text-sm mb-4 font-bold">{msg}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
          {!isLogin && (
            <>
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
            </>
          )}

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <Button type="submit" className="w-full text-base font-semibold">
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </form>

        <p className="text-center text-sm mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
           onClick={() => handleAuthChange()}
            className="text-blue-500 hover:font-medium hover:underline  transition duration-100"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
