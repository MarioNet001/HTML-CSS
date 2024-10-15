



export class BgStars extends HTMLElement {
    constructor(parameters) {
        super()
        this.attachShadow({mode: "open"})
        this.render()
        this.style()
    }

    style(){
        return /*css*/`
        body{
            background: #171717;
        }
        
        .container{
            background-image: linear-gradient(#0b2b58, #000);
            position: fixed;
            inset: 0;
            z-index: -10;
        } 
        
        .space{
            --size:4px;
            --space-layer: 
            4vw 50vh 0 #fff,
            8vw 20vh 0 #fff;
            --duration: 20s;
            width: var(--size);
            height: var(--size);
            box-shadow: var(--space-layer);
            position: absolute;
            top: 0;
            left: 0;
            animation: movestar var(--duration) linear infinite;
        }
        
        @keyframes movestar {
            from{ transform: translateY(0);}
            to{ transform: translateY(-100vh);}
        }
        `
    } 

    render(){
        this.shadowRoot.innerHTML = /*html*/`
        <style>
            ${this.style()}
        </style>
        <div class="container">
        <div class="space space1"></div>
        <div class="space space2"></div>
        <div class="space space3"></div>
    </div>
        
    `
    this.js()
    }

    js(){
        const Colors =["#fff2","#fff4","#fff7","#fffc"]
        const createStar = (size, selector,maxStars,duration) => {
        const layer = []
        for (let i = 0; i < maxStars; i++) {
        let color = Colors[Math.floor(Math.random() * Colors.length)]
        let x = Math.floor(Math.random() * 100)
        let y = Math.floor(Math.random() * 100)
        let ymas = y+100
        layer.push(x+ "vw "+ y+"vh 0 "+ color+ " , "+ x+"vw "+ ymas + "vh 0 "+ color)
        }
        let conteiner = this.shadowRoot.querySelector(selector)
        console.log(conteiner);
        
        conteiner.style.setProperty('--space-layer', layer.join(','))
        conteiner.style.setProperty("--size", size)
        conteiner.style.setProperty("--duration", duration)
        
    }
    createStar("4px",".space1",100,"20s")
    createStar("2px",".space2",80,"10s")
    createStar("6px",".space3",120,"35s")
    
    }
}

customElements.define("bg-stars",BgStars)
const appElement = document.createElement("bg-stars")
document.body.appendChild(appElement)