const SmallLoader = () => {
    return (
        <div className="absolute left-1/2 top-60 flex -translate-x-1/2 transform gap-2 rounded-lg bg-slate-100 p-2 text-[calc(.75rem+1dvw)] font-semibold tracking-wide text-primary-purple sm:w-[15rem] lg:w-[35rem] xl:w-[50rem]">
            <div className="flex w-full items-center justify-center gap-2">
                <div className="loader"></div>
                <p>Loading...</p>
            </div>
        </div>
    );
};

export default SmallLoader;
