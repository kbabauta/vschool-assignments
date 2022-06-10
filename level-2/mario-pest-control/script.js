function getTotal() {
    return  (document.getElementById("goombaTotal").value * 5) +
            (document.getElementById("bobombTotal").value * 7) +
            (document.getElementById("cheepCheepTotal").value * 11);
}

document.getElementById("submit").addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById("total").value = getTotal() + " coins"
})