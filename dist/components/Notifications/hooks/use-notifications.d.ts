declare const useNotifications: () => {
    showSuccess: (message: string) => void;
    showError: (message: string) => void;
    showWarning: (message: string) => void;
    showMessage: (message: string) => void;
    showInfo: (message: string) => void;
};
export default useNotifications;
