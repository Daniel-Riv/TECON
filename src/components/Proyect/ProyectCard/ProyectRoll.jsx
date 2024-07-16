const ProyectRoll = ({ imgSrc, imgAlt, title, tags=[], description }) => (
    <div className="flex flex-col md:flex-row bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden">
      <img className="w-full md:w-1/3 h-48 object-cover" src={imgSrc} alt={imgAlt} />
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{title}</h3>
          <div className="flex space-x-2 mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">{description}</p>
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg self-end transition duration-300 ease-in-out hover:bg-blue-600">
          View Project
        </button>
      </div>
    </div>
  );

export default ProyectRoll;