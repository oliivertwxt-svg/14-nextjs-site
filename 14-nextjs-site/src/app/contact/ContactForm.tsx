"use client";

import { useActionState } from "react";
import {
  submitContactForm,
  type ContactFormState,
} from "./actions";

const initialState: ContactFormState = {
  ok: false,
  errors: {},
  values: {
    name: "",
    email: "",
    budget: "",
    message: "",
  },
};

const fieldClassName =
  "mt-2 w-full rounded-xl border border-[#17231d]/15 bg-[#f7f8f2] px-4 py-3 text-sm text-[#17231d] outline-none transition placeholder:text-[#929c94] focus:border-[#557c56] focus:ring-2 focus:ring-[#557c56]/15";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm shadow-[#17231d]/5 sm:p-8">
      <h2 className="text-xl font-semibold tracking-[-0.03em]">
        Send us a note
      </h2>
      <p className="mt-2 text-sm leading-6 text-[#66716a]">
        A few details will help us start in the right place.
      </p>

      {state.ok && (
        <p
          className="mt-6 rounded-xl bg-[#e9eee2] p-4 text-sm leading-6 text-[#26372c]"
          role="status"
          aria-live="polite"
        >
          Thanks, {state.values.name}. Your message has been saved locally.
          This development form does not send email yet.
        </p>
      )}

      {state.errors.form && (
        <p
          className="mt-6 rounded-xl bg-[#fff0e9] p-4 text-sm leading-6 text-[#7b3524]"
          role="alert"
          aria-live="polite"
        >
          {state.errors.form}
        </p>
      )}

      <form action={formAction} className="mt-7 space-y-5">
        <div>
          <label htmlFor="contact-name" className="text-sm font-semibold">
            Your name <span aria-hidden="true">*</span>
          </label>
          <input
            autoComplete="name"
            className={fieldClassName}
            defaultValue={state.values.name}
            id="contact-name"
            name="name"
            required
            aria-invalid={Boolean(state.errors.name)}
            aria-describedby={state.errors.name ? "contact-name-error" : undefined}
          />
          {state.errors.name && (
            <p className="mt-2 text-sm text-[#a33d2b]" id="contact-name-error">
              {state.errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="text-sm font-semibold">
            Email address <span aria-hidden="true">*</span>
          </label>
          <input
            autoComplete="email"
            className={fieldClassName}
            defaultValue={state.values.email}
            id="contact-email"
            name="email"
            required
            type="email"
            aria-invalid={Boolean(state.errors.email)}
            aria-describedby={state.errors.email ? "contact-email-error" : undefined}
          />
          {state.errors.email && (
            <p className="mt-2 text-sm text-[#a33d2b]" id="contact-email-error">
              {state.errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-budget" className="text-sm font-semibold">
            Project budget <span aria-hidden="true">*</span>
          </label>
          <select
            className={fieldClassName}
            defaultValue={state.values.budget}
            id="contact-budget"
            name="budget"
            required
            aria-invalid={Boolean(state.errors.budget)}
            aria-describedby={state.errors.budget ? "contact-budget-error" : undefined}
          >
            <option value="" disabled>
              Select a range
            </option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-15k">$5,000–$15,000</option>
            <option value="15k-30k">$15,000–$30,000</option>
            <option value="30k-plus">$30,000+</option>
            <option value="not-sure">Not sure yet</option>
          </select>
          {state.errors.budget && (
            <p className="mt-2 text-sm text-[#a33d2b]" id="contact-budget-error">
              {state.errors.budget}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-message" className="text-sm font-semibold">
            What are you thinking about? <span aria-hidden="true">*</span>
          </label>
          <textarea
            className={`${fieldClassName} min-h-32 resize-y`}
            defaultValue={state.values.message}
            id="contact-message"
            maxLength={2000}
            name="message"
            required
            rows={5}
            aria-invalid={Boolean(state.errors.message)}
            aria-describedby={
              state.errors.message ? "contact-message-error" : undefined
            }
          />
          {state.errors.message && (
            <p className="mt-2 text-sm text-[#a33d2b]" id="contact-message-error">
              {state.errors.message}
            </p>
          )}
        </div>

        <button
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#17231d] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#2b4033] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#557c56] disabled:cursor-not-allowed disabled:opacity-60"
          disabled={isPending}
          type="submit"
        >
          {isPending ? "Sending…" : "Send message"}
          {!isPending && <span aria-hidden="true">↗</span>}
        </button>
      </form>
    </div>
  );
}
