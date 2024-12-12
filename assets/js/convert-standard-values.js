document.addEventListener("DOMContentLoaded", function () {
    const zScoreInput = document.getElementById("z-score");
    const tScoreInput = document.getElementById("t-score");
    const iqScoreInput = document.getElementById("iq-score");

    function updateValues(source) {
        const zScore = parseFloat(zScoreInput.value);
        const tScore = parseFloat(tScoreInput.value);
        const iqScore = parseFloat(iqScoreInput.value);

        if (source === "z-score" && !isNaN(zScore)) {
            tScoreInput.value = (50 + zScore * 10).toFixed(2);
            iqScoreInput.value = (100 + zScore * 15).toFixed(2);
        } else if (source === "t-score" && !isNaN(tScore)) {
            const zFromT = (tScore - 50) / 10;
            zScoreInput.value = zFromT.toFixed(2);
            iqScoreInput.value = (100 + zFromT * 15).toFixed(2);
        } else if (source === "iq-score" && !isNaN(iqScore)) {
            const zFromIQ = (iqScore - 100) / 15;
            zScoreInput.value = zFromIQ.toFixed(2);
            tScoreInput.value = (50 + zFromIQ * 10).toFixed(2);
        }
    }

    zScoreInput.addEventListener("input", () => updateValues("z-score"));
    tScoreInput.addEventListener("input", () => updateValues("t-score"));
    iqScoreInput.addEventListener("input", () => updateValues("iq-score"));
});
