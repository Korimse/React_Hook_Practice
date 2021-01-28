export const useConfirm = (message = "", onConfirm, oncancel) => {
    if (!onConfirm || typeof onConfirm !== "function") {
        return;
    }
    if (oncancel && typeof oncancel !== "function") {
        return;
    }
    const confirmAction = () => {
        if (confirm(message)) {
            onConfirm();
        } else {
            oncancel();
        }
    };
    return confirmAction;
};