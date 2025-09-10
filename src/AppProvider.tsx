'use client';

import { StyledEngineProvider } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React from 'react';

import { AuthProvider } from './provider/AuthProvider';
// import ResponseProvider from "../provider/ResponseProvider";
import DialogProvider from './provider/DialogProvider';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './lib/theme';
import ProtectedRoute from './config/ProtectedRoute';

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledEngineProvider injectFirst>
      <DialogProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <AuthProvider>
            <CssBaseline />
            <ProtectedRoute> {children}</ProtectedRoute>
          </AuthProvider>
        </LocalizationProvider>
      </DialogProvider>
    </StyledEngineProvider>
  );
};

export default AppProviders;
