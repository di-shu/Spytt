const filterWrap = $('.main-filter_select-wrap');
const filterItems = $('.main-filter_item');

const convertImages = (query, callback) => {
    const images = document.querySelectorAll(query)

    images.forEach(image => {
        fetch(image.src)
            .then(res => res.text())
            .then(data => {
                const parser = new DOMParser()
                const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg')

                if (svg) {
                    if (image.id) svg.id = image.id
                    if (image.className) svg.classList = image.classList
                    image.parentNode.replaceChild(svg, image)
                }
            })
            .then(callback)
            .catch(error => console.error(error))
    })
}

convertImages('.svg');

$('body').on('click', function (e) {
    const target = $(e.target);

    console.log(target)

    if(!target.hasClass('main-selected_filter')) {
        $('.main-filter_items').removeClass('active-filters_menu');
    }
})

function selectFilter() {
    filterWrap.on('click', function () {
        $('.main-filter_items').removeClass('active-filters_menu');
        $(this).find('.main-filter_items').toggleClass('active-filters_menu');
    })

    filterItems.on('click', function () {
        const selected = $(this).parents('.main-filter_select-wrap').find('.main-selected_filter span');
        const item = $(this);
        selected.text(item.text());
    })
}

selectFilter();


function videoControls() {
    $('.main-video_src').on('click', function () {
        const item = $(this);

        if(this.paused) {
            item.get(0).play();
        } else {
            item.get(0).pause();
        }

    })
}


videoControls()