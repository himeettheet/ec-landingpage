const env = {
  "DOMAIN" :"https://app.tmessage.net",
  "LOGIN" : "auth/login",
  "CREATE_ACCOUNT" : "auth/create-account"
}

const clickBtn = (value) => {
  let url = `${env.DOMAIN}`
  window.open(`${url}/${env[value]}`,'_self')
}


