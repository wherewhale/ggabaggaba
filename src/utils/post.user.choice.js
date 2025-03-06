import supabase from './db.config.js';

export async function insertAnswer(answer) {
    try {
        const dataToInsert = {
            q1: answer[0],
            q2: answer[1],
            q3: answer[2],
            q4: answer[3],
            q5: answer[4],
            q6: answer[5],
            q7: answer[6],
            q8: answer[7]
        };

        const { error: insertError } = await supabase
            .from('TEST')
            .insert(dataToInsert);

        if (insertError) {
            console.error("❌ 데이터 삽입 오류:", insertError);
        } else {
            console.log("✅ 데이터 삽입 성공");
        }
    } catch (err) {
        console.error("❌ 예외 발생:", err);
    }
}