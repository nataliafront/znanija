let assistant = () => {
	let selectCurrent = document.querySelectorAll('.assistants-dropdown__header'),
		selectItem = document.querySelectorAll('.assistants-dropdown__body-item');
	selectCurrent.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.currentTarget.parentElement.classList.toggle('assistants-dropdown--opened');
		})
	});
	selectItem.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.currentTarget.closest('.assistants-dropdown').querySelector('.assistants-dropdown__header-text').innerHTML = e.currentTarget.innerHTML;
			e.currentTarget.closest('.assistants-dropdown').classList.remove('assistants-dropdown--opened');
		})
	});
};

assistant();

let addition = () => {
	let selectCurrent = document.querySelectorAll('.addition-subject__header'),
		selectItem = document.querySelectorAll('.addition-subject__item');
	selectCurrent.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.currentTarget.parentElement.classList.toggle('addition-subject--opened');
		})
	});
	selectItem.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.currentTarget.closest('.addition-subject').querySelector('.addition-subject__current').innerHTML = e.currentTarget.innerHTML;
			e.currentTarget.closest('.addition-subject').classList.remove('addition-subject--opened');
		})
	});
};

addition();

let personalGender = () => {
	let selectCurrent = document.querySelectorAll('.personal-gender__header'),
		selectItem = document.querySelectorAll('.personal-gender__item');
	selectCurrent.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.currentTarget.parentElement.classList.toggle('personal-gender--opened');
		})
	});
	selectItem.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.currentTarget.closest('.personal-gender').querySelector('.personal-gender__current').innerHTML = e.currentTarget.innerHTML;
			e.currentTarget.closest('.personal-gender').classList.remove('personal-gender--opened');
		})
	});
};

personalGender();

let personalList = () => {
	let selectCurrent = document.querySelectorAll('.personal-list__header'),
		selectItem = document.querySelectorAll('.personal-list__item');
	selectCurrent.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.currentTarget.parentElement.classList.toggle('personal-list--opened');
		})
	});
	selectItem.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.currentTarget.closest('.personal-list').querySelector('.personal-list__current').innerHTML = e.currentTarget.innerHTML;
			e.currentTarget.closest('.personal-list').classList.remove('personal-list--opened');
		})
	});
};

personalList();

function show_hide_password(target){
	var input = document.getElementById('password-input1');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}

function show_hide_password2(target){
	var input = document.getElementById('password-input2');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}

function show_hide_password3(target){
	var input = document.getElementById('password-input3');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}

function show_hide_password4(target){
	var input = document.getElementById('password-input4');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}