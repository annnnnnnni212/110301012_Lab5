document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("grades-form");
    const mathInput = document.getElementById("math-grade");
    const englishInput = document.getElementById("english-grade");
    const tableBody = document.querySelector("#grades-table tbody");
    const mathAverageCell = document.getElementById("math-average");
    const englishAverageCell = document.getElementById("english-average");
    const overallAverageCell = document.getElementById("overall-average");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const mathGrade = parseFloat(mathInput.value);
        const englishGrade = parseFloat(englishInput.value);
        const average = ((mathGrade + englishGrade) / 2).toFixed(2);

        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${mathGrade}</td>
            <td>${englishGrade}</td>
            <td>${average}</td>
        `;

        tableBody.appendChild(newRow);
        mathInput.value = "";
        englishInput.value = "";

        updateAverages();
    });

    function updateAverages() {
        const rows = tableBody.querySelectorAll("tr");
        let totalMath = 0;
        let totalEnglish = 0;
        let totalOverall = 0;

        rows.forEach(row => {
            const cells = row.querySelectorAll("td");
            totalMath += parseFloat(cells[0].textContent);
            totalEnglish += parseFloat(cells[1].textContent);
            totalOverall += parseFloat(cells[2].textContent);
        });

        const rowCount = rows.length;
        mathAverageCell.textContent = (totalMath / rowCount).toFixed(2);
        englishAverageCell.textContent = (totalEnglish / rowCount).toFixed(2);
        overallAverageCell.textContent = (totalOverall / rowCount).toFixed(2);
    }
});
