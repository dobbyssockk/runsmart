'use strict';
document.addEventListener('DOMContentLoaded', () => {
    // Translation
    function loadLanguage(lang) {
        $.getJSON(`../../translations/${lang}.json`, function(translations) {
            applyTranslations(translations);
        }).fail(function() {
            console.error("Error loading the language file.");
        });
    }

    function applyTranslations(translations) {
        $('[data-i18n]').each(function() {
            const key = $(this).data('i18n');
            if (translations[key]) {
                $(this).text(translations[key]);
            }
        });
    }

    $(document).ready(function() {
        loadLanguage('en'); // Default language

        $('#languageSwitcher').change(function() {
            loadLanguage(this.value);
        });
    });

    // Array with catalog items
    const fitnessProducts = [
        {
            image: 'src/img/catalog/card_pic.png',
            name: 'Polar FT1',
            oldPrice: 51.34,
            price: 48.63,
            parentSelector: '.catalog__fitness'
        },
        {
            image: 'src/img/catalog/card_pic.png',
            name: 'Suunto M2',
            oldPrice: 72.30,
            price: 71.77,
            parentSelector: '.catalog__fitness'
        },
        {
            image: 'src/img/catalog/card_pic.png',
            name: 'Polar FT4',
            oldPrice: 79.87,
            price: 75.88,
            parentSelector: '.catalog__fitness'
        },
        {
            image: 'src/img/catalog/card_pic.png',
            name: 'Polar FT1',
            oldPrice: 51.34,
            price: 48.63,
            parentSelector: '.catalog__fitness'
        },
        {
            image: 'src/img/catalog/card_pic.png',
            name: 'Suunto M2',
            oldPrice: 72.30,
            price: 71.77,
            parentSelector: '.catalog__fitness'
        },
        {
            image: 'src/img/catalog/card_pic.png',
            name: 'Polar FT4',
            oldPrice: 79.87,
            price: 75.88,
            parentSelector: '.catalog__fitness'
        },
        {
            image: 'src/img/catalog/card_pic.png',
            name: 'Polar FT1',
            oldPrice: 51.34,
            price: 48.63,
            parentSelector: '.catalog__fitness'
        },
        {
            image: 'src/img/catalog/card_pic.png',
            name: 'Suunto M2',
            oldPrice: 72.30,
            price: 71.77,
            parentSelector: '.catalog__fitness'
        },
        {
            image: 'src/img/catalog/card_pic.png',
            name: 'Polar FT4',
            oldPrice: 79.87,
            price: 75.88,
            parentSelector: '.catalog__fitness'
        }
    ];

    const runningProducts = [
        {
            image: 'src/img/catalog/card_pic.png',
            name: 'Polar FT1',
            oldPrice: 51.34,
            price: 48.63,
            parentSelector: '.catalog__running'
        },
        {
            image: 'src/img/catalog/card_pic.png',
            name: 'Suunto M2',
            oldPrice: 72.30,
            price: 71.77,
            parentSelector: '.catalog__running'
        },
        {
            image: 'src/img/catalog/card_pic.png',
            name: 'Polar FT4',
            oldPrice: 79.87,
            price: 75.88,
            parentSelector: '.catalog__running'
        },
        {
            image: 'src/img/catalog/card_pic.png',
            name: 'Polar FT1',
            oldPrice: 51.34,
            price: 48.63,
            parentSelector: '.catalog__running'
        },
        {
            image: 'src/img/catalog/card_pic.png',
            name: 'Suunto M2',
            oldPrice: 72.30,
            price: 71.77,
            parentSelector: '.catalog__running'
        },
        {
            image: 'src/img/catalog/card_pic.png',
            name: 'Polar FT4',
            oldPrice: 79.87,
            price: 75.88,
            parentSelector: '.catalog__running'
        }
    ];

    const triathlonProducts = [
        {
            image: 'src/img/catalog/card_pic.png',
            name: 'Polar FT1',
            oldPrice: 51.34,
            price: 48.63,
            parentSelector: '.catalog__triathlon'
        },
        {
            image: 'src/img/catalog/card_pic.png',
            name: 'Suunto M2',
            oldPrice: 72.30,
            price: 71.77,
            parentSelector: '.catalog__triathlon'
        },
        {
            image: 'src/img/catalog/card_pic.png',
            name: 'Polar FT4',
            oldPrice: 79.87,
            price: 75.88,
            parentSelector: '.catalog__triathlon'
        }
    ];

    // Class for rendering catalog cards
    class CatalogCard {
        constructor(image, name, descr, oldPrice, price, parentSelector) {
            this.image = image;
            this.name = name;
            this.descr = descr;
            this.oldPrice = oldPrice;
            this.price = price;
            this.parentSelector = document.querySelector(parentSelector);
        };

        render() {
            const catalogItem = document.createElement('div');
            catalogItem.classList.add('catalog-item', 'animate__animated', 'animate__fadeInRight');

            catalogItem.innerHTML = `
                <div class="catalog-item__content">
                    <img src="${this.image}" alt="pulsometer ${this.name}" class="catalog-item__image">
                    <div class="catalog-item__subtitle" data-i18n="catalog.item_title">${this.name}</div>
                    <div class="catalog-item__descr" data-i18n="catalog.item_description"> For the first steps in heart rate-based training</div>
                    <a href="#" class="catalog-item__link" data-i18n="catalog.more_details">MORE DETAILS</a>
                </div>
                
                <ul class="catalog-item__details hide">
                    <li class="catalog-item__detail" data-i18n="catalog.detail1">You will hear an audible alert for the required pulse during training;</li>
                    <li class="catalog-item__detail" data-i18n="catalog.detail2">You will see an informative graphic indicator of the target training pulse zones;</li>
                    <li class="catalog-item__detail" data-i18n="catalog.detail3">Also, you will see information about the calories burned during the training;</li>
                    <li class="catalog-item__detail" data-i18n="catalog.detail4">You can view data for 10 training sessions.</li>
                    <li class="catalog-item__back-link hide"><a href="#" data-i18n="catalog.back">BACK</a></li>
                </ul>
                
                <hr>
                
                <div class="catalog-item__footer">
                    <div class="catalog-item__prices">
                        <div class="catalog-item__old-price">$${this.oldPrice}</div>
                        <div class="catalog-item__price">$${this.price}</div>
                    </div>
                    <button class="button button_mini" data-i18n="catalog.buy_button">BUY</button>
                </div>
            `;
            this.parentSelector.append(catalogItem);
        };
    }

    // Rendering catalog items
    function renderCatalog(catalogItems) {
        catalogItems.forEach((item) => {
            new CatalogCard(
                item.image,
                item.name,
                item.descr,
                item.oldPrice,
                item.price,
                item.parentSelector
            ).render();
        });
    }

    renderCatalog(fitnessProducts);
    renderCatalog(runningProducts);
    renderCatalog(triathlonProducts);

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    const triggerTabList = document.querySelectorAll('.catalog__tab')
    triggerTabList.forEach(triggerEl => {
        const tabTrigger = new bootstrap.Tab(triggerEl)

        triggerEl.addEventListener('click', event => {
            event.preventDefault()
            tabTrigger.show()
        })
    })

    // Showing more details and going back
    const links = document.querySelectorAll('.catalog-item__link');
    const contents = document.querySelectorAll('.catalog-item__content');
    const details = document.querySelectorAll('.catalog-item__details');
    const backLinks = document.querySelectorAll('.catalog-item__back-link');

    links.forEach((link, i) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            toggleDetails(i);
        });
    });

    backLinks.forEach((backLink, i) => {
        backLink.addEventListener('click', (e) => {
            e.preventDefault();
            toggleDetails(i);
        });
    });

    function toggleDetails(i) {
        links[i].classList.toggle('hide');
        contents[i].classList.toggle('hide');
        details[i].classList.toggle('hide');
        backLinks[i].classList.toggle('hide');
    }

    // Modal windows
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn();
    });

    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
           $('#order .customModal__descr').text($('.catalog-item__subtitle').eq(i).text());
           $('.overlay, #order').fadeIn();
        });
    });

    $('.customModal__close').on('click', function() {
       $('.overlay, #consultation, #order, #thanks').fadeOut();
    });

    function validForm(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true
                },
                phone: {
                    required: true,
                    customphone: true
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: 'Please enter your name.',
                phone: 'Please enter your phone number.',
                email: {
                    required: 'Please enter your email.',
                    email: 'Invalid email format.'
                }
            },
        });
    }

    validForm('#consultation-form');
    validForm('#consultation form');
    validForm('#order form');

    // Checking phone number
    $.validator.addMethod('customphone', function(value, element) {
        const phoneNumber = value.replace(/\D/g, '');
        return phoneNumber.length === 11;
    });

    // Input mask for phone number
    $('input[name=phone]').inputmask('+1 (999) 999-9999');

    // Form data submitting
    $('form.consultation-form').submit(function (e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }

        const formData = {};

        $(this).serializeArray().forEach(function(item) {
            formData[item.name] = item.value;
            console.log(item);
        });

        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/send-email-consultation',
            contentType: 'application/json',
            data: JSON.stringify(formData)
        }).done(function () {
            $(this).find('input').val('');
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        })
        return false;
    })

    $('form#purchase-form').submit(function (e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }

        const formData = {};

        $(this).serializeArray().forEach(function(item) {
            formData[item.name] = item.value;
            console.log(item);
        });

        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/send-email-purchase',
            contentType: 'application/json',
            data: JSON.stringify(formData)
        }).done(function () {
            $(this).find('input').val('');
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        })
        return false;
    })

    // Page up button
    const pageUp = document.querySelector('.page-up');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 1600) {
            pageUp.style.display = 'block';
        } else {
            pageUp.style.display = 'none';
        }
    })

    // Animate when scroll
    new WOW().init();
});