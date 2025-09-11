import FormikController from '@/components/mui-components/formik-controller/FormikController';
import GridContainer from '@/components/mui-components/grid/GridContainer';
import GridItem from '@/components/mui-components/grid/GridItem';
import AgGrid from '@/components/shared-ui/AgGrid';
import CustomCard from '@/components/shared-ui/CustomCard';
import CustomGrid from '@/components/shared-ui/CustomGrid';
import MuiDialog from '@/components/shared-ui/MuiDialog';
import Header from '@/components/ui/Header';
import { createTransactionTimerConfig, getTransactionTimerConfig, searchTransactionTimerConfig } from '@/config/apiConfig';
import { useDialog } from '@/provider/DialogProvider';
import { Box } from '@mui/material';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import SearchFieldBox from '@/components/ui/SearchFieldBox';
import { useAuth } from '@/provider/AuthProvider';
import PageTitles from '@/helper-function/pageTitles';

const RoutingTimerConfigurationPage = () => {
  const [rowData, setRowData] = useState([]);
  const { user } = useAuth();

  const [pageControl, setPageControl] = useState({ isOpen: false });
  const { handleResponse } = useDialog();
  const dialogTitle = 'Create Routing Timer Configuration';

  const columnDefs = [
    {
      field: 'productCode',
      headerName: 'Product Code',
    },
    {
      field: 'source',
      headerName: 'Source',
    },
    {
      field: 'destination',
      headerName: 'Destination',
    },

    {
      field: 'channelType',
      headerName: 'Channel Type',
    },
    {
      field: 'txnType',
      headerName: 'Transaction Type',
    },

    {
      field: 'externalSystemCode',
      headerName: 'External System Code',
    },
    {
      field: 'timeoutSeconds',
      headerName: 'Timeout Seconds',
    },

    {
      field: 'onTimeoutAction',
      headerName: 'On Timeout Action',
    },
    {
      field: 'responseCodeOnTimeout',
      headerName: 'Response Code On Timeout',
    },
    {
      field: 'isPinBased',
      headerName: 'Is Pin Based',
    },
    {
      field: 'isActive',
      headerName: 'Is Active',
    },
    {
      field: 'isOverallTimer',
      headerName: 'Is Overall Timer',
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
      label: 'Source',
      name: 'source',
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
      label: 'Channel Type',
      name: 'channelType',
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
      label: 'Transaction Type',
      name: 'txnType',
      required: true,
    },
    {
      control: 'textField',
      label: 'Timeout Seconds',
      name: 'timeoutSeconds',
      required: true,
    },
    {
      control: 'textField',
      label: 'On Timeout Action',
      name: 'onTimeoutAction',
      required: true,
    },
    {
      control: 'textField',
      label: 'responseCodeOnTimeout',
      name: 'responseCodeOnTimeout',
      required: true,
    },
    {
      control: 'switch',
      label: 'Is PinBased',
      name: 'isPinBased',
      required: false,
    },
    {
      control: 'switch',
      label: 'Is Overall Timer',
      name: 'isOverallTimer',
      required: false,
    },
    {
      control: 'switch',
      label: 'Is Active',
      name: 'isActive',
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
      source: values.source,
      destination: values.destination,
      channelType: values.channelType,
      txnType: values.txnType,
      isPinBased: values.isPinBased,
      externalSystemCode: values.externalSystemCode,
      timeoutSeconds: values.timeoutSeconds,
      isOverallTimer: values.isOverallTimer,
      onTimeoutAction: values.onTimeoutAction,
      responseCodeOnTimeout: values.responseCodeOnTimeout,
      isActive: values.isActive,
    };
    const res = await createTransactionTimerConfig(data);
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

    const res = await searchTransactionTimerConfig(data);
    if (res.data.responseCode === 0) {
      setRowData(res.data.data);
    } else {
      handleResponse(res.data.errors[0].message, true);
    }
    setPageControl((prev) => ({ ...prev, isOpen: false }));
  };

  const getAllTransactionTimer = async () => {
    const data = { institutionId: user?.institutionId };
    const res = await getTransactionTimerConfig(data);
    if (res.data.responseCode === 0) {
      setRowData(res.data.data);
    } else {
      handleResponse(res.data.errors[0].message, true);
    }
  };
  // useEffect(() => {
  //   getAllTransactionTimer();
  // }, []);
  return (
    <Box>
      <CustomCard>
        <Header name={PageTitles.routingTimerConfig} />
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
