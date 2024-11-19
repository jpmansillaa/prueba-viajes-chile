// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(Document).ready(function(){
    $('#boton-mensaje').click(function(){
        alert("El mensaje fue enviado correctamente")
    })
})

