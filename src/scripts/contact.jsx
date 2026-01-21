import { useForm } from '@formspree/react';
import { useTranslation } from '~/i18n/utils.ts';

const formId = import.meta.env.FORMSPREE_FORM_ID;
const t = useTranslation();

export default function ContactForm() {
	const [state, handleSubmit] = useForm(formId);

	if (state.succeeded) {
		return <p>Thanks for your submission!</p>;
	}

	return (

		<form id='contact-form' onSubmit={handleSubmit}>

			<input
				name='name' id='name'
				type='text'
				required='required'
				autoComplete='off'

				placeholder={t.contact.form.name}
				data-validation-required-message={t.contact.form.warning}
			/>

			<input
                name='email' id='email'
                type='email'
                required='required'
                autoComplete='off'

                placeholder={t.contact.form.email}
                data-validation-required-message={t.contact.form.warning}
			/>

			<br/>

			<button id='sendMessageButton' type='submit'>
				{t.contact.form.send}
			</button>

			<textarea
                name='message' id='message'
                required='required'
                autoComplete='off'

                placeholder={t.contact.form.message}
                data-validation-required-message={t.contact.form.warning}
			/>

			<input
                name='subject' id='subject'
                type='hidden'
                value={t.contact.form.subject}
			/>
		</form>
	);
}
