export const AUTH_CONFIG = {
    // domain:'dev-67ou39ym.auth0.com',
    // client_id: '8nVmn5vMJjRjvqjYh4X57ZU73xeotL5i',
    // audience: 'https://dev-67ou39ym.auth0.com/userinfo',
      domain: process.env.domain,
      clientID: process.env.clientID,
      audience:process.env.audience
   
}