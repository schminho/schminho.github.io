---
layout: default
title: Convert Standard Values
permalink: /projects/convert-standard-values/
---

<div id="converter-app">
    <h1>Convert Standard Values</h1>
    <p>Fill any field or use the slider to see where the values fall on a typical bell curve.</p>

    <label for="z-score">Z-Score:</label>
    <input type="number" id="z-score" placeholder="Enter z-score">

    <label for="t-score">T-Score:</label>
    <input type="number" id="t-score" placeholder="Enter t-score">

    <label for="iq-score">IQ-Score:</label>
    <input type="number" id="iq-score" placeholder="Enter IQ score">

    <div id="slider-container">
        <label for="z-slider">Adjust Z-Score:</label>
        <input type="range" id="z-slider" min="-3" max="3" step="0.1" value="0">
    </div>

    <canvas id="bell-curve" width="300" height="150"></canvas>
</div>

<script src="/assets/js/convert-standard-values.js"></script>
