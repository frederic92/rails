document.addEventListener('DOMContentLoaded', (event) => {
  /* Initialize tooltips */ 
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


  /* Scroll to the developers section when the start button is clicked */

  const startBtn = document.getElementById('js-start-btn')
  const devSection = document.getElementById('js-developers')
  startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    devSection.scrollIntoView({behavior: 'smooth', block: 'center'})
  })
})

