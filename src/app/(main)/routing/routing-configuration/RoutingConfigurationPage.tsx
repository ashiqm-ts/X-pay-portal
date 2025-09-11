import FormikController from '@/components/mui-components/formik-controller/FormikController';
import GridContainer from '@/components/mui-components/grid/GridContainer';
import GridItem from '@/components/mui-components/grid/GridItem';
import AgGrid from '@/components/shared-ui/AgGrid';
import CustomCard from '@/components/shared-ui/CustomCard';
import CustomGrid from '@/components/shared-ui/CustomGrid';
import MuiDialog from '@/components/shared-ui/MuiDialog';
import Header from '@/components/ui/Header';
import { createTransactionRoute, getTransactionRoutes, searchTransactionRoute } from '@/config/apiConfig';
import { useDialog } from '@/provider/DialogProvider';
import { Box } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/provider/AuthProvider';
import MuiButton from '@/components/mui-components/button/MuiButton';
import SearchFieldBox from '@/components/ui/SearchFieldBox';
import PageTitles from '@/helper-function/pageTitles';

const RoutingConfigurationPage = () => {
  const { user } = useAuth();
  console.log(user);
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
    const data = [
      {
        institutionId: user?.institutionId,
        productCode: values.productCode,
        destination: values.destination,
        stepOrder: values.stepOrder,
        externalSystemCode: values.externalSystemCode,
        targetModule: values.targetModule,
        declineOnFailure: values.declineOnFailure,
        isOptional: values.isOptional,
      },
    ];

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

  const validationSchema = Yup.object().shape({
    productCode: Yup.string().required('Required'),
    destination: Yup.string().required('Required'),
    stepOrder: Yup.string().required('Required'),
    externalSystemCode: Yup.string().required('Required'),
    targetModule: Yup.string().required('Required'),
  });

  const getAllRouteTrans = async () => {
    const data = { institutionId: user?.institutionId };
    const res = await getTransactionRoutes(data);
    if (res.data.responseCode === 0) {
      setRowData(res.data.data);
    } else {
      handleResponse(res.data.errors[0].message, true);
    }
  };
  // useEffect(() => {
  //   getAllRouteTrans();
  // }, []);

  const SearchFormFields = [
    {
      control: 'textField',
      label: 'Destination',
      name: 'destination',
      required: true,
    },
    {
      control: 'textField',
      label: 'Source',
      name: 'source',
      required: true,
    },
    {
      control: 'textField',
      label: 'Transaction Type',
      name: 'txnType',
      required: true,
    },
  ];

  const handleSearch = async (values: any) => {
    console.log(values);
    const data = {
      institutionId: user?.institutionId,
      source: values.source,
      destination: values.destination,
      txnType: values.txnType,
    };

    const res = await searchTransactionRoute(data);
    if (res.data.responseCode === 0) {
      setRowData(res.data.data);
    } else {
      handleResponse(res.data.errors[0].message, true);
    }
    setPageControl((prev) => ({ ...prev, isOpen: false }));
  };
  return (
    <Box>
      <CustomCard>
        <Header name={PageTitles.routingConfig} />
        <Box mb={4}>
          <SearchFieldBox SearchFormFields={SearchFormFields} handleSubmit={handleSearch} />
        </Box>
        <CustomGrid
          rowData={rowData}
          columnDefs={columnDefs}
          actionButton={{
            handleActionButton: handleCreate,
            label: 'Create',
           }}
        />
        <Formik initialValues={initialValues} enableReinitialize validationSchema={validationSchema} onSubmit={handleSubmit}>
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
export default RoutingConfigurationPage;
