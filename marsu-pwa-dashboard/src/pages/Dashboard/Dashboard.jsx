import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import DashboardHeader from './components/DashboardHeader';
import SummarySection from './components/Summary';
import ResearchSummary from './components/ResearchSummary';

function Dashboard() {
  const [filters, setFilters] = useState({
    year: new Date().getFullYear(),
    branch: null,
  });
  const [data, setData] = useState(null);
  const [boardExamData, setBoardExamData] = useState(null);
  const [researchData, setResearchData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, setDataCallback) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setDataCallback(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData('/enrollments_processed.json', setData);
    fetchData('/board_exams.json', setBoardExamData);
    fetchData('/research.json', setResearchData);
  }, []);

  console.log({
    enrollments_processed: data,
    board_exams: boardExamData,
    research: researchData,
  });

  if (loading) {
    return <div className='text-center'>Loading...</div>;
  }

  if (error) {
    return <div className='text-center text-red-500'>Error: {error}</div>;
  }

  if (!data || data.length === 0) {
    return (
      <div className='text-center text-red-500'>
        No data available for the selected filters.
      </div>
    );
  }

  return (
    <div className='antialiased'>
      <DashboardHeader />
      <div>
        <Navigation />
      </div>

      <div className='px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='mb-4 flex justify-between'>
          {/* Placeholder for future filter or export buttons */}
        </div>

        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
            <div className='flex items-center justify-between'>
              <h2 className='text-lg font-semibold leading-6 text-gray-900'>
                Enrollment Performance Summary
              </h2>
            </div>
          </div>

          <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
            <div className='w-full'>
              <div className='summary-cards'>
                <div className='summary-card'>
                  <SummarySection data={data} />
                </div>
                <div className='summary-card'></div>
              </div>
            </div>
          </div>
        </div>

        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
            <div className='flex items-center justify-between'></div>
          </div>

          <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
            <div className='w-full'>
              <div className='summary-cards'>
                <ResearchSummary
                  data={researchData}
                  filteredData={
                    researchData?.research_data?.filter(
                      (item) => item.year === filters.year
                    ) || []
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
