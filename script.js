$('.owl-carousel').owlCarousel({
    items: 1,
    lazyLoad: true,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoHeight: true
});

function readmore() {

    var moreText = document.getElementById("newslist");
    var moreText2 = document.getElementById("newslist2");
    var readmorebtnv = document.getElementById("readmorebtn")

    moreText.style.display = "block";
    moreText2.style.display = "block";
    readmorebtnv.style.display = "none";
}

function searchbtn() {
    var icon = document.getElementById("searchbox");
    icon.style.display = "inline";
}