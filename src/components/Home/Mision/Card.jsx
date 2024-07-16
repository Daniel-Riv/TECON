const Card = ({ title, content }) => {
  return (
    <div className="bg-white p-6 m-3 rounded-lg shadow-lg flex-grow" style={{ height: '400px' }}>
      <h1 className="text-2xl font-semibold uppercase  text-[#0fa968]">{title}</h1>
      <p className="mt-3 text-base text-gray-900 text-justify mx-auto sm:mt-5 max-w-3xl sm:text-lg md:mt-5 md:text-xl">{content}</p>
    </div>
  );
};

export default Card;
