import FormikController from '@/components/mui-components/formik-controller/FormikController';
import GridContainer from '@/components/mui-components/grid/GridContainer';
import GridItem from '@/components/mui-components/grid/GridItem';
import AgGrid from '@/components/shared-ui/AgGrid';
import CustomCard from '@/components/shared-ui/CustomCard';
import CustomGrid from '@/components/shared-ui/CustomGrid';
import MuiDialog from '@/components/shared-ui/MuiDialog';
import Header from '@/components/ui/Header';
import { createTransactionRoute } from '@/config/apiConfig';
import { useDialog } from '@/provider/DialogProvider';
import { Box } from '@mui/material';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';

const RoutingTimerConfigurationPage = () => {
  const [rowData, setRowData] = useState([]);
  const [pageControl, setPageControl] = useState({ isOpen: false });
  const { handleResponse } = useDialog();
  const dialogTitle = 'Create Routing Configuration';

  const columnDefs = [
    {
      field: 'productCode',
      headerName: 'Product Code',
    },
    {
      field: 'destination',
      headerName: 'Destination',
    },
    {
      field: 'stepOrder',
      headerName: 'Step Order',
    },
    {
      field: 'externalSystemCode',
      headerName: 'External System Code',
    },
    {
      field: 'targetModule',
      headerName: 'Target Module',
    },
    {
      field: 'declineOnFailure',
      headerName: 'Decline On Failure',
    },
    {
      field: 'isOptional',
      headerName: 'Is Optional',
    },
  ];
  const CreateFormFields = [
    {
      control: 'textField',
      label: 'Product Code',
      name: 'productCode',
      required: true,
    },
    {
      control: 'textField',
      label: 'Destination',
      name: 'destination',
      required: true,
    },
    {
      control: 'textField',
      label: 'Step Order',
      name: 'stepOrder',
      required: true,
    },
    {
      control: 'textField',
      label: 'External System Code',
      name: 'externalSystemCode',
      required: true,
    },
    {
      control: 'textField',
      label: 'Target Module',
      name: 'targetModule',
      required: true,
    },
    {
      control: 'switch',
      label: 'Decline On Failure',
      name: 'declineOnFailure',
      required: true,
    },
    {
      control: 'switch',
      label: 'Is Optional',
      name: 'isOptional',
      required: false,
    },
  ];

  const handleCreate = () => {
    setPageControl((Prev) => ({ ...Prev, isOpen: true }));
  };
  const handleSubmit = async (values: any) => {
    console.log(values);
    const data = {
      institutionId: 101,
      productCode: values.productCode,
      destination: values.destination,
      stepOrder: values.stepOrder,
      externalSystemCode: values.externalSystemCode,
      targetModule: values.targetModule,
      declineOnFailure: values.declineOnFailure,
      isOptional: values.isOptional,
    };
    const res = await createTransactionRoute(data);
    if (res.data.responseCode === 0) {
      handleResponse(res.data.data.message, false);
    } else {
      handleResponse(res.data.errors[0].message, true);
    }
    setPageControl((prev) => ({ ...prev, isOpen: false }));
  };
  const initialValues = {
    productCode: '',
    destination: '',
    stepOrder: '',
    externalSystemCode: '',
    targetModule: '',
    isOptional: false,
    declineOnFailure: false,
  };
  return (
    <Box>
      <CustomCard>
        <Header name="Routing Timer Configuration " />
        <CustomGrid
          rowData={rowData}
          columnDefs={columnDefs}
          actionButton={{
            handleActionButton: handleCreate,
            label: 'Create',
          }}
        />
        <Formik initialValues={initialValues} enableReinitialize onSubmit={handleSubmit}>
          {({ resetForm, dirty }) => (
            <MuiDialog width={700} open={pageControl?.isOpen} dialogTitle={dialogTitle} onClose={() => setPageControl((prev) => ({ ...prev, isOpen: false }))}>
              <GridContainer>
                {CreateFormFields.map((item, index) => {
                  const isLastTextField =
                    item.control === 'textField' &&
                    index === CreateFormFields.filter((f) => f.control === 'textField').length - 1 &&
                    CreateFormFields.filter((f) => f.control === 'textField').length % 2 !== 0;
                  return (
                    <React.Fragment key={item.name}>
                      <GridItem key={item.name} lg={6} xs={12}>
                        <FormikController control={item.control} label={item.label} name={item.name} required={item.required} />
                      </GridItem>

                      {isLastTextField && <GridItem lg={6} xs={6} />}
                    </React.Fragment>
                  );
                })}
              </GridContainer>
            </MuiDialog>
          )}
        </Formik>
      </CustomCard>
    </Box>
  );
};
export default RoutingTimerConfigurationPage;
