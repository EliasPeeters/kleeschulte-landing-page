document.getElementById('home').addEventListener('click', function () {
    document.getElementById('startBlock').style.scrollMargin = '150px'
    document.getElementById('startBlock').scrollIntoView({behavior: 'smooth'})
})

document.getElementById('nav_about').addEventListener('click', function () {
    document.getElementById('about').style.scrollMargin = '150px'
    document.getElementById('about').scrollIntoView({behavior: 'smooth'})
})

document.getElementById('nav_variations').addEventListener('click', function () {
    document.getElementById('variations').style.scrollMargin = '150px'
    document.getElementById('variations').scrollIntoView({behavior: 'smooth'})
})

document.getElementById('nav_contact').addEventListener('click', function () {
    window.location = 'mailto:export@kleeschulte.de'
})

