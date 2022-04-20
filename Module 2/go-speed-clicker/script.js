setTimeout (function(){
    location.reload(true);
    alert("This page will now refresh. Your clicks: " + localStorage.clickcount + " time(s).");
    localStorage.clickcount = 0;
    
}, 10000);

function clickCounter(){
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
        localStorage.clickcount = 1;
    }
    document.getElementById("result").value = "# of clicks" + localStorage.clickcount + " time(s)."
}