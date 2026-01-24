import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from '~/i18n/utils.ts';

const formId = 'xnjjadyp'; //import.meta.env.FORMSPREE_FORM_ID;
const t = useTranslation();

export function ContactForm() {
	const [state, handleSubmit] = useForm(formId);

	if (state.succeeded) {
		return <p>Thanks for your submission!</p>;
	}

	return (

		<form id='contact-form'
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

			<button	id='sendMessageButton' type='submit'
					disabled={state.submitting}>
				{t.contact.form.send}
			</button>

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

			<input
				name='subject' id='subject'
				type='hidden'
				value={t.contact.form.subject}
			/>
		</form>
	);
}
