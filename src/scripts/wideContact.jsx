import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from '~/i18n/utils.ts';

const formId = import.meta.env.FORMSPREE_FORM_ID;
export function WideContactForm({ locale }) {
	const t = useTranslation(locale);
	const [state, handleSubmit] = useForm(formId);

	if (state.succeeded) {
		return <p>{t.contact.form.success}</p>;
	}

	return (

		<form id='contact-form-wide'
              className='flex flex-wrap flex-col justify-end min-h-[10em] max-h-[15em] gap-4 mt-4 max-[500px]:hidden
                [&_input]:bg-background-step-1 [&_input]:backdrop-blur-[10px] [&_input]:rounded-sm [&_input]:p-[0.75em]
                [&_textarea]:bg-background-step-1 [&_textarea]:backdrop-blur-[10px] [&_textarea]:rounded-sm [&_textarea]:p-[0.75em]
                [&_textarea]:min-h-[10em] [&_textarea]:grow-[5] [&_textarea]:resize-none
                [&_button]:py-2 [&_button]:px-4 [&_button]:self-center [&_button]:mb-2'
              onSubmit={handleSubmit}
              method="POST"
              action={"https://formspree.io/f/" + formId}>

			<input
                name='name' id='name-wide'
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
                name='email' id='email-wide'
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

			<button id='sendMessageButton-wide' type='submit'
                    disabled={state.submitting}>
				{t.contact.form.send}
			</button>

			<textarea
                name='message' id='message-wide'
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
				name='subject' id='subject-wide'
                type='hidden'
                value={t.contact.form.subject}
			/>
		</form>
	);
}
