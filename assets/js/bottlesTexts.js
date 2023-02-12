const more_text = document.getElementById('more_text')
const line = document.getElementById('more_text_line')
const more_text_heading = document.getElementById('more_text_heading')
more_text_heading.style.scrollMargin = '300px'
const more_text_content = document.getElementById('more_text_content')

document.getElementById('bottle1').onclick = () => {
    more_text_content.style.display = 'block'
    more_text_heading.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    more_text_heading.innerHTML = 'Moritz rapeseed oil'
    more_text.innerHTML = 'Coldpressed MORITZ Rapeseed Oil is growing at an above-average rate on the German market. The quality of the edible oil is repeatedly put under the microscope. For example, the delicately nutty cooking oil has already received several DLG awards for outstanding quality.'
}

document.getElementById('bottle2').onclick = () => {
    more_text_content.style.display = 'block'
    more_text_heading.innerHTML = 'Moritz Rapeseed Oil Organic Canola'
    more_text_heading.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    more_text.innerHTML = 'Our coldpressed Moritz Rapeseed Oil Organic is obtained from the seeds of the rapeseed and is a real specialty. The rapeseed grains come from purely organic cultivation and are gently processed under strict controls.'
}

document.getElementById('bottle3').onclick = () => {
    more_text_content.style.display = 'block'
    more_text_heading.innerHTML = 'Moritz Sunflower Oil'
    more_text_heading.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    more_text.innerHTML = 'Also, our MORITZ Sunflower Oil is excellent for cooking, steaming, or frying (heatable up to 170°C), is ideal for baking or refine dressings, raw vegetables, dips, and dishes of any kind. A real allrounder in every kitchen'
}