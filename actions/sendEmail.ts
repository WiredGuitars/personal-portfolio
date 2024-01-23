"use server"

import { validateString, getErrorMessage } from "@/lib/utils"
import { Resend } from "resend"
import contactFormEmail from "@/email/contactFormEmail"
import React from "react"


const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    const message = formData.get('senderMessage')
    const email = formData.get('senderEmail')

    if (!validateString(email, 500)) {
        return {error: "Invalid sender-email"}
    }
    if (!validateString(message, 5000)) {
        return {error: "Invalid message"}
    }


    try { await  resend.emails.send({
        from: 'Contact Form <onboarding@resend.com>',
        to: 'dlaschanzky2@huskers.unl.edu',
        subject: 'Message from contact form',
        reply_to: email as string,
        react: React.createElement(contactFormEmail, {
        message: message as string,
        senderEmail: email as string})

    }) }catch (error: unknown) {
    return {
        error: getErrorMessage(error)
    }
    }
}