// import React from 'react'

import { Box, Button, Typography } from "@mui/material";
import DynamicInput from "../components/DynamicInput";
import { useForm, type SubmitHandler } from "react-hook-form";
import { loginSchema } from "../services/validation/admin.login.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import type { AdminData } from "../typescript/interface/admin.interface";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../hooks/context/auth/Auth.create";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Admin_login = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { authState, adminLogin } = context;
  console.log(authState);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (authState?.isAuthenticate === true && Cookies.get("role") === "admin") {
      navigate("/admin/dashboard");
    }
  }, [authState?.isAuthenticate]);
  const {
    register,
    handleSubmit,
    // setValue,
    reset,
    formState: { errors },
  } = useForm<AdminData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "admin",
    },
  });
  const handlePaswordVisibility = () => {
    setShowPassword((show) => !show);
  };

  const onsubmit: SubmitHandler<AdminData> = async (data: AdminData) => {
    console.log(data);
    await adminLogin(data);
    if (authState?.error) {
      toast.error(authState?.error);
    }
    reset();
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "#121a1d",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onsubmit)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: 5,
          borderRadius: 5,
          width: 400,
          height: 240,
          gap: 2,
          bgcolor: "#142b33ff",
          boxShadow: "0 2px 6px #03516dff",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600, color: "#d68240" }}>
          ADMIN LOGIN
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <DynamicInput
            name="email"
            label="email"
            placeholder="Enter your Email"
            type="email"
            register={register}
            error={errors?.email?.message}
            helperText={!!errors?.email}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <DynamicInput
              name="password"
              label="password"
              placeholder="Enter your Password"
              type={showPassword ? "text" : "password"}
              register={register}
              error={errors?.password?.message}
              helperText={!!errors?.password}
            />
            <Box
              component="span"
              sx={{
                color: showPassword?"#b3f18ede":"#e6b1a8ff",
                cursor: "pointer",
                bgcolor : showPassword?"#5be40b42":"#db847470",
                padding: "4px",
                borderRadius: 2,
                fontSize: 13,
                width: "8%",
                textAlign: "center",
                border:showPassword?"1px solid #5be40be8":"1px solid #ce2608ec"
              }}
              onClick={handlePaswordVisibility}
            >
              {showPassword ? "Show" : "Hide"}
            </Box>
          </Box>
        </Box>
        <Button
          type="submit"
          sx={{ bgcolor: "#d68240", color: "#fff", width: "70%" }}
        >
          LOGIN
        </Button>
      </Box>
    </Box>
  );
};

export default Admin_login;
