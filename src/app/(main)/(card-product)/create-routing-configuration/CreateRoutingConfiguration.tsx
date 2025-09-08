import CustomCard from '@/components/shared-ui/CustomCard';
import Header from '@/components/ui/Header';
import { Box, Button } from '@mui/material';
import RoutingFields from './components/RoutingFields';
import { FieldArray, Form, Formik } from 'formik';
import MuiButton from '@/components/mui-components/button/MuiButton';
import RoutingGrid from './components/RoutingGrid';

export default function CreateRoutingConfiguration() {
  const initialValues = {
    routingConfig: [{ productCode: '', destination: '', stepOrder: '', externalSystemCode: '', targetModule: '', declineOnFailure: false, isOptional: false }],
  };

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Box>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form>
            <FieldArray name="routingConfig">
              {({ form, push, remove }) => (
                <CustomCard>
                  <Box mb={2} className="flex justify-between items-center ">
                    <Header name="Create Routing Configuration" />
                    <MuiButton
                      type="basic-btn"
                      onClick={() =>
                        push({
                          productCode: '',
                          destination: '',
                          stepOrder: '',
                          externalSystemCode: '',
                          targetModule: '',
                          declineOnFailure: false,
                          isOptional: false,
                        })
                      }
                    >
                      Add
                    </MuiButton>
                  </Box>

                  <RoutingFields form={form} remove={remove} />
                </CustomCard>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
