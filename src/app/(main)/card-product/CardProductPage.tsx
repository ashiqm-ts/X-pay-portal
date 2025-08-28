"use client";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Tabs, Tab, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Links } from '@/layout-components/sidebar/RouteLink';
import { usePathname, useRouter } from 'next/navigation';
import CreateCardProduct from '@/app/(main)/card-product/create-card-product/CreateCardProduct';
import ViewCardProduct from '@/app/(main)/card-product/view-card-products/ViewCardProduct';

export default function CardProductPage() {
    const pathname=usePathname();
    const router=useRouter();
    const cardProductSection=Links.find((Link)=>Link.label==="Card Products");
    const isActive=cardProductSection?.children?.map((item)=>item.to===pathname)
    
    
    const currentTab=pathname.split('/').pop();
    const [activeTab,searchActiveTab]=useState(currentTab);

    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        searchActiveTab(newValue);
        router.push(`/card-product/${newValue}`)
    };
   
    return (
        // <TabContext value={isActive}>
        //     <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        //         <TabList onChange={handleTabChange}>
        //             {cardProductSection?.children?.map((item)=>(
        //                 <Tab key={item.name} label={item.name} value={item.name}/>
        //             ))}
        //         </TabList>
        //     </Box>
        //     {/* <TabPanel value={value}>{value}</TabPanel> */}
        //      {cardProductSection?.children?.map((item)=>(
        //         <TabPanel key={item.name} value={item.name}>
        //             {item.name=== 'Create Card Products' && <CreateCardProduct/>}
        //              {item.name=== 'View Card Products' && <ViewCardProduct/>}
        //         </TabPanel>
        //      ))}
        // </TabContext>
        <Box>
      <Tabs value={currentTab} onChange={handleTabChange}>
        {cardProductSection?.children?.map((item)=>(
          <Tab
            key={item.name}
            label={item.name}
            value={item.name}
          />
        ))}
      </Tabs>

      {/* Render the child page inside the tab layout */}
      <Box sx={{ mt: 2 }}>
        {/* {children} */}
        <CreateCardProduct/>
        <ViewCardProduct/>
      </Box>
    </Box>
    );
}