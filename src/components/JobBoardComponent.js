import React from "react";

const JobBoardComponent = ({ job, handleTagClick }) => {

    const langAndTools = [job.role, job.level];

    if(job.languages) {
        langAndTools.push(...job.languages)
    }

    if(job.tools) {
        langAndTools.push(...job.tools)
    }


    return (
        <div className={`flex flex-col lg:flex-row bg-white shadow-lg my-16 lg:my-8 mx-10 lg:mx-32 p-6 rounded ${job.featured && `border-solid border-teal-500 border-l-8 `}`}>
            <div>
                <img className="-mt-16 lg:mt-0 mb-4 lg:mb-0 w-20 h-20" src={job.logo} alt={job.company} />
            </div>
            <div className="flex flex-col justify-between ml-4">
                <h3 className="font-bold text-teal-500">
                    {job.company}
                    {job.new && (<span className="text-white bg-teal-500 m-2 py-1 px-2 rounded-full">NEW!</span>)}
                    {job.featured && (<span className="text-white bg-gray-800 m-2 py-1 px-2 rounded-full">FEATURED</span>)}
                </h3>
                <h2 className="font-bold tracking-wide hover:text-teal-500 cursor-pointer text-xl my-2 lg:my-0">{job.position}</h2>
                <p className="text-gray-700">
                    {job.postedAt} * {job.contract} * {job.location}
                </p>
            </div>
            <div className="flex flex-wrap items-center m-4 pt-4 border-t border-gray-500 border-solid lg:m-0 lg:pt-0 lg:border-t-0 lg:border-none lg:ml-auto">
                {langAndTools ? langAndTools.map((langAndTool) =>
                    <span onClick={() => handleTagClick(langAndTool)} className="cursor-pointer text-teal-500 hover:text-white bg-teal-100 hover:bg-teal-500 font-bold mr-4 mb-4 lg:mb-0 lg:m-2 p-2 rounded">{langAndTool}</span>) : ''}
            </div>
        </div>
    )
}
export default JobBoardComponent