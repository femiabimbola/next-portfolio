"use server";

import { getErrorMessage, validateString } from '@/lib/utlis';
import {Resend} from 'resend'
import ContactFormEmail from '@/email/contact-form-email';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY)


export const sendEmail = async (formData: FormData) => {

  console.log("running on server");
  const message = formData.get('message')
  const senderEmail =  formData.get('senderEmail')


  if(!validateString(senderEmail, 500)) return { error: 'invalid sender email'}
  if(!validateString(message, 5000)) return { error: 'invalid message'}

let data;
try {
  await console.log('executing')
  data = await resend.emails.send({
    from:"Contact Form   <onboarding@resend.dev>",
    to: 'abimbola_mj@yahoo.com',
    subject:'Message from contact form',
    // reply_to: senderEmail as string,
    text: message as string,
    // react: React.createElement(ContactFormEmail, {message:message as string, senderEmail: senderEmail as string })
  })
  await console.log('executed')
} catch (error: unknown) {
  return { error: getErrorMessage(error)};
}

return {data,};
};

