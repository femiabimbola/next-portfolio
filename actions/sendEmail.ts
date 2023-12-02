"use server";

import { validateString } from '@/lib/utlis';
import {Resend} from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)



export const sendEmail = async (formData: FormData) => {

  console.log("running on server");
  console.log(formData.get("message"));
  const message = formData.get('message')
  const senderEmail =  formData.get('email')
  
  // learningPoint -> this is for text value comment  one to see what happens
  
  if(!message || typeof message !== 'string') {
    return { status: 400, message: 'no message found'}
  }

  // if(typeof senderEmail !== 'string'){
  //   return { error: 'invalid sender email'}
  // }

  if(!validateString(senderEmail, 500)) return { error: 'invalid sender email'}

try {
  await resend.emails.send({
    from:"onboarding@resend.dev",
    to: 'abimbola_mj@yahoo.com',
    subject:'Message from contact form',
    reply_to: senderEmail as string,
    text:message 
  })  
} catch (error: any) {
  console.log(error.message)
  return{ error: error.message}
}

};

