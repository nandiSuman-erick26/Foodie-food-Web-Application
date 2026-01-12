// import React from 'react'
import { useForm, type SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import type { signupSchema } from "../typescript/interface/form.interface";
import { yupResolver } from "@hookform/resolvers/yup";
// import { account, bucket, DB } from "../lib/appwrite.config";
// import { ID } from "appwrite";
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
import { Eye, EyeClosed, KeyIcon, Mail, Phone, UserCircle } from "lucide-react";
import React, { useContext, useState } from "react";
import logo from "../assets/images/navbar/Logo.png";
import { toast } from "sonner";
import { AuthContext } from "../hooks/context/auth/Auth.create";

const signupSchema = yup.object({
  fullname: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Minimum 8 charachter is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .min(10, "minimum 1o character"),
  role: yup.string().required(""),
});
const Signup = ({
  open,
  onClose,
  onSwitchLogin,
}: {
  open: boolean;
  onClose: () => void;
  onSwitchLogin: () => void;
}) => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { authState, registerUser } = context;
  console.log(authState);

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  // const [loading, setLoading] = useState(false);
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<signupSchema>({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      fullname: "",
      password: "",
      phone: "",
      email: "",
      role: "user",
      image: null,
    },
  });

  const handlePaswordVisibility = () => {
    setShowPassword((show) => !show);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setValue("image", file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const onSubmit: SubmitHandler<signupSchema> = async (data: signupSchema) => {
    registerUser(data);
    if (authState?.error) {
      toast(authState.error);
    }
    setPreviewImage(null);
    reset();
    onClose();
  };
  console.log("authstate error", authState?.error);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      disableRestoreFocus
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: "#121a1d",
          borderRadius: 5,
          padding: 3,
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Box component="img" src={logo} sx={{ width: { xs: 80, sm: 100 } }} />
      </Box>
      <Box>
        <Typography
          variant="h2"
          sx={{
            color: "#d68240",
            fontSize: 22,
            textAlign: "center",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          create an account
        </Typography>
      </Box>
      {onSwitchLogin && (
        <Typography
          sx={{ color: "#fff", fontSize: 12, m: 2, textAlign: "center" }}
        >
          Already have an account?{" "}
          <Box
            component="span"
            onClick={onSwitchLogin}
            sx={{
              color: "#d68240",
              cursor: "pointer",
              ":hover": { color: "#fd730aff" },
              transition: "color 0.3s ease",
            }}
          >
            Login
          </Box>
        </Typography>
      )}
      <DialogContent sx={{ padding: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 2, sm: 5 },
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#182f31",
              padding: { xs: 2, sm: 3 },
              borderRadius: 5,
              gap: 2,
              flexDirection: { xs: "column", sm: "row" },
              width: "100%",
            }}
          >
            {/* input feilds */}
            <Box
              sx={{
                borderRight: { xs: "none", sm: "2px solid #121a1d" },
                borderBottom: { xs: "2px solid #121a1d", sm: "none" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 2,
                width: "100%",
                maxWidth: 350,
                padding: { xs: 1, sm: 2 },
                pb: { xs: 3, sm: 2 },
              }}
            >
              <TextField
                {...register("fullname")}
                error={!!errors?.fullname}
                helperText={errors?.fullname?.message}
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
                size="small"
                placeholder="Enter Your Fullname"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                    backgroundColor: "#121a1d",
                    color: "#fff",
                  },
                }}
              />
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
                size="small"
                placeholder="Enter Your Email-id"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                    backgroundColor: "#121a1d",
                    color: "#fff",
                  },
                }}
              />
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
                  placeholder="Type a Password"
                  size="small"
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
              {/* <TextField
            {...register("password")}
            error={!!errors?.password}
            helperText={errors?.password?.message}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyIcon color="#d68240" />
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
          /> */}
              <TextField
                {...register("phone")}
                error={!!errors?.phone}
                helperText={errors?.phone?.message}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Phone size={16} color="#d68240" />
                      </InputAdornment>
                    ),
                  },
                }}
                variant="outlined"
                fullWidth
                size="small"
                placeholder="e.g. 1234567890"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                    backgroundColor: "#121a1d",
                    color: "#fff",
                  },
                }}
              />
            </Box>
            {/* image upload and submit button section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                padding: 2,
              }}
            >
              {/* Separate Box for Preview */}
              <Box
                sx={{
                  width: 180,
                  height: 140,
                  // borderRadius: "50%",
                  border: "1px dashed #104f55ff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  bgcolor: "#121a1d",
                }}
              >
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="Preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <UserCircle size={60} color="#1e3b3dff" strokeWidth={1} />
                )}
              </Box>

              {/* Separate Button for Controls */}
              <Button
                component="label"
                variant="outlined"
                size="small"
                sx={{
                  bgcolor: "#53311759",
                  color: "#d68240",
                  borderColor: "#d68240",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "#d68240",
                    color: "#533117",
                  },
                }}
              >
                {previewImage ? "Change Photo" : "Upload Photo"}
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </Button>

              {/* {submit button} */}
              <Box sx={{ width: "100%" }}>
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  sx={{
                    color: "#2b2017ff",
                    bgcolor: "#d68240",
                    borderColor: "#d68240",
                    textTransform: "none",
                    "&:hover": {
                      color: "#d68240",
                      bgcolor: "#79472085",
                    },
                  }}
                  disabled={authState?.loading}
                >
                  {authState?.loading ? "loading" : "submit"}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Signup;
