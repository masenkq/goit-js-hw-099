const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// Початковий стан об'єкта formData
let formData = {
  email: '',
  message: '',
};

// Функція для завантаження даних з localStorage
const loadFormData = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  }
};

// Викликаємо функцію при завантаженні сторінки
loadFormData();

// Обробник події input
form.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Обробник події submit
form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  // Очищуємо все після відправки
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: '', message: '' };
});
