"use server"

import { validateString } from "@/lib/utils"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    const message = formData.get('senderMessage')
    const email = formData.get('senderEmail')

    console.log(email)
    if (!validateString(email, 500)) {
        return {error: "Invalid sender-email"}
    }
    if (!validateString(message, 5000)) {
        return {error: "Invalid message"}
    }


    try { await  resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: 'wiredgtars@gmail.com',
        subject: 'Message from contact form',
        text: message as string,
        reply_to: email as string,

    }) }catch (error) {
        console.log(error)
    }
  
}