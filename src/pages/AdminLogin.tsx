
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../contexts/AdminContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AdminLogin = () => {
  const { isAdmin, login } = useAdmin();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (isAdmin) {
    navigate("/projects-archive");
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (login(password)) {
      navigate("/projects-archive");
    } else {
      setError("Incorrect password.");
      setPassword("");
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl shadow-lg flex flex-col gap-4 min-w-[320px] border">
        <h2 className="font-display text-2xl font-bold text-primary text-center mb-2">Admin Login</h2>
        <Input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoFocus
        />
        {error && <div className="text-destructive text-sm text-center">{error}</div>}
        <Button type="submit" className="mt-2">Login</Button>
      </form>
    </div>
  );
};

export default AdminLogin;
