"use server";

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

export type ContactFormValues = {
  name: string;
  email: string;
  budget: string;
  message: string;
};

export type ContactFormErrors = Partial<
  Record<keyof ContactFormValues, string>
> & {
  form?: string;
};

export type ContactFormState = {
  ok: boolean;
  errors: ContactFormErrors;
  values: ContactFormValues;
};

const validBudgets = new Set([
  "under-5k",
  "5k-15k",
  "15k-30k",
  "30k-plus",
  "not-sure",
]);

function getStringField(formData: FormData, name: string): string {
  const value = formData.get(name);
  return typeof value === "string" ? value : "";
}

function isMissingFile(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "ENOENT"
  );
}

async function saveDevelopmentMessage(values: ContactFormValues) {
  const filePath = join(process.cwd(), "data", "contact-messages.json");
  await mkdir(dirname(filePath), { recursive: true });

  let messages: unknown[] = [];

  try {
    const fileContents = await readFile(filePath, "utf8");
    const parsed: unknown = JSON.parse(fileContents);

    if (!Array.isArray(parsed)) {
      throw new Error("Contact message file must contain a JSON array.");
    }

    messages = parsed;
  } catch (error) {
    if (!isMissingFile(error)) {
      throw error;
    }
  }

  messages.push({
    ...values,
    receivedAt: new Date().toISOString(),
  });

  await writeFile(filePath, `${JSON.stringify(messages, null, 2)}\n`, "utf8");
}

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const values: ContactFormValues = {
    name: getStringField(formData, "name").trim(),
    email: getStringField(formData, "email").trim(),
    budget: getStringField(formData, "budget"),
    message: getStringField(formData, "message").trim(),
  };
  const errors: ContactFormErrors = {};

  if (values.name.length < 2 || values.name.length > 80) {
    errors.name = "Enter a name between 2 and 80 characters.";
  }

  if (
    values.email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)
  ) {
    errors.email = "Enter a valid email address.";
  }

  if (!validBudgets.has(values.budget)) {
    errors.budget = "Choose a budget range.";
  }

  if (values.message.length < 20 || values.message.length > 2000) {
    errors.message = "Your message must be between 20 and 2,000 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors, values };
  }

  if (process.env.NODE_ENV !== "development") {
    return {
      ok: false,
      errors: {
        form: "Message storage is not configured here yet. Please email hello@northstar.studio.",
      },
      values,
    };
  }

  await saveDevelopmentMessage(values);

  return { ok: true, errors: {}, values };
}
