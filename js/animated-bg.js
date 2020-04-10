// var bgImageArray = ["953", "1073", "476", "932"],
var bgImageArray = ["unsplash_1.jpg", "unsplash_2.jpg", "unsplash_3.jpg", "unsplash_4.jpg"]
// base = "https://picsum.photos/1200/800?image=",
base = "images/",
    secs = 6;
bgImageArray.forEach(function (img) {
    new Image().src = base + img;
    // caches images, avoiding white flash between background replacements
});

function backgroundSequence() {
    window.clearTimeout();
    var k = 0;
    for (i = 0; i < bgImageArray.length; i++) {
        setTimeout(function () {
            document.getElementById('animated-bg').style.background = " url(" + base + bgImageArray[k] + ") no-repeat center center";
            document.getElementById('animated-bg').style.backgroundSize = "cover";
            if ((k + 1) === bgImageArray.length) {
                setTimeout(function () {
                    backgroundSequence()
                }, (secs * 1000))
            } else {
                k++;
            }
        }, (secs * 1000) * i)
    }
}
backgroundSequence();