import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PageNotFound = () => {
    const [countdown, setCountdown] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (countdown > 0) {
                setCountdown(countdown - 1);
            } else {
                navigate(-1);
            }
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [countdown, navigate]);

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-primary-purple px-3">
            <div className="max-w-lg rounded-lg bg-white p-8 shadow-md">
                <h1 className="mb-3 flex flex-col items-center text-3xl font-bold text-primary-purple">
                    <p>🚧 404 🚧</p>
                    <p>Page Not Found</p>
                </h1>
                <p className="text-center text-lg">
                    Sorry, the page you are looking for does not exist.
                </p>
                <p className="mt-2 text-center">
                    Redirecting in{' '}
                    <span className="font-bold">{countdown}</span> seconds...
                </p>
                <p className="mt-4 text-center">
                    <button
                        onClick={handleGoBack}
                        className="font-semibold text-primary-purple"
                    >
                        🔙 Go Back
                    </button>
                </p>
            </div>
        </div>
    );
};

export default PageNotFound;
