const shareBtn = document.querySelector('.link');
const shareBox = document.querySelector('.card-footer-active');
const button = document.querySelector('button');
const icon = document.querySelector('.fa-share');

shareBtn.addEventListener('click', () => {
    console.log('clicked');
    shareBox.classList.toggle('change');
    button.classList.toggle('change');
    icon.classList.toggle('change')
})