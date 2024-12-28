import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  return (
    <div className="flex flex-col items-center">
      <ClipLoader color="#1A202C" size={150} />
      <p className="text-2xl text-gray-700 mt-4">
        {[..."Loading..."].map((letter, index) => (
          <span
            key={index}
            className={`inline-block animate-pulse uppercase text-[#1A202C] font-bold text-2xl`}
            style={{ animationDelay: `${index * 0.1}s` }}>
            {letter}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Loading;
