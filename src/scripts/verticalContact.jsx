import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from '~/i18n/utils.ts';

const formId = import.meta.env.FORMSPREE_FORM_ID;
const turnstileKey = import.meta.env.TURNSTILE_SITE_KEY;

export function VerticalContactForm({ locale }) {
	const t = useTranslation(locale);
	const [state, handleSubmit] = useForm(formId);

	if (state.succeeded) {
		return <p>{t.contact.form.success}</p>;
	}

	return (

		<form id='contact-form'
			  className='vertical'
			  onSubmit={handleSubmit}
			  method="POST"
			  action={"https://formspree.io/f/" + formId}>

			<input
				name='name' id='name'
				type='text'
				required
				autoComplete='off'

				placeholder={t.contact.form.name}
				data-validation-required-message={t.contact.form.warning}
			/>
			<ValidationError
				prefix='Name'
				field='name'
				errors={state.errors}
			/>

			<input
				name='email' id='email'
				type='email'
				required
				autoComplete='off'

				placeholder={t.contact.form.email}
				data-validation-required-message={t.contact.form.warning}
			/>
			<ValidationError
				prefix='Email'
				field='email'
				errors={state.errors}
			/>

			<br/>

			<textarea
				name='message' id='message'
				required
				autoComplete='off'

				placeholder={t.contact.form.message}
				data-validation-required-message={t.contact.form.warning}
			/>
			<ValidationError
				prefix='Message'
				field='message'
				errors={state.errors}
			/>

			<div
				id='cf-turnstile'
				className='cf-turnstile'
				data-size='flexible'
				data-sitekey={turnstileKey}
			/>

			<button id='sendMessageButton' type='submit'
					className='vertical'
					disabled={state.submitting}>
				{t.contact.form.send}
			</button>

			<input
				name='subject' id='subject'
				type='hidden'
				value={t.contact.form.subject}
			/>
		</form>
	);
}
