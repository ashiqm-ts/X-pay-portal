'use client'; 
import AppProviders from '@/AppProvider';
import Footer from '@/layout-components/Footer';
import Sidebar from '@/layout-components/sidebar/Sidebar';
import Sidebar1 from '@/layout-components/sidebar/Sidebar1';
import ToolBar from '@/layout-components/toolbar/Toolbar';
import { Box, GlobalStyles } from '@mui/material';
// import "../globals.css";

const scrollBarCustomStyle={
  '::-webkit-scrollbar':{
    width:'5px',
    height:'5px',
    backgroundColor:'#E6F1EB',
  },
  '::-webkit-scrollbar-thumb':{
    backgroundColor:'#2A4947',
  },
  '::-webkit-scrollbar-thumb:hover' :{
  backgroundColor: '#5D8983',
},
}

export default function WithSidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <GlobalStyles styles={scrollBarCustomStyle}/>
    <Box className="flex h-screen w-screen">
      <Box className="w-[190px] shrink-0 sticky top-0 z-20 ">
        <Sidebar />
      </Box>
      <Box className="flex flex-col w-full">
        <Box className="sticky top-0 z-20">
           <ToolBar/>
        </Box>
        {/* <main className="w-full min-h-screen bg-[#538890]">{children}</main> */}
        <main className="w-full min-h-screen bg-[#538890]">
          <AppProviders>{children}</AppProviders>
        </main>
        <Footer />
      </Box>
    </Box>
    </Box>
  );
}
