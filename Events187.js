var h1 = document.querySelector("h1");
h1.addEventListener("mouseover", function() {
	h1.style.color = "Blue";
});
h1.addEventListener("mouseout", function() {
	h1.style.color = "black";
});


var img = document.querySelector("img");
img.addEventListener("mouseover", function() {
	img.setAttribute("src", "https://cdn.techinasia.com/wp-content/uploads/2014/10/amazon-box.jpg");
	// img.style.width = "250px";
	// img.style.height = "91px";
});
img.addEventListener("mouseout", function() {
	img.setAttribute("src", "https://i.insider.com/539f3ffbecad044276726c01?width=1100&format=jpeg&auto=webp");
});


// var ol = document.querySelector("ol");
// ol.addEventListener("mouseover", function() {
// 	ol.style.background = "orange";
//     ol.style.color = "rgb(255,255,255)";
// });
// ol.addEventListener("mouseout", function() {
// 	ol.style.background = "rgb(255,255,255)";
//     ol.style.color = "black";
// });

var lis = document.querySelectorAll("li");
lis[0].addEventListener("mouseover", function(){
	lis[0].textContent = "Currently reading \"The Shining\"";
});
lis[0].addEventListener("mouseout", function(){
	lis[0].textContent = "Reading Novels";
});

lis[1].addEventListener("mouseover", function(){
	lis[1].textContent = "Currently learning Web Development from Colt Steele";
});
lis[1].addEventListener("mouseout", function(){
	lis[1].textContent = "Coding";
});

lis[2].addEventListener("mouseover", function(){
	lis[2].textContent = "Currently no time as well as place to play";
});
lis[2].addEventListener("mouseout", function(){
	lis[2].textContent = "Playing Badminton";
});

lis[3].addEventListener("mouseover", function(){
	lis[3].textContent = "Recently watched \"The Curse of La Llorona\"";
});
lis[3].addEventListener("mouseout", function(){
	lis[3].textContent = "Watching English Horror";
});

lis[4].addEventListener("mouseover", function(){
	lis[4].textContent = "No kids to play with at home :(";
});
lis[4].addEventListener("mouseout", function(){
	lis[4].textContent = "Playing With Kids";
});

for(var i = 0; i<lis.length; i++){
    lis[i].addEventListener("click", function() {
        this.style.color = "Pink";
    });
}

