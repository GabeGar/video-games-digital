import { toast, Toaster, ToastBar } from 'react-hot-toast';

const CustomToaster = () => {
    return (
        <Toaster
            toastOptions={{
                duration: 2500,
            }}
            gutter={8}
            position="top-center"
            reverseOrder={true}
        >
            {(t) => (
                <ToastBar
                    toast={t}
                    style={{
                        backgroundColor: 'hsl(226 35% 49%)',
                        color: 'hsl(210 40% 96.1%)',
                        fontWeight: 'bold',
                    }}
                >
                    {({ icon, message }) => (
                        <>
                            {icon}
                            {message}
                            {t.type !== 'loading' && (
                                <button
                                    className="rounded-full bg-primary-light-purple px-2 py-1 "
                                    onClick={() => {
                                        toast.dismiss(t.id);
                                    }}
                                >
                                    <span className="text-primary-purple">
                                        X
                                    </span>
                                </button>
                            )}
                        </>
                    )}
                </ToastBar>
            )}
        </Toaster>
    );
};

export default CustomToaster;
