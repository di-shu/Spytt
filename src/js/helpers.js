const filterWrap = $('.main-filter_select-wrap');
const filterItems = $('.main-filter_item');
const accountMenu = $('.account-menu');
let selectedCountries = [];
let selectedCategory = [];
let tempInput = [];
let tempInput2 = [];
const mainFilter = $('.main-filter');

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

convertImages('.svg', function () {
    console.log('success')
});

$('body').on('click', function (e) {
    const target = $(e.target);

    if(!target.hasClass('main-selected_filter')
        &&!mainFilter.find(e.target).length) {
        $('.main-filter_items').removeClass('active-filters_menu');
        $('.main-keyword_menu').removeClass('keyword-menu_active');
    }

    if(!target.hasClass('account-settings')) {
        accountMenu.removeClass('account-menu_active');
    }
})

function selectFilter() {
    filterWrap.on('click', function () {
        $('.main-filter_items').removeClass('active-filters_menu');
        $(this).find('.main-filter_items').toggleClass('active-filters_menu');
    })
}

selectFilter();

function viewFilter() {
    const items = $('.filter-view_item');
    items.attr('viewActive', false);
    $('.view-active').attr('viewActive', true);

    items.on('click', function () {
        const item = $(this);
        items.removeClass('view-active');
        items.attr('viewActive', false);
        item.addClass('view-active');
        item.attr('viewActive', true);

        $('.main-videos_section').css('maxWidth', `${item.attr('data-videos')}`);
    })
}

viewFilter();

function keywordsFilter() {
    const keywordMenuToggle = $('.main-keyword_input');
    const keywordInput = $('.main-keyword_input-word');
    let keywordInput2 = $('.main-keyword_input-word2');
    const keywordMenu = $('.main-keyword_menu');
    const keywordsMenuItems = $('.main-keyword_menu-item');
    const keywordsMenuItems2 = $('.main-keyword_menu-item2');
    const addBtn = $('.main-keyword_add');
    const reset = $('.main-keywords_reset');
    const accept = $('.main-keyword_accept');
    const deleteKeyword = $('.keyword-delete_wrap');
    const deleteKeyword2= $('.keyword-delete_wrap2');

    keywordsMenuItems.attr('keywordActive', false);
    $('.keyword-active').attr('keywordActive', true);

    keywordMenuToggle.on('click', function () {
        $(this).parent().find(keywordMenu).toggleClass('keyword-menu_active');
        $(this).toggleClass('main-keyword_input-active')
    })


    deleteKeyword2.on('click', function () {

        const firstWord = $('.first-selected')
        const secondWord = $('.second-selected')
        const all = $('.selected-all')
        $(this).parents('.main-keywords_inputs').remove()
        if(keywordInput2.val() === '' && keywordInput.val() === '') {
            accept.attr('disabled', true);
            accept.removeClass('accept-active');
            reset.removeClass('reset-active')
        }

        keywordInput2 = $('.main-keyword_input-word2');

    })

    deleteKeyword.on('click', function () {
        $(this).parents('.main-keywords_inputs').remove()
        $(this).removeClass('keyword-delete_active')
        if(keywordInput2.val() === '' && keywordInput.val() === '') {
            accept.attr('disabled', true);
            accept.removeClass('accept-active');
            reset.removeClass('reset-active')
        }
    })

    keywordsMenuItems.on('click', function () {
        const item = $(this);
        const selected = $(this).parents('.main-keyword_input-wrap').find('.main-keyword_input span');
        keywordsMenuItems.attr('keywordActive', false);
        keywordsMenuItems.removeClass('keyword-active')
        item.addClass('keyword-active');
        item.attr('keywordActive', true);
        selected.text(item.text());
        keywordMenu.removeClass('keyword-menu_active')
        keywordMenuToggle.removeClass('main-keyword_input-active')
    })

    keywordsMenuItems2.on('click', function () {
        const item = $(this);
        const selected = $(this).parents('.main-keyword_input-wrap').find('.main-keyword_input span');
        keywordsMenuItems2.attr('keywordActive', false);
        keywordsMenuItems2.removeClass('keyword-active')
        item.addClass('keyword-active');
        item.attr('keywordActive', true);
        selected.text(item.text())
        keywordMenu.removeClass('keyword-menu_active')
        keywordMenuToggle.removeClass('main-keyword_input-active')
    })

    keywordInput.on('input', function () {
        const input = $(this);

        if(input.val() !== '') {
            deleteKeyword.addClass('keyword-delete_active')
            accept.attr('disabled', false);
            accept.addClass('accept-active');
            reset.addClass('reset-active');
        } else {

            if(keywordInput2.val() === '') {

                accept.attr('disabled', true);
                accept.removeClass('accept-active');
                reset.removeClass('reset-active');
            }
            deleteKeyword.removeClass('keyword-delete_active')

        }
    })

    keywordInput2.on('input', function () {
        const input = $(this);
        if(input.val() !== '') {
            deleteKeyword2.addClass('keyword-delete_active')
            accept.attr('disabled', false);
            accept.addClass('accept-active');
            reset.addClass('reset-active');
        } else {

            if(keywordInput.val() === '') {
                accept.attr('disabled', true);
                accept.removeClass('accept-active');
                reset.removeClass('reset-active');
            }
            deleteKeyword2.removeClass('keyword-delete_active')

        }
    })

    reset.on('click', function () {
        keywordInput2.val('');
        keywordInput.val('');
        accept.attr('disabled', true);
        accept.removeClass('accept-active');
        $(this).removeClass('reset-active')
        deleteKeyword.removeClass('keyword-delete_active')
        deleteKeyword2.removeClass('keyword-delete_active')
        $('.first-selected').addClass('no-active');
        $('.second-selected').addClass('no-active');
        $('.selected-all').removeClass('no-active');
    })

    accept.on('click', function () {
        const firstWord = $('.first-selected')
        const secondWord = $('.second-selected')
        const all = $('.selected-all')
        tempInput = [];
        keywordInput.each(function (index, item) {
            const input = $(item);

            if(input.val() !== '') {
                tempInput.push(input.val())
            }

        })

        if(tempInput.length === 1) {
            firstWord.removeClass('no-active');
            all.addClass('no-active')
            firstWord.html(tempInput[0]);
        } else if( tempInput.length > 1) {
            firstWord.removeClass('no-active');
            all.addClass('no-active')
            firstWord.html('- ' + tempInput.length + ' слова');
        }

    })



}

keywordsFilter()

function periodfilter() {
    const period = $('.main-period_1v');
    const period2 = $('.main-period_2v');
    period.attr('periodActive', false);
    period2.attr('periodActive', false);
    $('.period-active').attr('periodActive', true);

    period.on('click', function () {
        period.removeClass('period-active');
        const filter = $(this);
        period.attr('periodActive',false)
        const selected = filter.parents('.main-filter_select-wrap').find('.main-selected_filter span');
        filter.toggleClass('period-active');
        filter.attr('periodActive', filter.hasClass('period-active'))
        selected.text(filter.text());
    })

    period2.on('click', function () {
        period2.removeClass('period-active');
        const filter = $(this);
        period2.attr('periodActive',false)
        const selected = filter.parents('.main-filter_select-wrap').find('.main-selected_filter span');
        filter.toggleClass('period-active');
        filter.attr('periodActive', filter.hasClass('sorting-active'))
    })

}

periodfilter()

function sortingFilter() {
    const sortings = $('.main-sorting_1v');
    const sortings2 = $('.main-sorting_2v');
    sortings.attr('sortActive', false);
    sortings2.attr('sortActive', false);
    $('.sorting-active').attr('sortActive', true);

    sortings.on('click', function () {
        sortings.removeClass('sorting-active');
        const filter = $(this);
        sortings.attr('sortActive',false)
        const selected = filter.parents('.main-filter_select-wrap').find('.main-selected_filter span');
        filter.toggleClass('sorting-active');
        filter.attr('sortActive', filter.hasClass('sorting-active'))
        selected.text(filter.text());
    })

    sortings2.on('click', function () {
        sortings2.removeClass('sorting-active');
        const filter = $(this);
        sortings2.attr('sortActive',false)
        const selected = filter.parents('.main-filter_select-wrap').find('.main-selected_filter span');
        filter.toggleClass('sorting-active');
        filter.attr('sortActive', filter.hasClass('sorting-active'))
    })


}

sortingFilter();

function categoryFilter() {
    const categories = $('.filter-categories_app, .filter-categories_game');
    const reset = $('.filter-categories_reset');

    categories.attr('categoryActive', false)

    categories.on('click', function () {
        const filter = $(this);
        const selected = filter.parents('.main-filter_select-wrap').find('.main-selected_filter span');
        filter.toggleClass('category-active');
        filter.attr('categoryActive', filter.hasClass('category-active'));


        //Saving countries
        const temp = $('.category-active');
        selectedCategory = [];

        temp.each(function (key, value) {
            selectedCategory.push($(value).text());
        })


        //add few categories

        if(selectedCategory.length === 1) {
            selected.text($('.category-active').text());
            selected.css({'display':'inline', 'color': '#007bff'});
        } else if(selectedCategory.length > 1) {
            selected.css('display','inline');
            selected.text(`${selectedCategory.length} выбрано`)
        }
        else if(selectedCategory.length == 0) {
            selected.text('Все');
            selected.css('color', '#000')
        }


        reset.on('click', function () {
            selectedCategory = [];
            selected.text('Все');
            selected.css('color', '#000')
            categories.removeClass('category-active');
            categories.attr('categoryActive', false);
        })

    })


}

categoryFilter()

function countryFilter() {
    const countryFilters = $('.filter-country_item');
    countryFilters.attr('countryActive', false);

    countryFilters.on('click', function () {
        const filter = $(this);
        const selected = filter.parents('.main-filter_select-wrap').find('.main-selected_filter span');
        const item = filter.find('.filter-country');
        filter.toggleClass('country-active');
        filter.attr('countryActive', filter.hasClass('country-active'));


        //Saving countries
        const temp = $('.country-active');
        selectedCountries = [];

        temp.each(function (key, value) {
            selectedCountries.push({name: $(value).find('.filter-country').text(), icon: $(value).find('.svg').attr('src') } )
        })




        //add few countries
        const selectedCountriesWrap = $('.selected-countries');

        if(selectedCountries.length == 1) {
            selected.text($('.country-active').text());
            selected.css({'display':'inline', 'color': '#007bff'});
            selectedCountriesWrap.find('svg, img').remove();
        } else if(selectedCountries.length > 1 && selectedCountries.length <=3) {
            selected.css('display','none');

            selectedCountriesWrap.find('svg, img').remove();

            for (let i = 0; i < selectedCountries.length; i++) {
                selectedCountriesWrap.prepend(`
                <img src="${selectedCountries.icon}">
            `)
            }

        }
        else if(selectedCountries.length == 0) {
            selected.text('Все');
            selected.css('color', '#000')
            selectedCountriesWrap.find('svg, img').remove();
        } else if(selectedCountries.length > 3){
            selected.css('display','inline');
            selectedCountriesWrap.find('svg, img').remove();
            selected.text(`${selectedCountries.length} стран(ы)`)
        }


    })
}

countryFilter()

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

function menuToggle() {
    $('.account-settings').on('click', function () {
        accountMenu.toggleClass('account-menu_active');
    })
}

menuToggle()