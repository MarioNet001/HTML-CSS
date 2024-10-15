

const Colors =["#fff2","#fff4","#fff7","#fffc"]
const createStar = (size, selector,maxStars,duration) => {
    const layer = []
    for (let i = 0; i < maxStars; i++) {
    let color = Colors[Math.floor(Math.random() * Colors.length)]
    let x = Math.floor(Math.random() * 100)
    let y = Math.floor(Math.random() * 100)
    layer.push(x+ "vw "+ y+"vh 0 "+ color+ ", "+ x+"vw "+ y+100+ "vh 0"+ color)
    }
    let conteiner = document.querySelector(selector)
    conteiner.style.setProperty('--space-layer', layer.join(','))
    conteiner.style.setProperty("--size", size)
    conteiner.style.setProperty("--duration", duration)
    
}

createStar("4px",".space1",100,"20s")
createStar("2px",".space2",80,"10s")
createStar("6px",".space3",120,"35s")
