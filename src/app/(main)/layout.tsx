'use client';

import AppProviders from '@/AppProvider';
import Footer from '@/layout-components/Footer';
import Sidebar from '@/layout-components/sidebar/Sidebar';
import ToolBar from '@/layout-components/toolbar/Toolbar';
import { Box, GlobalStyles } from '@mui/material';

const scrollBarCustomStyle = {
  '::-webkit-scrollbar': {
    width: '5px',
    height: '5px',
    backgroundColor: '#f3f6f4',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '#b0c4c0',
    borderRadius: '8px',
  },
  '::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#8aa6a0',
  },
};

export default function WithSidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box className="w-screen h-screen overflow-hidden">
      <GlobalStyles styles={scrollBarCustomStyle} />
      <Box className="flex w-full h-full">
        <Box className="w-[190px] shrink-0 bg-white  ">
          <Sidebar />
        </Box>
        <Box className="flex flex-col flex-1 h-full">
          <Box className="sticky top-0 z-20">
            <ToolBar />
          </Box>
          <Box className="flex-1 overflow-auto bg-[#538890]">
            <AppProviders>{children}</AppProviders>
          </Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
