const ToolsCards = ({ data }) => {
  return (
    <div className="flex">
      {data.map((result, i) => (
        <div key={i} className="flex flex-col bg-blue-200 p-2 rounded-md mr-3">
          <div className="px-10">
            <p className="text-5xl flex justify-center">{result.icon}</p>
            <p className={`${result.color}`}>{result.tech}</p>
          </div>
          <div className="bg-white">
            <p
              style={{ width: `${result.level}%` }}
              className="bg-blue-900 h-1 rounded-md"
            ></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToolsCards;
