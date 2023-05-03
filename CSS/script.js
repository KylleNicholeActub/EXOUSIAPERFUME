const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventlistener('click', ()=> {
	wrapper.classList.add('active');
});

loginLink.addEventlistener('click', ()=> {
	wrapper.classList.remove('active');
});

btnPopup.addEventlistener('click', ()=> {
	wrapper.classList.add('active-popup');
});

iconClose.addEventlistener('click', ()=> {
	wrapper.classList.remove('active-popup');
});