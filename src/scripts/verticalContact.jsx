import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from '~/i18n/utils.ts';

const formId = import.meta.env.FORMSPREE_FORM_ID;
export function VerticalContactForm({ locale }) {
	const t = useTranslation(locale);
	const [state, handleSubmit] = useForm(formId);

	if (state.succeeded) {
		return <p>{t.contact.form.success}</p>;
	}

	return (

		<form id='contact-form-vertical'
			  className='flex flex-nowrap flex-col justify-end gap-4 min-[500px]:hidden
                [&_input]:bg-background-step-1 [&_input]:backdrop-blur-[10px] [&_input]:rounded-sm [&_input]:p-[0.75em]
                [&_textarea]:bg-background-step-1 [&_textarea]:backdrop-blur-[10px] [&_textarea]:rounded-sm [&_textarea]:p-[0.75em]
                [&_textarea]:min-h-[10em]
                [&_button]:py-2 [&_button]:px-4 [&_button]:self-center'
			  onSubmit={handleSubmit}
			  method="POST"
			  action={"https://formspree.io/f/" + formId}>

			<input
				name='name' id='name-vertical'
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
				name='email' id='email-vertical'
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
				name='message' id='message-vertical'
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

			<button id='sendMessageButton-vertical' type='submit'
					className='vertical'
					disabled={state.submitting}>
				{t.contact.form.send}
			</button>

			<input
				name='subject' id='subject-vertical'
				type='hidden'
				value={t.contact.form.subject}
			/>
		</form>
	);
}
