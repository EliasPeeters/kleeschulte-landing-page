document.getElementById('home').addEventListener('click', function () {
    document.getElementById('quality').style.scrollMargin = '150px'
    document.getElementById('quality').scrollIntoView({behavior: 'smooth'})
})

document.getElementById('nav_about').addEventListener('click', function () {
    document.getElementById('coldPressed').style.scrollMargin = '150px'
    document.getElementById('coldPressed').scrollIntoView({behavior: 'smooth'})
})

document.getElementById('nav_variations').addEventListener('click', function () {
    document.getElementById('storing').style.scrollMargin = '150px'
    document.getElementById('storing').scrollIntoView({behavior: 'smooth'})
})

document.getElementById('nav_contact').addEventListener('click', function () {
    window.location = 'mailto:export@kleeschulte.de'
})

