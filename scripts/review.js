
let count = localStorage.getItem("reviewCount");
count = count ? parseInt(count) : 0

count++

localStorage.setItem("reviewCount", count)
document.getElementById("reviewCounter").innerHTML = count;