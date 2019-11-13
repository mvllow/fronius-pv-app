var selected,
    snap_initialCost,
    snap_totalCost,
    snap_totalFactor,
    micro_initialCost,
    micro_totalCost,
    micro_totalFactor,
    typical_initialCost,
    typical_totalCost,
    typical_totalFactor,
    gas = 3.5;

function toggle(id) {
    "use strict";

    var bSnap = document.getElementById("bSnap"),
        bMicro = document.getElementById("bMicro"),
        bTypical = document.getElementById("bTypical"),
        priceSnap = document.getElementById("priceSnap"),
        priceMicro = document.getElementById("priceMicro"),
        priceTypical = document.getElementById("priceTypical");

    bSnap.style.borderColor = "";
    bMicro.style.borderColor = "";
    bTypical.style.borderColor = "";
    priceSnap.style.display = "none";
    priceMicro.style.display = "none";
    priceTypical.style.display = "none";

    if (id === "bSnap") {
        bSnap.style.borderColor = "#e2001a";
        priceSnap.style.display = "";
    }

    if (id === "bMicro") {
        bMicro.style.borderColor = "#e2001a";
        priceMicro.style.display = "";
    }

    if (id === "bTypical") {
        bTypical.style.borderColor = "#e2001a";
        priceTypical.style.display = "";
    }

    selected = id;
    calc();
}

function installer() {
    "use strict";

    var installerLaborRate = document.getElementById("installerLaborRate"),
        installerEngineeringRate = document.getElementById(
            "installerEngineeringRate"
        ),
        installerServiceTrips = document.getElementById(
            "installerServiceTrips"
        ),
        display = installerLaborRate.style.display === "none" ? "" : "none";

    installerLaborRate.style.display = display;
    installerEngineeringRate.style.display = display;
    installerServiceTrips.style.display = display;
}

function calc() {
    "use strict";

    var alert = document.getElementById("alert"),
        textCost = document.getElementById("textCost"),
        inputWatts = parseFloat(
            document.getElementById("inputWatts").value,
            10
        ),
        inputPriceSnap = parseFloat(
            document.getElementById("inputPriceSnap").value,
            10
        ),
        inputPriceMicro = parseFloat(
            document.getElementById("inputPriceMicro").value,
            10
        ),
        inputPriceTypical = parseFloat(
            document.getElementById("inputPriceTypical").value,
            10
        ),
        inputMiles = parseFloat(
            document.getElementById("inputMiles").value,
            10
        ),
        inputLaborRate = parseFloat(
            document.getElementById("inputLaborRate").value,
            10
        ),
        inputEngineeringRate = parseFloat(
            document.getElementById("inputEngineeringRate").value,
            10
        ),
        inputServiceTrips = parseFloat(
            document.getElementById("inputServiceTrips").value,
            10
        );

    var snap_tripsService = 1,
        snap_installersService = 1,
        snap_hoursService = 2,
        snap_hoursTroubleshoot = 1,
        snap_hoursInverter = 1,
        snap_componentsInverter = inputWatts * 0.077,
        snap_newInverter = 0,
        snap_hoursConduit = 0,
        snap_partsConduit = 0,
        snap_hoursEngineering = 0,
        snap_hoursUpdate = 0,
        snap_hoursReinspection = 0,
        snap_permitCost = 0,
        snap_hoursModule = 0,
        snap_partsModule = 0,
        snap_hoursBOS = 0,
        snap_partsBOS = 0;

    var micro_tripsService = inputWatts / 250 / 2,
        micro_installersService = 2,
        micro_hoursService = 2,
        micro_hoursTroubleshoot = 0,
        micro_hoursInverter = (inputWatts / 250) * 0.4,
        micro_componentsInverter = 0,
        micro_newInverter = inputWatts * 0.33,
        micro_hoursConduit = 0,
        micro_partsConduit = 0,
        micro_hoursEngineering = 2,
        micro_hoursUpdate = 3,
        micro_hoursReinspection = 0,
        micro_permitCost = 0,
        micro_hoursModule = 0,
        micro_partsModule = 0,
        micro_hoursBOS = (inputWatts / 250) * 0.1,
        micro_partsBOS = 0;

    var typical_tripsService = 2,
        typical_installersService = 1.5,
        typical_hoursService = 2,
        typical_hoursTroubleshoot = 0.5,
        typical_hoursInverter = 2,
        typical_componentsInverter = 0,
        typical_newInverter = inputWatts * 0.18,
        typical_hoursConduit = 1,
        typical_partsConduit = 20,
        typical_hoursEngineering = 2,
        typical_hoursUpdate = 2,
        typical_hoursReinspection = 10,
        typical_permitCost = 430,
        typical_hoursModule = (0.4 * inputWatts) / 250,
        typical_partsModule = inputWatts * 0.1,
        typical_hoursBOS = 0,
        typical_partsBOS = 0;

    var snap_varTroubleshoot = inputLaborRate * snap_hoursTroubleshoot,
        snap_varInverter =
            inputLaborRate * snap_hoursInverter +
            snap_componentsInverter +
            snap_newInverter,
        snap_varConduit =
            inputLaborRate * snap_hoursConduit + snap_partsConduit,
        snap_varEngineering = inputEngineeringRate * snap_hoursEngineering,
        snap_varUpdate = inputLaborRate * snap_hoursUpdate,
        snap_varReinspection =
            inputLaborRate * snap_hoursReinspection + snap_permitCost,
        snap_varModule = inputLaborRate * snap_hoursModule + snap_partsModule,
        snap_varBOS = inputLaborRate * snap_hoursBOS + snap_partsBOS,
        snap_varReconfiguration =
            snap_varTroubleshoot +
            snap_varInverter +
            snap_varConduit +
            snap_varEngineering +
            snap_varUpdate +
            snap_varReinspection +
            snap_varModule +
            snap_varBOS,
        snap_varServiceFees =
            inputLaborRate *
                snap_tripsService *
                snap_installersService *
                snap_hoursService +
            snap_varReconfiguration +
            inputMiles * gas;

    var micro_varTroubleshoot = inputLaborRate * micro_hoursTroubleshoot,
        micro_varInverter =
            inputLaborRate * micro_hoursInverter +
            micro_componentsInverter +
            micro_newInverter,
        micro_varConduit =
            inputLaborRate * micro_hoursConduit + micro_partsConduit,
        micro_varEngineering = inputEngineeringRate * micro_hoursEngineering,
        micro_varUpdate = inputLaborRate * micro_hoursUpdate,
        micro_varReinspection =
            inputLaborRate * micro_hoursReinspection + micro_permitCost,
        micro_varModule =
            inputLaborRate * micro_hoursModule + micro_partsModule,
        micro_varBOS = inputLaborRate * micro_hoursBOS + micro_partsBOS,
        micro_varReconfiguration =
            micro_varTroubleshoot +
            micro_varInverter +
            micro_varConduit +
            micro_varEngineering +
            micro_varUpdate +
            micro_varReinspection +
            micro_varModule +
            micro_varBOS,
        micro_varServiceFees =
            inputLaborRate *
                micro_tripsService *
                micro_installersService *
                micro_hoursService +
            micro_varReconfiguration +
            inputMiles * gas;

    var typical_varTroubleshoot = inputLaborRate * typical_hoursTroubleshoot,
        typical_varInverter =
            inputLaborRate * typical_hoursInverter +
            typical_componentsInverter +
            typical_newInverter,
        typical_varConduit =
            inputLaborRate * typical_hoursConduit + typical_partsConduit,
        typical_varEngineering =
            inputEngineeringRate * typical_hoursEngineering,
        typical_varUpdate = inputLaborRate * typical_hoursUpdate,
        typical_varReinspection =
            inputLaborRate * typical_hoursReinspection + typical_permitCost,
        typical_varModule =
            inputLaborRate * typical_hoursModule + typical_partsModule,
        typical_varBOS = inputLaborRate * typical_hoursBOS + typical_partsBOS,
        typical_varReconfiguration =
            typical_varTroubleshoot +
            typical_varInverter +
            typical_varConduit +
            typical_varEngineering +
            typical_varUpdate +
            typical_varReinspection +
            typical_varModule +
            typical_varBOS,
        typical_varServiceFees =
            inputLaborRate *
                typical_tripsService *
                typical_installersService *
                typical_hoursService +
            typical_varReconfiguration +
            inputMiles * gas;

    snap_initialCost = inputWatts * inputPriceSnap;
    snap_totalCost =
        inputWatts * inputPriceSnap + snap_varServiceFees + inputServiceTrips;
    snap_totalFactor = (snap_totalCost / (inputWatts * inputPriceSnap)).toFixed(
        2
    );

    micro_initialCost = inputWatts * inputPriceMicro;
    micro_totalCost =
        inputWatts * inputPriceMicro + micro_varServiceFees + inputServiceTrips;
    micro_totalFactor = (
        micro_totalCost /
        (inputWatts * inputPriceMicro)
    ).toFixed(2);

    typical_initialCost = inputWatts * inputPriceTypical;
    typical_totalCost =
        inputWatts * inputPriceTypical +
        typical_varServiceFees +
        inputServiceTrips;
    typical_totalFactor = (
        typical_totalCost /
        (inputWatts * inputPriceTypical)
    ).toFixed(2);

    if (selected === "bSnap") {
        textCost.innerHTML = "$ " + snap_totalCost.toFixed(0);
        document.getElementById("inputServiceFees").value =
            "$ " + snap_varServiceFees.toFixed(0);
        document.getElementById("inputInverter").value =
            "$ " + snap_varInverter.toFixed(0);
        document.getElementById("inputConduit").value =
            "$ " + snap_varConduit.toFixed(0);
        document.getElementById("inputEngineering").value =
            "$ " + snap_varEngineering.toFixed(0);
        document.getElementById("inputUpdate").value =
            "$ " + snap_varUpdate.toFixed(0);
        document.getElementById("inputReinspection").value =
            "$ " + snap_varReinspection.toFixed(0);
        document.getElementById("inputBOS").value =
            "$ " + snap_varBOS.toFixed(0);
        alert.style.display = "none";
    } else if (selected === "bMicro") {
        textCost.innerHTML = "$ " + micro_totalCost.toFixed(0);
        document.getElementById("inputServiceFees").value =
            "$ " + micro_varServiceFees.toFixed(0);
        document.getElementById("inputInverter").value =
            "$ " + micro_varInverter.toFixed(0);
        document.getElementById("inputConduit").value =
            "$ " + micro_varConduit.toFixed(0);
        document.getElementById("inputEngineering").value =
            "$ " + micro_varEngineering.toFixed(0);
        document.getElementById("inputUpdate").value =
            "$ " + micro_varUpdate.toFixed(0);
        document.getElementById("inputReinspection").value =
            "$ " + micro_varReinspection.toFixed(0);
        document.getElementById("inputBOS").value =
            "$ " + micro_varBOS.toFixed(0);
        alert.style.display = "none";
    } else if (selected === "bTypical") {
        textCost.innerHTML = "$ " + typical_totalCost.toFixed(0);
        document.getElementById("inputServiceFees").value =
            "$ " + typical_varServiceFees.toFixed(0);
        document.getElementById("inputInverter").value =
            "$ " + typical_varInverter.toFixed(0);
        document.getElementById("inputConduit").value =
            "$ " + typical_varConduit.toFixed(0);
        document.getElementById("inputEngineering").value =
            "$ " + typical_varEngineering.toFixed(0);
        document.getElementById("inputUpdate").value =
            "$ " + typical_varUpdate.toFixed(0);
        document.getElementById("inputReinspection").value =
            "$ " + typical_varReinspection.toFixed(0);
        document.getElementById("inputBOS").value =
            "$ " + typical_varBOS.toFixed(0);
        alert.style.display = "none";
    }

    if (
        isNaN(snap_totalCost) === false &&
        isNaN(micro_totalCost) === false &&
        isNaN(typical_totalCost) === false
    ) {
        chart();
    } else {
        alert.style.display = "";
        alert.scrollIntoView();
    }
}

function chart() {
    "use strict";

    var ctx = document.getElementById("chart").getContext("2d");

    var data = {
        labels: ["SnapINverter", "Micro-Inverter", "Typical String Inverter"],
        datasets: [
            {
                fillColor: "#888",
                strokeColor: "#fff",
                data: [snap_initialCost, micro_initialCost, typical_initialCost]
            },
            {
                fillColor: "#333",
                strokeColor: "#fff",
                data: [snap_totalCost, micro_totalCost, typical_totalCost]
            }
        ]
    };

    new Chart(ctx).Bar(data);
}
