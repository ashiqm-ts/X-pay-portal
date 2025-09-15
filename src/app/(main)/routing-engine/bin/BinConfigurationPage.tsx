import FormikController from '@/components/mui-components/formik-controller/FormikController';
import GridContainer from '@/components/mui-components/grid/GridContainer';
import GridItem from '@/components/mui-components/grid/GridItem';
import AgGrid from '@/components/shared-ui/AgGrid';
import CustomCard from '@/components/shared-ui/CustomCard';
import CustomGrid from '@/components/shared-ui/CustomGrid';
import MuiDialog from '@/components/shared-ui/MuiDialog';
import Header from '@/components/ui/Header';
import { createSourceConfig, getAllSourceConfigs, searchSourceConfig } from '@/config/apiConfig';
import { useDialog } from '@/provider/DialogProvider';
import { Box } from '@mui/material';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import SearchFieldBox from '@/components/ui/SearchFieldBox';
import { useAuth } from '@/provider/AuthProvider';
import PageTitles from '@/helper-function/pageTitles';

const BinConfigurationPage = () => {
  const [rowData, setRowData] = useState([]);
  const { user } = useAuth();

  const [pageControl, setPageControl] = useState({ isOpen: false });
  const { handleResponse } = useDialog();
  const dialogTitle = 'Create BIN';

  const columnDefs = [
    {
      field: 'id',
      headerName: 'ID',
    },
    {
      field: 'institutionId',
      headerName: 'Institution ID',
    },
    {
      field: 'bin',
      headerName: 'BIN',
    },

    {
      field: 'binType',
      headerName: 'BIN Type',
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
      field: 'isDomestic',
      headerName: 'Domestic',
    },

    {
      field: 'isIssuer',
      headerName: 'Is Issuer',
    },
    {
      field: 'countryCode',
      headerName: 'Country Code',
    },
    {
      field: 'cardType',
      headerName: 'Card Type',
    },
    {
      field: 'status',
      headerName: 'Status',
    },
    {
      field: 'msgType',
      headerName: 'Message Type',
    },
    {
      field: 'createdAt',
      headerName: 'Created DateTime',
    },
    {
      field: 'updatedAt',
      headerName: 'Updated DateTime',
    },
     {
      field: 'createdBy',
      headerName: 'Created By',
    },
    {
      field: 'updatedBy',
      headerName: 'Updated By',
    },
     
  ];
  const CreateFormFields = [
    {
      control: 'textField',
      label: 'BIN',
      name: 'bin',
      required: true,
    },
    {
      control: 'textField',
      label: 'BIN Type',
      name: 'binType',
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
      label: 'Country Code',
      name: 'countryCode',
      required: true,
    },
    {
      control: 'textField',
      label: 'Card Type',
      name: 'cardType',
      required: true,
    },
    {
      control: 'textField',
      label: 'Message Type',
      name: 'msgType',
      required: true,
    },

    {
      control: 'switch',
      label: 'Pin Based',
      name: 'isPinBased',
      required: false,
    },
    {
      control: 'switch',
      label: 'Domestic',
      name: 'isDomestic',
      required: false,
    },
    {
      control: 'switch',
      label: 'Status',
      name: 'status',
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
    const res = await createSourceConfig(data);
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

  const getAllGridDetails = async () => {
    const data = { institutionId: user?.institutionId };
    const res = await getAllSourceConfigs(data);
    if (res.data.responseCode === 0) {
      setRowData(res.data.data);
    } else {
      handleResponse(res.data.errors[0].message, true);
    }
  };
  // useEffect(() => {
  //   getAllGridDetails();
  // }, []);
  return (
    <Box>
      <CustomCard>
        <Header name={PageTitles.binConfig} />
        {/* <Box mb={4}>
          <SearchFieldBox SearchFormFields={SearchFormFields} handleSubmit={handleSearch} />
        </Box> */}
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
export default BinConfigurationPage;
