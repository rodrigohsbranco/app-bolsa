const btnPassword = document.querySelector('#password-view')
const inputPassword = document.querySelector('#password')

btnPassword.addEventListener('click', () => {
  if (inputPassword.type === 'password') {
    inputPassword.type = 'text'
  } else {
    inputPassword.type = 'password'
  }
})
