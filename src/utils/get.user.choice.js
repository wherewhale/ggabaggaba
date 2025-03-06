import supabase from './db.config.js';

export async function getUserResult() {
    const { data, error } = await supabase
        .from('TEST')
        .select('q1, q2, q3, q4, q5, q6, q7, q8');

    if (error) {
        console.error("Error fetching data:", error);
        return null;
    }

    const frequencyMap = {};

    ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8'].forEach(col => {
        frequencyMap[col] = { 1: 0, 2: 0, 3: 0, 4: 0 };
    });

    data.forEach(row => {
        Object.keys(row).forEach(col => {
            const value = row[col];
            if (value !== null && frequencyMap[col].hasOwnProperty(value)) {
                frequencyMap[col][value] += 1;
            }
        });
    });

    return frequencyMap;
}