import toast, { Toaster } from 'react-hot-toast';

const notify = (msg:string, action?:string) => {
    if(action === "success") {
        toast.success(msg)
    } else if(action === "error") {
        toast.error(msg)
    }
};

export default notify