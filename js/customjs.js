function select (link) {
    const item = link.parentNode
    const nav = item.parentNode
    const index = Array.prototype.indexOf.call(nav.children, item)
    const items = nav.querySelectorAll('.navitem')
    const indicator = nav.querySelector('.navindic')

    indicator.style.setProperty('--index', index + 1)
    items.foreach(item => item.classlist.remove('active'))
    item.classlist.add('active')
}
const items = document.querySelectorAll('.item-link')
const randomItem = items[Math.round(Math.random() * (items.length - 1))]

select(randomItem)

var sites = [
                'http://www.google.com',
                'http://www.stackoverflow.com',
                'http://www.example.com',
                'http://www.youtube.com'
            ];

function randomSite() {
    var i = parseInt(Math.random() * sites.length);
    location.href = sites[i];
}


function randomlinks() {
    var myrandom=Math.round(Math.random()*63)
    var links=new Array()
    links[0]="https://krackgrapes.com/"
    links[1]="https://www.twitch.tv/xohray"
    links[2]="https://www.youtube.com/watch?v=sQtwq9dA09c"
    links[3]="https://www.youtube.com/watch?v=9O9oEY4Xmh8"
    links[4]="https://www.youtube.com/watch?v=e5Q5JCLwuaU"
    links[5]="https://www.youtube.com/watch?v=pF0NkryYj6o"
    links[6]="https://www.youtube.com/watch?v=KzRGqoSKd3E"
    links[7]="https://www.youtube.com/watch?v=gZdqr97UgSY"
    links[8]="https://www.youtube.com/watch?v=uIOAPd5hTtc"
    links[9]="https://www.youtube.com/watch?v=Y6X2vMvHpHo"
    links[10]="https://www.youtube.com/watch?v=VtGSX4mr7EQ"
    links[11]="https://www.youtube.com/watch?v=Udi5-qWw4Dw"
    links[12]="https://open.spotify.com/album/7sXzD1qf1zfXF0Um7esNSc?si=R2CXOqMIQGCe-V_Vk2sv8A"
    links[13]="https://www.youtube.com/watch?v=3NT25TH5kQQ"
    links[14]="https://www.youtube.com/watch?v=-fCtvurGDD8"
    links[15]="https://www.youtube.com/watch?v=xz1hfe6Fo4Y"
    links[16]="https://www.youtube.com/watch?v=mWm3QIp2hHw"
    links[17]="https://www.youtube.com/watch?v=4XgKYaDsFw8"
    links[18]="https://www.youtube.com/watch?v=WqH4Bpe7Mjk"
    links[19]="https://www.youtube.com/watch?v=FvIvkk8evVY"
    links[20]="https://www.youtube.com/watch?v=-gFVA31UVAc"
    links[21]="https://www.youtube.com/watch?v=-IoqzQbqitc"
    links[22]="https://www.youtube.com/watch?v=jI4ySa7ypfQ"
    links[23]="https://www.youtube.com/watch?v=dB5EVXew7QY"
    links[24]="https://www.youtube.com/watch?v=FH5XR68Bbsg"
    links[25]="https://www.youtube.com/watch?v=fSoT13msPe4"
    links[26]="https://www.youtube.com/watch?v=U4grXQoJEPM"
    links[27]="https://en.wikipedia.org/wiki/Synchronicity"
    links[28]="https://www.youtube.com/watch?v=1CZ2f2g0OxY"
    links[29]="https://en.wikipedia.org/wiki/Eternal_return"
    links[30]="https://en.wikipedia.org/wiki/Tashirojima"
    links[31]="https://en.wikipedia.org/wiki/Israeli%E2%80%93Palestinian_conflict"
    links[32]="https://en.wikipedia.org/wiki/Tashirojima"
    links[33]="https://en.wikipedia.org/wiki/Tashirojima"
    links[34]="https://open.spotify.com/album/7sXzD1qf1zfXF0Um7esNSc?si=R2CXOqMIQGCe-V_Vk2sv8A"
    links[35]="https://www.twitch.tv/xohray"
    links[36]="https://krackgrapes.com/"
    links[37]="https://en.wikipedia.org/wiki/Bob_Lazar"
    links[38]="https://en.wikipedia.org/wiki/Pig_Beach"
    links[39]="https://en.wikipedia.org/wiki/Great_Moon_Hoax"
    links[40]="https://en.wikipedia.org/wiki/London_Beer_Flood"
    links[41]="https://en.wikipedia.org/wiki/Tank_Man"
    links[42]="https://en.wikipedia.org/wiki/Tank_Man"
    links[43]="https://en.wikipedia.org/wiki/Impossible_color"
    links[44]="https://en.wikipedia.org/wiki/As_a_dog_returns_to_his_vomit,_so_a_fool_repeats_his_folly"
    links[45]="https://en.wikipedia.org/wiki/Flying_Spaghetti_Monster"
    links[46]="https://en.wikipedia.org/wiki/Islamic_toilet_etiquette"
    links[47]="https://en.wikipedia.org/wiki/Jerusalem_syndrome"
    links[48]="https://en.wikipedia.org/wiki/Miracle_of_the_Sun"
    links[49]="https://en.wikipedia.org/wiki/Wicked_Bible"
    links[50]="https://en.wikipedia.org/wiki/MKUltra"
    links[51]="https://en.wikipedia.org/wiki/Reformation"
    links[52]="https://en.wikipedia.org/wiki/Mansa_Musa"
    links[53]="https://www.youtube.com/watch?v=JnsUkjlYLjs"
    links[54]="https://www.youtube.com/watch?v=0MpuJrdYU3A"
    links[55]="https://en.wikipedia.org/wiki/Ninety-five_Theses"
    links[56]="https://en.wikipedia.org/wiki/Baptism_of_Jesus"
    links[57]="https://en.wikipedia.org/wiki/Chinese_room"
    links[58]="https://en.wikipedia.org/wiki/Schr%C3%B6dinger%27s_cat"
    links[59]="https://en.wikipedia.org/wiki/Golden_ratio"
    links[60]="https://www.youtube.com/watch?v=aYrOjbdxRkU"
    links[61]="https://www.youtube.com/watch?v=aYrOjbdxRkU"
    links[62]="https://www.youtube.com/watch?v=EJbnulJMVnM"
    links[63]="https://www.youtube.com/watch?v=u8HXIxHr3xg"
    window.location=links[myrandom]
}
