document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convert-button");
    const inputScore = document.getElementById("input-score");
    const tScoreResult = document.getElementById("t-score-result");
    const iqScoreResult = document.getElementById("iq-score-result");

    convertButton.addEventListener("click", function () {
        const zScore = parseFloat(inputScore.value);
        if (isNaN(zScore)) {
            alert("Please enter a valid z-score.");
            return;
        }

        // Convert z-score to t-score and IQ-score
        const tScore = 50 + (zScore * 10);
        const iqScore = 100 + (zScore * 15);

        // Update results
        tScoreResult.textContent = tScore.toFixed(2);
        iqScoreResult.textContent = iqScore.toFixed(2);
    });
});
