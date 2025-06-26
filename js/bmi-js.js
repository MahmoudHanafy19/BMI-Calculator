document.getElementById('Calc').addEventListener('click', function () {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);

    // Validate inputs
    if (!weight || !heightCm) {
        alert('Please fill in both height and weight.');
        document.getElementById('result').textContent = '0';
        document.getElementById('status').textContent = '...';
        return;
    }

    const heightM = heightCm / 100; // Convert cm to meters
    const bmi = weight / (heightM * heightM);

    const resultEl = document.getElementById('result');
    const statusEl = document.getElementById('status');

    resultEl.textContent = bmi.toFixed(2);

    // Display BMI status
    if (bmi < 18.5) {
        statusEl.textContent = 'underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        statusEl.textContent = 'normal weight';
    } else if (bmi > 24.9 && bmi <= 29.9) {
        statusEl.textContent = 'overweight';
    } else if (bmi > 29.9 && bmi <= 34.9) {
        statusEl.textContent = 'obese (Class 1)';
    } else if (bmi > 34.9 && bmi <= 39.9) {
        statusEl.textContent = 'obese (Class 2)';
    } else {
        statusEl.textContent = 'obese (Class 3)';
    }
});
