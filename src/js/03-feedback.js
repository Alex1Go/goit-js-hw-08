import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
const KEY = "feedback-form-state";

form.addEventListener('input', throttle(onForm, 500));
form.addEventListener('submit', onSubmit);

function onForm() {
    const params = {
        email: email.value,
        message: message.value
    };
    localStorage.setItem(KEY, JSON.stringify(params))
};
const data = localStorage.getItem(KEY);
const parseData = JSON.parse(data);
if (parseData) {
    email.value = parseData.email;
    message.value = parseData.message;
};
function onSubmit(evt) {
    evt.preventDefault();
    console.log(parseData);
    form.reset();
    localStorage.removeItem(KEY);
}