import FormikController from '@/components/mui-components/formik-controller/FormikController';
import { Typography, Button, Box, InputAdornment } from '@mui/material';
import { Form, Formik } from 'formik';
import Grid from '@mui/material/Grid';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/provider/AuthProvider';
import MuiButton from '@/components/mui-components/button/MuiButton';

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { user, setUser } = useAuth();
  const router = useRouter();
  const initialValues = {
    userName: '',
    password: '',
  };
  const validationSchema = Yup.object().shape({
    userName: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = () => {
    setUser({
      id: '1',
      name: 'John Smith',
      email: 'john.smith@example.com',
      institutionId: 101,
    });
    router.push('/dashboard');
  };
  return (
    <Box className="flex flex-col justify-center items-center h-screen bg-cover bg-no-repeat lg:flex-row" style={{ backgroundImage: "url('/background1.png')" }}>
      <Box className="lg:flex-[2.5] flex flex-col justify-center items-center">
        <Typography sx={{ fontSize: { xs: '16px', sm: '24px', md: '32px', lg: '40px' }, marginBottom: '17px', color: 'var(--color-primary)' }}>Welcome to X-Pay !</Typography>
        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
          <img src="/greenimg.png" alt="" width="680px" height="500px" />
        </Box>
      </Box>
      <Box className="lg:flex-[1.5] flex flex-col justify-center items-center text-var(--color-primary)">
        <Image src="/logotransp.png" alt="" width={180} height={180} style={{ objectFit: 'contain' }} />
        {/* <img src="/logo.png" alt="" width="140px" height="70px" style={{ objectFit: 'contain' }}/> */}
        <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 'bold', margin: '10x', textAlign: 'center', fontFamily: 'sans-serif' }}>
          Login Your Account
        </Typography>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form noValidate>
            <Grid container spacing={2} justifyContent="center">
              <Grid size={{ xs: 11, sm: 7, md: 9, lg: 9 }}>
                <FormikController
                  control="textField"
                  label="User Name"
                  name="userName"
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PersonIcon sx={{ color: 'var(--color-secondary)' }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid size={{ xs: 11, sm: 7, md: 9, lg: 9 }}>
                <FormikController control="password" label="Password" name="password" required showPassword={showPassword} setShowPassword={setShowPassword} />
              </Grid>
              <Grid size={{ xs: 11, sm: 7, md: 9, lg: 9 }}>
                <Link href="/forgot-password">
                  <Typography fontSize={15} className="text-right   cursor-pointer text-[var(--color-yellow)] font-sans">
                    Forgot Password?
                  </Typography>
                </Link>
              </Grid>
              <Grid size={{ xs: 11, md: 9, lg: 9 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
                <MuiButton type="submit" variant="outlined" className="!normal-case !rounded-[15px] !p-1  !text-[#2A4947] !font-bold !font-sans !bg-[#F5F8FF]">
                  Login
                </MuiButton>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
}
