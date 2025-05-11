export default function loader() {



    return (
        <div className="flex flex-row gap-2 justify-center items-center h-[100%] translate-y-20">
            <div className="w-4 h-4 rounded-full bg-black  animate-bounce [animation-delay:.7s]"></div>
            <div className="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:.7s]"></div>
        </div>
    );
}