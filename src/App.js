import JobBoardComponent from "./components/JobBoardComponent";
import data from "./assets/data.json"
import React, { useState, useEffect } from "react";
import bgdesktop from "./assets/images/bg-header-desktop.svg";

function App() {
  const [jobs, setJobs] = useState([])
  const [filters, setFilters] = useState([])

  useEffect(() => {
    setJobs(data);
  }, []);

  const filterFunc = ({ role, level, tools, languages }) => {
    const tags = [role, level];

    if (filters.length === 0) {
      return true
    }

    if (languages) {
      tags.push(...languages)
    }

    if (tools) {
      tags.push(...tools)
    }

    return filters.every((filter) => tags.includes(filter))
  }

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;

    setFilters([...filters, tag])
  }

  const filteredJobs = jobs.filter(filterFunc);

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter(f => f !== passedFilter))
  }

  const clearFilters = () => {
    setFilters([])
  }


  return (
    <div className="App">
      <header className="bg-teal-500 mb-12">
        <img src={bgdesktop} alt="bg"/>
      </header>
      {filters.length > 0 && (
        <div className="flex flex-wrap bg-white shadow-lg 
      -my-20 mb-16 lg:-my-20 lg:mb-8 mx-10 lg:mx-32 p-6 rounded z-10 relative" >
          {filters.map((filter) => (
            <span
              className="font-bold m-2 lg:m-2 p-2 rounded">
              <span className="text-teal-500 bg-teal-100 p-2 rounded-l">{filter}</span>
              <span className="bg-teal-500 cursor-pointer hover:bg-gray-800 text-white p-2 rounded-r font-extrabold"
              onClick={() => handleFilterClick(filter)}>X</span>
            </span>
          ))}

          <button onClick={clearFilters}
            className="font-bold text-gray-500 ml-auto">Clear</button>
        </div>
      )}
      {jobs.length === 0 ? (
        <p>Jobs are fetching...</p>
      ) : (
        filteredJobs.map((job) => (
          <JobBoardComponent
            job={job}
            key={job.id}
            handleTagClick={handleTagClick}
          />))
      )}
    </div>
  );
}

export default App;
