function scrollSliderVideo(distance) {
    const slider = document.getElementById('videoSlider');
    slider.scrollBy({
        left: distance,
        behavior: 'smooth'
    });
}

function scrollSliderBlog(distance) {
    const slider = document.getElementById('blogSlider');
    slider.scrollBy({
        left: distance,
        behavior: 'smooth'
    });
}