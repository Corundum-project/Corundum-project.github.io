const cookiesBanner = document.querySelector('#cookies');
const cookiesButton = document.querySelector('#cookies button');

if (localStorage.getItem('cookies') === 'accepted') {
    cookiesBanner.style.display = 'none';
}

cookiesButton.addEventListener('click', () => {
    cookiesBanner.style.display = 'none';
    localStorage.setItem('cookies', 'accepted');
});