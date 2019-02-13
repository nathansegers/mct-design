let formModule = (function() {
	let form,
		inputFields = { name: null, email: null, subject: null, message: null },
		valid = {
			name: false,
			email: false,
			subject: false,
			message: false,
			control: true,
		},
		button;

	const _submitForm = function() {
		if (
			valid.name &&
			valid.email &&
			valid.subject &&
			valid.message &&
			valid.control
		) {
		}
		let title = `Contact van ${inputFields.name} over ${
			inputFields.subject
		}`;
		let message = `${inputFields.message} \nMet het e-mailadres ${
			inputFields.email
		}`;

		let contactBody = JSON.stringify({
			markdown: true,
			title: title,
			text: message,
		});

		fetch(
			'https://outlook.office.com/webhook/276f5711-8096-4d28-8b4c-3390fd10aa42@4ded4bb1-6bff-42b3-aed7-6a36a503bf7a/IncomingWebhook/a86d92acb4e640c7abfaee1076027bd9/7f736be6-110b-4114-bb51-adde29c36a17',
			{
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: contactBody,
			}
		)
			.then(r => r.json())
			.then(json => {
				console.info(json);
			});
	};

	const _validateEmail = function(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};

	const _checkField = function(inputEl) {
		let valid = false;
		if (inputEl.value.length >= 2) {
			valid = true;
		}
		if (inputEl.type == 'email') {
			valid = _validateEmail(inputEl.value);
		}

		return valid;
	};

	const checkForm = function() {
		let fields = [
			inputFields.name,
			inputFields.email,
			inputFields.subject,
			inputFields.message,
		];

		for (let i = 0; i < fields.length; i++) {
			if (!_checkField(fields[i])) {
				fields[i].parentNode.classList.add('has-error');
				goodToGo = false;
			} else {
				fields[i].parentNode.classList.remove('has-error');
				valid[fields[i].getAttribute('data-form-name')] = true;
			}
			if (
				valid.name &&
				valid.email &&
				valid.subject &&
				valid.message &&
				valid.control
			) {
				_submitForm();
			}
		}
	};

	const initForm = function({
		formEl,
		nameEl,
		emailEl,
		subjectEl,
		messageEl,
		buttonEl,
	}) {
		inputFields.name = nameEl;
		inputFields.email = emailEl;
		inputFields.subject = subjectEl;
		inputFields.message = messageEl;
		form = formEl;
		button = buttonEl;

		form.addEventListener('submit', e => {
			e.preventDefault();
			checkForm.call(this);
		});

		for (const key in inputFields) {
			inputFields[key].addEventListener('blur', function() {
				if (!_checkField(inputFields[key])) {
					inputFields[key].parentNode.classList.add('has-error');
				} else {
					inputFields[key].parentNode.classList.remove('has-error');
					valid[key] = true;
				}
			});
		}
	};

	return { initForm: initForm, checkForm: checkForm };
})();

document.addEventListener('DOMContentLoaded', function() {
	formModule.initForm({
		formEl: document.querySelector('.js-contact-form'),
		nameEl: document.querySelector('.js-name'),
		emailEl: document.querySelector('.js-email'),
		subjectEl: document.querySelector('.js-subject'),
		messageEl: document.querySelector('.js-message'),
		buttonEl: document.querySelector('.js-button'),
	});
});
