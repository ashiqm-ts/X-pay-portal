import AgGrid from '@/components/shared-ui/AgGrid';
import CustomCard from '@/components/shared-ui/CustomCard';
import CustomGrid from '@/components/shared-ui/CustomGrid';
import Header from '@/components/ui/Header';
import { Box } from '@mui/material';
import { useState } from 'react';

const RoutingConfigurationPage = () => {
  const [rowData, setRowData] = useState([]);

   const [colDefs, setColDefs] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'model' },
    { field: 'price' },
    { field: 'make' },
    { field: 'model' },
    { field: 'price', resizable: false },
   ]);
  const handleCreate = () => {};
  return (
    <Box>
      <CustomCard>
        <Header name="Routing Configuration " />
        <CustomGrid
          rowData={rowData}
          columnDefs={colDefs}
          actionButton={{
            handleActionButton: handleCreate,
            label:'Create'
          }}
        />
      </CustomCard>
    </Box>
  );
};
export default RoutingConfigurationPage;
