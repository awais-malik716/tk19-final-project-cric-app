function roundOffMarks(score){
    let result = score;
    if(score >= 38){
        const remainder = score % 5;
        if(remainder){
            result += 5 - remainder;
        }
    }
    return result;
}

export default roundOffMarks;