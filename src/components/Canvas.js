import React from 'react'

class Canvas extends React.Component {

    width = 800;
    height = 500;
    ids = [];

    drawCircle = () => {
        // codice dell'effetto 1
        let cx = this.getRand(0, this.width); 
        let cy = this.getRand(0, this.height); 

        let size = this.getRand(10, 100);

        this.context.beginPath();
        this.context.arc(cx, cy, size, 0, 2 * Math.PI);
        this.context.strokeStyle = this.getRandomColor();
        this.context.stroke();
    }

    drawMultiCircle = () => {
        let id = setInterval(this.drawCircle,100);
        this.ids.push(id);
    }
    
    stopDraw= () => {
        //clearInterval (this.id);
        this.ids.forEach((v, i) => {
            clearInterval (v);
        });
        this.ids = [];
    }

    drawPolygon = (vertex) => {
        // per generare immagine diddDI000
        this.context.beginPath();
        // 0, 1, 2
        let p0x, p0y;
        for(var i=0; i<vertex; i++) {

            let px = this.getRand(0, this.width); 
            let py = this.getRand(0, this.height); 
            if(i==0) {
                p0x = px;
                p0y = py;
                this.context.moveTo(px , py);
            } else {
                this.context.lineTo(px, py);
            }

            if(i==vertex-1) {
                this.context.lineTo(p0x, p0y);
            }
        }

        this.context.strokeStyle = this.getRandomColor();    
        this.context.stroke();

    }

    drawImage = () => {
        var image = new Image();
        // image.crossOrigin = "Anonymous";
        image.onload = () => {
            this.context.drawImage(image, -100, -100);
        };
        image.src = require('../tree.jpg');
    }
    
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[this.getRand(0, 16)];
        }
        return color;
    }

    getRand = (from, to) => from + Math.floor(Math.random() * to+from);
    

    glitch = (s) => {
        // setInterval(() => {
                
            let px = this.getRand(0, this.width-s); 
            let py = this.getRand(0, this.height-s); 
            let p2x = this.getRand(0, this.width); 
            let p2y = this.getRand(0, this.height); 

            let sx = this.getRand(1, s);
            let sy = this.getRand(1, s);

            var imgData = this.context.getImageData(px, py, sx, sy);
            this.context.putImageData(imgData, p2x, p2y);
        // }, 100);
    }

    constructor(props) {
        super(props);    
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        const canvas = this.canvasRef.current;
        this.context = canvas.getContext('2d');
        this.context.lineWidth = 3;
        this.context.fillRect(0, 0, canvas.width, canvas.height);
        this.drawImage();
      }
        
    render() {
        return(
            <div>
                
                <div>{this.props.title}</div>
                <canvas ref={this.canvasRef} width={this.width} height={this.height} />
                <br></br>
                <button onClick={this.drawMultiCircle} >DrawCircle</button>
                <button onClick={() => this.drawPolygon(3)} >RANDOM GOD</button>
                <button onClick={() => this.drawPolygon(5)} >Polygon</button>
                <button onClick={() => this.glitch(200)} >Glitch</button>
                <button onClick={this.stopDraw}>stop</button>

            </div>
        )
        }
    }
    export default Canvas