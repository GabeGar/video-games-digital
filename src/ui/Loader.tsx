const Loader = () => {
    return (
        // inset-0 class = top,left,bottom,right ---> 0 ---> in order to overlay the screen.
        <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-[2px]">
            <div className="loader"></div>
        </div>
    );
};

export default Loader;
