'use strict';
document.addEventListener('DOMContentLoaded', () => {
    //Массив с объектами товаров каталога
    const fitnessProducts = [
        {
            image: 'img/catalog/card_pic.png',
            name: 'Polar FT1',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            oldPrice: 4750,
            price: 4500,
            parentSelector: '.catalog__fitness'
        },
        {
            image: 'img/catalog/card_pic.png',
            name: 'Suunto M2',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            oldPrice: 6690,
            price: 6641,
            parentSelector: '.catalog__fitness'
        },
        {
            image: 'img/catalog/card_pic.png',
            name: 'Polar FT4',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            oldPrice: 7390,
            price: 7021,
            parentSelector: '.catalog__fitness'
        },
        {
            image: 'img/catalog/card_pic.png',
            name: 'Polar FT1',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            oldPrice: 4750,
            price: 4500,
            parentSelector: '.catalog__fitness'
        },
        {
            image: 'img/catalog/card_pic.png',
            name: 'Suunto M2',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            oldPrice: 6690,
            price: 6641,
            parentSelector: '.catalog__fitness'
        },
        {
            image: 'img/catalog/card_pic.png',
            name: 'Polar FT4',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            oldPrice: 7390,
            price: 7021,
            parentSelector: '.catalog__fitness'
        }
    ];

    const runningProducts = [
        {
            image: 'img/catalog/card_pic.png',
            name: 'Polar FT1',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            oldPrice: 4750,
            price: 4500,
            parentSelector: '.catalog__running'
        },
        {
            image: 'img/catalog/card_pic.png',
            name: 'Suunto M2',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            oldPrice: 6690,
            price: 6641,
            parentSelector: '.catalog__running'
        },
        {
            image: 'img/catalog/card_pic.png',
            name: 'Polar FT4',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            oldPrice: 7390,
            price: 7021,
            parentSelector: '.catalog__running'
        }
    ];

    const triathlonProducts = [
        {
            image: 'img/catalog/card_pic.png',
            name: 'Polar FT1',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            oldPrice: 4750,
            price: 4500,
            parentSelector: '.catalog__triathlon'
        },
        {
            image: 'img/catalog/card_pic.png',
            name: 'Suunto M2',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            oldPrice: 6690,
            price: 6641,
            parentSelector: '.catalog__triathlon'
        }
    ];

    //Классы для отрисовки карточек с продуктами
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
            this.elementClass = 'catalog-item';
            catalogItem.classList.add(this.elementClass);
            catalogItem.innerHTML = `
                <div class="catalog-item__content">
                    <img src="${this.image}" alt="pulsometr ${this.name}"  class="catalog-item__image">
                    <div class="catalog-item__subtitle">Пульсометр ${this.name}</div>
                    <div class="catalog-item__descr">${this.descr}</div>
                    <a href="#" class="catalog-item__link">ПОДРОБНЕЕ</a>
                </div>
                
                <ul class="catalog-item__details hide">
                    <li class="catalog-item__detail">Вы услышите звуковое оповещение о нужном пульсе во время тренировки;</li>
                    <li class="catalog-item__detail">Вы увидите информативный графический индикатор целевых тренировочных зон пульса;</li>
                    <li class="catalog-item__detail">Также Вы увидите информацию о расходе калорий за тренировку;</li>
                    <li class="catalog-item__detail">Вы сможете посмотреть данные по 10 тренировкам.</li>
                    <a href="#" class="catalog-item__back-link hide">НАЗАД</a>
                </ul>
                
                <hr>
        
                <div class="catalog-item__footer">
                    <div class="catalog-item__prices">
                        <div class="catalog-item__old-price">${this.oldPrice} руб.</div>
                        <div class="catalog-item__price">${this.price} руб.</div>
                    </div>
                    <button class="button button_mini">КУПИТЬ</button>
                </div>
            `;
            this.parentSelector.append(catalogItem);
        };
    }

    //Отрисовка карточек с продуктами
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

    //Показ деталей при нажатии "Подробнее" и обратное при нажатии "Назад"
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

    //Модальные окна
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
                    required: true,
                    minlength: 2
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
                name: {
                    required: 'Пожалуйста, введите свое имя.',
                    minlength: jQuery.validator.format('Введите {0} символа!')
                },
                phone: 'Пожалуйста, введите свой номер телефона.',
                email: {
                    required: 'Пожалуйста, введите свою почту.',
                    email: 'Неправильный формат электронной почты.'
                }
            },
        });
    }

    validForm('#consultation-form');
    validForm('#consultation form');
    validForm('#order form');

    //Проверка ввода номера телефона
    $.validator.addMethod('customphone', function(value, element) {
        const phoneNumber = value.replace(/\D/g, '');
        return phoneNumber.length === 11;
    });

    //Маска ввода номера
    $('input[name=phone]').inputmask('+374 (99) 999-999');

    //Отправка данных при нажатии кнопки в формах
    $('form').submit(function (e) {
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
            url: 'http://localhost:8080/send-email',
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
});