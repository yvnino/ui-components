interface ModalHook {
    showModal: () => void;
    hideModal: () => void;
    isOpen: boolean;
}
declare const useModal: (init?: boolean) => ModalHook;
export { useModal };
