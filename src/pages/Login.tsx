// import React from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import type { LoginSchema } from "../typescript/interface/form.interface";
import { useContext, useState } from "react";
// import { account, DB } from "../lib/appwrite.config";
// import { toast } from "sonner";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Mail, KeyIcon, Eye, EyeClosed, UserCircle } from "lucide-react";
import loginImage from "../assets/images/popup/login.jpg";
// import Cookies from "js-cookie";
import { AuthContext } from "../hooks/context/auth/Auth.create";
import { useNavigate } from "react-router-dom";

const loginSchema = yup.object({
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup.string().min(8, "minimum 8 charachter").required(),
});
const Login = ({
  open,
  onClose,
  onSwitchSignup,
}: {
  open: boolean;
  onClose: () => void;
  onSwitchSignup: () => void;
}) => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }
  const { authState, loginUser } = context;
  console.log(authState);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const handlePaswordVisibility = () => {
    setShowPassword((show) => !show);
  };

  const handleAdminLogin = () => {
    navigate("/administrator-admin-login");
  };
  const onSubmit: SubmitHandler<LoginSchema> = async (data: LoginSchema) => {
    try {
      loginUser(data);
      reset();
      onClose();
    } catch (error) {
      console.log("login form-data", error);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      disableRestoreFocus
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: "#182f31",
          borderRadius: 5,
        },
      }}
    >
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#182f31",
            borderRadius: 5,
            gap: { xs: 2, sm: 3 },
            p: { xs: 1, sm: 2 },
            position: "relative",
          }}
        >
          <Box
            component="button"
            onClick={handleAdminLogin}
            sx={{
              color: "#d68240",
              cursor: "pointer",
              position: "absolute",
              right: { xs: 10, sm: 15, md: "5%" },
              top: { xs: 10, sm: 10 },
              ":hover": { bgcolor: "#fd730aff", color: "#121a1d" },
              transition: "all 0.3s ease",
              p: 0.7,
              borderRadius: 3,
              bgcolor: "#121a13",
              border: "none",
              fontSize: 10,
              fontWeight: 600,
              zIndex: 11,
              display:"none"
            }}
          >
            ADMIN LOGIN
          </Box>
          <Box
            component="img"
            src={loginImage}
            sx={{
              width: { xs: "100%", sm: 250 },
              height: { xs: 150, sm: 300 },
              borderRadius: 3,
              display: { xs: "none", sm: "block" },
            }}
          />
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ width: "100%", maxWidth: 350 }}
          >
            {/* { input feilds } */}
            <Typography sx={{ color: "#fff", fontWeight: 600, p: 1 }}>
              Your Name:
            </Typography>
            <TextField
              {...register("name")}
              error={!!errors?.name}
              helperText={errors?.name?.message}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <UserCircle size={16} color="#d68240" />
                    </InputAdornment>
                  ),
                },
              }}
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3,
                  backgroundColor: "#121a1d",
                  color: "#fff",
                },
              }}
            />
            <Typography sx={{ color: "#fff", fontWeight: 600, p: 1 }}>
              Email:
            </Typography>
            <TextField
              {...register("email")}
              error={!!errors?.email}
              helperText={errors?.email?.message}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Mail size={16} color="#d68240" />
                    </InputAdornment>
                  ),
                },
              }}
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3,
                  backgroundColor: "#121a1d",
                  color: "#fff",
                },
              }}
            />
            <Typography sx={{ color: "#fff", fontWeight: 600, p: 1 }}>
              Password:
            </Typography>
            <FormControl
              variant="outlined"
              error={!!errors?.password}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3,
                  backgroundColor: "#121a1d",
                  color: "#fff",
                },
              }}
            >
              <OutlinedInput
                type={showPassword ? "text" : "password"}
                startAdornment={
                  <InputAdornment position="start">
                    <KeyIcon size={16} color="#d68240" />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handlePaswordVisibility}>
                      {showPassword ? (
                        <Eye size={16} color="#d68240" />
                      ) : (
                        <EyeClosed size={16} color="#d68240" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                {...register("password")}
              ></OutlinedInput>
              {errors?.password && (
                <Typography
                  sx={{
                    color: "#d32f2f",
                    fontSize: "0.75rem",
                    marginTop: "3px",
                    marginLeft: "14px",
                  }}
                >
                  {errors?.password?.message}
                </Typography>
              )}
            </FormControl>
            {/* { buttons } */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 1,
              }}
            >
              <Typography
                sx={{
                  color: "#d68240",
                  fontSize: 14,
                  padding: 1,
                  ":hover": { color: "#e06c13ff" },
                  cursor: "pointer",
                }}
              >
                Forgot Password?
              </Typography>
              <Button
                type="submit"
                variant="contained"
                size="small"
                disabled={authState?.loading}
                sx={{
                  bgcolor: "#d68240",
                  textTransform: "uppercase",
                  ":hover": { bgcolor: "#965c2fff" },
                }}
              >
                {authState?.loading ? "loading" : "submit"}
              </Button>
            </Box>
          </Box>
        </Box>
        <Typography
          sx={{
            color: "#fff",
            fontSize: 12,
            position: "static",
            textAlign: "center",
            pb: 2,
          }}
        >
          Didn't register yet?{" "}
          <Box
            component="span"
            onClick={onSwitchSignup}
            sx={{
              color: "#d68240",
              cursor: "pointer",
              ":hover": { color: "#fd730aff" },
              transition: "color 0.3s ease",
            }}
          >
            Register
          </Box>
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
