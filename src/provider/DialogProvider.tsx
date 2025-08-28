'use client';

import React, { createContext, useContext, useMemo, useState } from 'react';

import CustomDialog from '../components/shared-ui/CustomDialog';
import CustomLoader from '../components/shared-ui/CustomLoader';
import type { ChildrenProps } from '../helper-function/PropTypes';

type DialogContextType = {
  dialog: boolean;
  error: boolean;
  loader: boolean;
  responseMsg: string | null;
  handleResponse: (showDialog: boolean, message: string, isError: boolean) => void;
  handleLoader: (isLoading: boolean) => void;
};

const DialogContext = createContext<DialogContextType | undefined>(undefined);

const DialogProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [dialog, setDialog] = useState(false);
  const [responseMsg, setResponseMsg] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleResponse = (showDialog: boolean, message: string, isError: boolean) => {
    setDialog(showDialog);
    setResponseMsg(message);
    setError(isError);
  };

  const handleLoader = (isLoading: boolean) => {
    setLoader(isLoading);
  };

  const contextValue = useMemo(
    () => ({
      dialog,
      error,
      loader,
      responseMsg,
      handleResponse,
      handleLoader,
    }),
    [dialog, error, loader, responseMsg]
  );

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
      <CustomDialog />
      {loader && <CustomLoader />}
    </DialogContext.Provider>
  );
};

export const useDialog = (): DialogContextType => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
};

export default DialogProvider;
