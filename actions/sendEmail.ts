"use server";

import { getErrorMessage, validateString } from '@/lib/utlis';
import {Resend} from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)



export const sendEmail = async (formData: FormData) => {

  console.log("running on server");
  console.log(formData.get("message"));
  const message = formData.get('message')
  const senderEmail =  formData.get('senderEmail')
  
  // learningPoint -> this is for text value comment  one to see what happens
  
  // if(!message || typeof message !== 'string') {
  //   return { status: 400, message: 'no message found'}
  // }

  // if(typeof senderEmail !== 'string'){
  //   return { error: 'invalid sender email'}
  // }

    // Learning -> new Error('message') this throw new error

  if(!validateString(senderEmail, 500)) return { error: 'invalid sender email'}
  if(!validateString(message, 5000)) return { error: 'invalid message'}

try {
  await console.log('executing')
  await resend.emails.send({
    from:"Contact Form   <onboarding@resend.dev>",
    to: 'abimbola_mj@yahoo.com',
    subject:'Message from contact form',
    reply_to: senderEmail as string,
    // text: message as string,
    // react:
  })
  await console.log('executed')
} catch (error: unknown) {
  return { error: getErrorMessage(error)}
  
}

};

