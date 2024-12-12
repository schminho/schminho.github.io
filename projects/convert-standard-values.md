---
layout: default
title: Convert Standard Values
permalink: /projects/convert-standard-values/
---

<div id="converter-app">
    <h1>Convert Standard Values</h1>
    <p>Use this tool to convert between z-score, t-score, and IQ score.</p>
    <label for="input-score">Enter a z-score:</label>
    <input type="number" id="input-score" placeholder="Enter z-score">
    <button id="convert-button">Convert</button>

    <h2>Results:</h2>
    <p>T-score: <span id="t-score-result">-</span></p>
    <p>IQ-score: <span id="iq-score-result">-</span></p>
</div>

<script src="/assets/js/convert-standard-values.js"></script>
