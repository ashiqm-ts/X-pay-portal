import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { useDialog } from '../../provider/DialogProvider';

const CustomLoader = () => {
  const { loader } = useDialog();

  return (
    <Backdrop
      className="z-40"
      sx={{
        color: '#fff',
      }}
      open={loader}
    >
      <CircularProgress className="z-40" color="inherit" />
    </Backdrop>
  );
};

export default CustomLoader;
