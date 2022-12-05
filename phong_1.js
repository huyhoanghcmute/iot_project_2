//Get source from Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCYpOOxj0aPA8aeRXiyYv7i84zUQcLKahc",
    authDomain: "tt-iot-ute-bdh.firebaseapp.com",
    databaseURL: "https://tt-iot-ute-bdh-default-rtdb.firebaseio.com",
    projectId: "tt-iot-ute-bdh",
    storageBucket: "tt-iot-ute-bdh.appspot.com",
    messagingSenderId: "912842324876",
    appId: "1:912842324876:web:9b726d3e4ce37ecd64b4a9"
  };

firebase.initializeApp(firebaseConfig);

//Get a reference to the database service
var database = firebase.database();

//=======================FAN===============================
var btnOn = document.getElementById("btnOnId_01");
var btnOff = document.getElementById("btnOffId_01");
btnOn.onclick = function () {
    database.ref("/ROOM01").update({
        led01: "1",
    });
};

btnOff.onclick = function () {
    database.ref("/ROOM01").update({
        led01: "0",
    });
};
//AUTO UPDATE
database.ref("/ROOM01/led01").on("value", function (snapshot) {
    if (snapshot.exists()) {
        var ss = snapshot.val();
        if (ss == 1) {
            document.getElementById("denId_01").src = "./img/quat_on.jpg";
            document.getElementById("denId_01").style.borderColor =
                "rgba(230, 240, 35, 0.929)";
            document.getElementById("btnOnId_01").style.backgroundColor =
                "rgba(247,179,33,0.98)";
            document.getElementById("btnOffId_01").style.backgroundColor =
                "rgba(100,100,111,0.2)";
        } else {
            document.getElementById("denId_01").src = "./img/quat_off.jpg";
            document.getElementById("denId_01").style.borderColor =
                "rgba(105, 103, 93, 0.096)";
            document.getElementById("btnOnId_01").style.backgroundColor =
                "rgba(100,100,111,0.2)";
            document.getElementById("btnOffId_01").style.backgroundColor =
                "rgba(247,179,33,0.98)";
        }
    } else console.log("No data available!");
});

//=======================DEN 1===============================
var btnOn = document.getElementById("btnOnId_02");
var btnOff = document.getElementById("btnOffId_02");

btnOn.onclick = function () {
    database.ref("/ROOM01").update({
        led02: "1",
    });
};

btnOff.onclick = function () {
    database.ref("/ROOM01").update({
        led02: "0",
    });
};
//AUTO UPDATE
database.ref("/ROOM01/led02").on("value", function (snapshot) {
    if (snapshot.exists()) {
        var ss = snapshot.val();
        if (ss == 1) {
            document.getElementById("denId_02").src = "./img/light_bulb.png";
            document.getElementById("denId_02").style.borderColor =
                "rgba(230, 240, 35, 0.929)";
            document.getElementById("btnOnId_02").style.backgroundColor =
                "rgba(247,179,33,0.98)";
            document.getElementById("btnOffId_02").style.backgroundColor =
                "rgba(100,100,111,0.2)";
        } else {
            document.getElementById("denId_02").src =
                "./img/light_bulb_off.png";
            document.getElementById("denId_02").style.borderColor =
                "rgba(105, 103, 93, 0.096)";
            document.getElementById("btnOnId_02").style.backgroundColor =
                "rgba(100,100,111,0.2)";
            document.getElementById("btnOffId_02").style.backgroundColor =
                "rgba(247,179,33,0.98)";
        }
    } else console.log("No data available!");
});

//=======================DEN 2===============================
var btnOn = document.getElementById("btnOnId_03");
var btnOff = document.getElementById("btnOffId_03");

btnOn.onclick = function () {
    database.ref("/ROOM01").update({
        led03: "1",
    });
};

btnOff.onclick = function () {
    database.ref("/ROOM01").update({
        led03: "0",
    });
};
//AUTO UPDATE
database.ref("/ROOM01/led03").on("value", function (snapshot) {
    if (snapshot.exists()) {
        var ss = snapshot.val();
        if (ss == 1) {
            document.getElementById("denId_03").src = "./img/light_bulb.png";
            document.getElementById("denId_03").style.borderColor =
                "rgba(230, 240, 35, 0.929)";
            document.getElementById("btnOnId_03").style.backgroundColor =
                "rgba(247,179,33,0.98)";
            document.getElementById("btnOffId_03").style.backgroundColor =
                "rgba(100,100,111,0.2)";
        } else {
            document.getElementById("denId_03").src =
                "./img/light_bulb_off.png";
            document.getElementById("denId_03").style.borderColor =
                "rgba(105, 103, 93, 0.096)";
            document.getElementById("btnOnId_03").style.backgroundColor =
                "rgba(100,100,111,0.2)";
            document.getElementById("btnOffId_03").style.backgroundColor =
                "rgba(247,179,33,0.98)";
        }
    } else console.log("No data available!");
});

//get TEMP from Firebase (auto update when data changes)-------------
database.ref("/ROOM01/temp").on("value", function (snapshot) {
    if (snapshot.exists()) {
        var temp = snapshot.val();
        document.getElementById("nhietdo").innerHTML = temp;
    } else console.log("No data available!");
});

//get HUMI from Firebase (auto update when data changes)-------------
database.ref("/ROOM01/humi").on("value", function (snapshot) {
    if (snapshot.exists()) {
        var humi = snapshot.val();
        document.getElementById("doam").innerHTML = humi;
    } else console.log("No data available!");
});

//get GAS from Firebase (auto update when data changes)-------------
database.ref("/ROOM01/air").on("value", function (snapshot) {
    if (snapshot.exists()) {
        var air = snapshot.val();
        document.getElementById("khigas").innerHTML = air;
    } else console.log("No data available!");
});

// test: get once.
database
    .ref("/ROOM01")
    .get()
    .then((snapshot) => {
        if (snapshot.exists()) console.log(snapshot.val());
        else console.log("no data available!");
    });
