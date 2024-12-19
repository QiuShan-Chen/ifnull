displayTarget.addEventListener('click', e => {
  const input = document.createElement('input')
  document.body.appendChild(input)
  input.setAttribute('value', e.target.innerText)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
})

fetch(document.location, {
  method: 'HEAD',
}).then((e, a) => {
  console.log('e', a, [...e.headers.keys()])
})