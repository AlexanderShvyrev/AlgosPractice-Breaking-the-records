// Complete the breakingRecords function in the editor below. It must return an integer array containing the numbers of times she broke her records. Index 0 is for breaking most points records, and index 1 is for breaking least points records.

// breakingRecords has the following parameter(s):

// scores: an array of integers

function breakingRecords(scores) {
    let highScore = 0
    let lowScore = 0
    let hIndx = 0
    let lIndx = 0
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > scores[hIndx]) {
            highScore += 1
            hIndx = i
        }
        if (scores[i] < scores[lIndx]) {
            lowScore += 1
            lIndx = i
        }
    }
    return [highScore, lowScore]

}