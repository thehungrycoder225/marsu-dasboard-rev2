import Chart from 'react-apexcharts';
import { useState, useEffect } from 'react';
import { enrollmentData } from '../../../data/data-source';

export default function Charts() {
  const [branchOverviewData, setBranchOverviewData] = useState({
    categories: [],
    series: [],
  });
  const [programDrilldownData, setProgramDrilldownData] = useState([]);
  const [crossBranchData, setCrossBranchData] = useState([]);
  const [heatmapData, setHeatmapData] = useState({
    categories: [],
    series: [],
  });
  const [boacTop6Data, setBoacTop6Data] = useState({
    categories: [],
    series: [],
  });

  useEffect(() => {
    // Process data for Branch-Level Overview (Stacked Bar Chart)
    const branches = enrollmentData.map((branch) => branch.branch_name);
    const priorityData = enrollmentData.map((branch) =>
      branch.series[0].data.reduce((sum, value) => sum + (value || 0), 0)
    );
    const nonPriorityData = enrollmentData.map((branch) =>
      branch.series[1].data.reduce((sum, value) => sum + (value || 0), 0)
    );

    setBranchOverviewData({
      categories: branches,
      series: [
        { name: 'Priority Program', data: priorityData },
        { name: 'Non-Priority Program', data: nonPriorityData },
      ],
    });

    // Process data for Program-Level Drilldown (Grouped Bar Chart per branch)
    const drilldownData = enrollmentData.map((branch) => ({
      branchName: branch.branch_name,
      categories: branch.categories,
      series: branch.series.map((s) => ({
        name: s.name,
        data: s.data.map((value) => value || 0),
      })),
    }));

    setProgramDrilldownData(drilldownData);

    // Process data for Cross-Branch Program Popularity (Treemap)
    const programPopularity = {};
    enrollmentData.forEach((branch) => {
      branch.categories.forEach((category, index) => {
        if (!programPopularity[category]) {
          programPopularity[category] = 0;
        }
        programPopularity[category] += branch.series[0].data[index] || 0;
        programPopularity[category] += branch.series[1].data[index] || 0;
      });
    });

    const treemapData = Object.entries(programPopularity).map(
      ([name, value]) => ({
        x: name,
        y: value,
      })
    );

    setCrossBranchData(treemapData);

    // Process data for Heatmap
    const heatmapCategories = enrollmentData.map(
      (branch) => branch.branch_name
    );
    const heatmapSeries = enrollmentData[0].categories.map(
      (category, index) => ({
        name: category,
        data: enrollmentData.map(
          (branch) =>
            (branch.series[0].data[index] || 0) +
            (branch.series[1].data[index] || 0)
        ),
      })
    );

    setHeatmapData({ categories: heatmapCategories, series: heatmapSeries });

    // Process data for Boac Branch (Top 6 Categories)
    const boacBranch = enrollmentData.find(
      (branch) => branch.branch_name === 'Boac'
    );
    if (boacBranch) {
      const top6Indices = boacBranch.series[0].data
        .map((value, index) => ({ value: value || 0, index }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 6)
        .map((item) => item.index);

      const top6Categories = top6Indices.map(
        (index) => boacBranch.categories[index]
      );
      const top6PriorityData = top6Indices.map(
        (index) => boacBranch.series[0].data[index] || 0
      );
      const top6NonPriorityData = top6Indices.map(
        (index) => boacBranch.series[1].data[index] || 0
      );

      setBoacTop6Data({
        categories: top6Categories,
        series: [
          { name: 'Priority Program', data: top6PriorityData },
          { name: 'Non-Priority Program', data: top6NonPriorityData },
        ],
      });
    }
  }, []);

  const branchOverviewOptions = {
    chart: {
      type: 'bar',
      stacked: true,
      height: 350,
    },
    fill: {
      colors: ['#660033', '#FBBF24'],
    },
    xaxis: {
      categories: branchOverviewData.categories,
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
  };

  const programDrilldownOptions = (categories) => ({
    chart: {
      type: 'bar',
      height: 350,
    },
    xaxis: {
      categories,
    },
    fill: {
      colors: ['#660033', '#FBBF24'],
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  });

  const treemapOptions = {
    chart: {
      type: 'treemap',
      height: 350,
    },
    legend: {
      show: true,
    },
    fill: {
      colors: ['#660033', '#FBBF24'],
    },
  };

  const heatmapOptions = {
    chart: {
      type: 'heatmap',
      height: 350,
    },
    xaxis: {
      categories: heatmapData.categories,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      colors: ['#660033', '#FBBF24'],
    },
  };

  const boacTop6Options = {
    chart: {
      type: 'bar',
      height: 350,
    },
    xaxis: {
      categories: boacTop6Data.categories,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    fill: {
      colors: ['#660033', '#FBBF24'],
    },
    dataLabels: {
      enabled: true,
    },
  };

  return (
    <div className='w-full '>
      {/* Branch-Level Overview */}
      <div className='mb-12'>
        <h2 className='text-md font-bold mb-4'> Overview</h2>
        <Chart
          options={branchOverviewOptions}
          series={branchOverviewData.series}
          type='bar'
          height={350}
        />
      </div>
      {/* Cross-Branch Program Popularity */}
      <div className='mb-12'>
        <h2 className='text-md font-bold mb-4'>
          Cross-Branch Program Popularity
        </h2>
        <Chart
          options={treemapOptions}
          series={[{ data: crossBranchData }]}
          type='treemap'
          height={350}
        />
      </div>

      <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 xl:gap-x-8'>
        {/* Program-Level Drilldown */}
        {programDrilldownData.map((chart, index) => (
          <div key={index} className='mb-12'>
            <h2 className='text-md font-bold mb-4'>
              Branch: {chart.branchName}
            </h2>
            <Chart
              options={programDrilldownOptions(chart.categories)}
              series={chart.series}
              type='bar'
              height={350}
            />
          </div>
        ))}
      </div>

      {/* Heatmap */}
      {/* <div className='mb-12'>
        <h2 className='text-md font-bold mb-4'>Program Heatmap</h2>
        <Chart
          options={heatmapOptions}
          series={heatmapData.series}
          type='heatmap'
          height={350}
        />
      </div> */}

      {/* Boac Branch Top 6 Categories */}
      {/* <div className='mb-12'>
        <h2 className='text-md font-bold mb-4'>
          Boac Branch: Top 6 Categories
        </h2>
        <Chart
          options={boacTop6Options}
          series={boacTop6Data.series}
          type='bar'
          height={350}
        />
      </div> */}
    </div>
  );
}
