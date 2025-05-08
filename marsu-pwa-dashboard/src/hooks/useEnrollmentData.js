// hooks/useEnrollmentData.js
import { useState, useEffect } from 'react';
// Removed unused import of data

export const useEnrollmentData = () => {
    const [enrollmentData, setEnrollmentData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // fetch data from public folder
                // Note: Ensure that the path is correct based on your project structure
                // and that the JSON file is accessible.

                const response = await fetch('../data/enrollments_processed.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                setEnrollmentData(json.time_series);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
        console.log('Data fetched:', enrollmentData);
    }, []);

    return { data: enrollmentData, loading };
}