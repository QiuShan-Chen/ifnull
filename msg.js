document.addEventListener('DOMContentLoaded', () => {
  fetch('https://api.ipify.cn/?format=json')
    .then(response => response.json())
    .then(data => {
      ipText.innerText = data.ip
    })
  msgText.innerText = new URLSearchParams(location.search).get('msg')
})
