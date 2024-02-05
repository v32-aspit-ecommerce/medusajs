import { 
    type SubscriberConfig, 
    type SubscriberArgs,
  } from "@medusajs/medusa"
  
  export default async function handleInviteCreated({ 
    data, eventName, container, pluginOptions, 
  }: SubscriberArgs<Record<string, string>>) {
    const sendGridService = container.resolve("sendgridService")
    sendGridService.sendEmail({
      templateId: process.env.SENDGRID_USER_INVITE_ID,
      from: process.env.SENDGRID_FROM,
      to: data.user_email,
      dynamic_template_data: {
        // any data necessary for your template...
        token: data.token,
        email: data.user_email
      },
    })
  }
  export const config: SubscriberConfig = {
    event: "invite.created",
    context: {
      subscriberId: "invite-created-handler",
    },
}