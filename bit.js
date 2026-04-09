const speeds = {
    piyoda: 5,
    velosiped: 20,
    mashina: 70,
    samolyot: 800
};

function calculate() {
    let masofa =(document.getElementById("distance").value);

    if (isNaN(masofa) || masofa <= 0) {
        return;
    }

    document.getElementById("res-piyoda").textContent = (masofa / speeds.piyoda).toFixed(1) + " soat";
    document.getElementById("res-velo").textContent = (masofa / speeds.velosiped).toFixed(1) + " soat";
    document.getElementById("res-mashina").textContent = (masofa / speeds.mashina).toFixed(1) + " soat";
    document.getElementById("res-samolyot").textContent = (masofa / speeds.samolyot).toFixed(1) + " soat";
}
