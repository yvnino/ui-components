import { useSnackbar } from 'notistack'

const useNotifications = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleShowSuccess = (message: string) => {
    enqueueSnackbar(message, { variant: 'success' })
  };

  const handleShowError = (message: string) => {
    enqueueSnackbar(message, { variant: 'error' })
  };

  const handleShowDefault = (message: string) => {
    enqueueSnackbar(message, { variant: 'default' })
  };

  const handleShowWarning = (message: string) => {
    enqueueSnackbar(message, { variant: 'warning' })
  };

  const handleShowInfo = (message: string) => {
    enqueueSnackbar(message, { variant: 'info' })
  };

  return ({
    showSuccess: handleShowSuccess,
    showError: handleShowError,
    showWarning: handleShowWarning,
    showMessage: handleShowDefault,
    showInfo: handleShowInfo
  })
}

export default useNotifications
