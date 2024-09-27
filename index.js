function learnMore(location) {
    if (location === 'Milnerton') {
        alert("Milnerton is home to the iconic Woodbridge Island and offers great views of Table Mountain.");
    } else if (location === 'Dunoon') {
        alert("Dunoon is a bustling township with a rich cultural diversity and close-knit community life.");
    }
}

document.querySelectorAll('.facts-section ul li a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const fact = link.getAttribute('href');
        if (fact === 'https://www.stealthprop.co.za/area-profiles/milnerton') {
            alert("Milnerton was officially established in the late 19th century. It was initially developed as a suburb to accommodate the growing population of Cape Town.");
        } else if (fact === 'https://www.blaauwberg.net/history/milnerton_lighthouse.php') {
            alert("Built in 1936, the Milnerton Lighthouse serves as a navigational aid for ships entering Table Bay. It stands as an important historical landmark in the area.");
        } else if (fact === 'https://www.britannica.com/technology/railroad/Railroad-history') {
            alert("Once a crucial transport hub, the old Milnerton railway station played a significant role in connecting Milnerton to Cape Town, facilitating the movement of people and goods.");
        } else if (fact === 'https://www.woodbridgeisland.com/portfolios/about') {
            alert("Originally a military site with a history dating back to the 18th century, Woodbridge Island was repurposed for residential development in the 20th century. It now boasts a rich historical background.");
        } else if (fact === 'https://www.sportingpost.co.za/the-milnerton-racecourse-milnertonian-blogspot/') {
            alert("Established in the 1970s, the Milnerton Racecourse became a prominent venue for horse racing in the region. It reflects the area's evolving culture and economy.");
        }
    });
});