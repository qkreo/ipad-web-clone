//basket
const basketStarterEl = document.querySelector('header .basket-starter');
const basketEl = basketStarterEl.querySelector('.basket');

basketStarterEl.addEventListener('click', (event) => {
    event.stopPropagation();//이벤트가 상위 계층으로 전파되는것을 막음
    if (basketEl.classList.contains('show'))
    {
        hideBasket();
    }
    else
    {
        showBasket();
    }
});

basketEl.addEventListener('click', (event) => {
    event.stopPropagation();
});

window.addEventListener('click', () => {
    hideBasket();
})

const showBasket = () => {
    basketEl.classList.add('show');
}

const hideBasket = () => {
    basketEl.classList.remove('show');
}

//search
const headerEl = document.querySelector('header');
const headerMenuEls = [...headerEl.querySelectorAll('ul.menu > li')];
const searchWrapEl = headerEl.querySelector('.search-wrap');
const searchStarterEl = headerEl.querySelector('.search-starter');
const searchCloserEl = headerEl.querySelector('.search-closer');
const searchShadowEl = searchWrapEl.querySelector('.search .shadow');
const searchInputEl = searchWrapEl.querySelector('input');
const searchDelayEls = [...searchWrapEl.querySelectorAll('li')];

const showSearch = () => {
    headerEl.classList.add('searching')
    document.documentElement.classList.add('fixed');
    headerMenuEls.reverse().forEach((el,index) => {
        el.style.transitionDelay = index * .4 / headerMenuEls.length + 's';
    })
    searchDelayEls.forEach((el,index) => {
        el.style.transitionDelay = index * .4 / searchDelayEls.length + 's';
    })
    setTimeout(() => {
        searchInputEl.focus()
    }, 600)
}

const hideSearch = () => {
    headerEl.classList.remove('searching')
    document.documentElement.classList.remove('fixed');
    headerMenuEls.reverse().forEach((el,index) => {
        el.style.transitionDelay = index * .4 / headerMenuEls.length + 's';
    })
    searchDelayEls.reverse().forEach((el,index) => {
        el.style.transitionDelay = index * .4 / searchDelayEls.length + 's';
    })
    searchDelayEls.reverse();
    searchInputEl.value = "";
}

searchStarterEl.addEventListener('click',showSearch);

searchCloserEl.addEventListener('click', hideSearch);

searchShadowEl.addEventListener('click',hideSearch);
