export const positionInCircle = () => {
    var items = document.querySelectorAll('.activate');

    for (var i = 0, l = items.length; i < l; i++) {
        items[i].style.transformOrigin = '3rem 16rem';
        items[i].style.transitionDuration = '.5s, 1s';
        items[i].style.transitionProperty = 'top, transform';
        items[i].style.top = '-8rem';
    }
    setTimeout(() => {
        for (var i = 0, l = items.length; i < l; i++) {
            items[i].style.transform = ` rotate(${(360 / items.length) * i}deg)`;
            items[i].firstChild.style.transform = `rotate(-${(360 / items.length) * i}deg)`;
        }
    }, 500);
};
