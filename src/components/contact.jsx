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

			<p id='title'>{t.contact.title}</p>

			<input
				name='name' id='name'
				type='text'
				required='required'
				autoComplete='off'

				placeholder={t.contact.name}
				data-validation-required-message={t.contact.warning}
			/>

			<input
                name='email' id='email'
                type='email'
                required='required'
                autoComplete='off'

                placeholder={t.contact.email}
                data-validation-required-message={t.contact.warning}
			/>

			<button id='sendMessageButton' type='submit'>
				{t.contact.send}
			</button>

			<textarea
                name='message' id='message'
                required='required'
                autoComplete='off'

                placeholder={t.contact.message}
                data-validation-required-message={t.contact.warning}
			/>

			<input
                name='subject' id='subject'
                type='hidden'
                value={t.contact.subject}
			/>
		</form>
	);
}
