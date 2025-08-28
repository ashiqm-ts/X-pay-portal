import FormikController from "@/components/mui-components/formik-controller/FormikController";
import { Typography, Button, Box, InputAdornment } from "@mui/material";
import { Form, Formik } from "formik";
import Grid from "@mui/material/Grid";
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";
import * as Yup from 'yup';
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function SignInPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router=useRouter();
  const initialValues = {
    userName: "",
    password: "",
  }
  const validationSchema=Yup.object().shape(
    {
      userName:Yup.string().required("Required"),
      password:Yup.string().required("Required"),
    }
  );
 
  const handleSubmit = () => {
    router.push("/dashboard");
  }
  return (
    <Box className="flex flex-col justify-center items-center h-screen bg-cover bg-no-repeat lg:flex-row"
      style={{ backgroundImage: "url('/background.png')" }}>
      <Box className="lg:flex-[2.5] flex flex-col justify-center items-center">
        <Typography sx={{fontSize: { xs: '16px', sm: '24px', md: '32px', lg: '40px' }, marginBottom: '17px', color: "#2A4947" }}>Welcome to X-Pay !</Typography>
        <Box sx={{ display: { xs: "none", sm: "none" ,md:"block"} }}>
          <img src="/greenimg.png" alt="" width="680px" height="500px" />
        </Box>
      </Box>
      <Box className="lg:flex-[1.5] flex flex-col justify-center items-center text-[#2A4947] ">
        <img src="/logo.png" alt="" width="140px" height="70px" style={{ objectFit: 'contain' }}/>
        <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 'bold', margin: "10x", textAlign: "center",fontFamily:"sans-serif" }}>Login Your Account</Typography>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form noValidate>
            <Grid container spacing={2} justifyContent="center">
              <Grid size={{ xs: 11, sm: 7,md:9, lg: 9 }}>
                <FormikController
                  control="textField"
                  label="User Name"
                  name="userName"
                  required
                  InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PersonIcon sx={{ color: '#538890' }}/>
                        </InputAdornment>
                      ),
                  }}
                />
              </Grid>
              <Grid size={{ xs: 11, sm: 7, md: 9, lg: 9 }}>
                <FormikController
                  control="password"
                  label="Password"
                  name="password"
                  required
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                />
              </Grid>
              <Grid size={{ xs: 11,sm: 7, md: 9, lg: 9 }}>
                <Link href="/forgot-password">
                <Typography sx={{ textAlign: "right", fontSize: "15px", cursor: "pointer",color: "#A89C34",fontFamily:"sans-serif"  }}>Forgot Password?</Typography>
                </Link>
              </Grid>
              <Grid size={{ xs: 11, md: 9, lg: 9 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
                <Button type="submit" variant="outlined" sx={{textTransform: "none",borderRadius:"15px",color: '#2A4947',fontWeight:"bold" ,fontFamily:"sans-serif" ,backgroundColor:"#F5F8FF"}}>Login</Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
}
