import React from 'react'

class Canvas extends React.Component {

    width = 640;
    height = 480;
    ids = [] ;

    drawCircle = () => {
        // codice dell'effetto 1
        let cx = Math.floor(Math.random() * this.width); 
        let cy = Math.floor(Math.random() * this.height); 

        let size = 10 + Math.floor(Math.random() * 90);

        this.context.beginPath();
        this.context.arc(cx, cy, size, 0, 2 * Math.PI);
        this.context.strokeStyle = this.getRandomColor();
        this.context.stroke();
    }

    drawMultiCircle = () => {
        
        /*
        for (let i = 0 ; i < 30; i++){
            this.drawCircle ();     
        }
        */

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

            let px = Math.floor(Math.random() * this.width); 
            let py = Math.floor(Math.random() * this.height); 
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
    
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    constructor(props) {
        super(props);    
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        const canvas = this.canvasRef.current;
        this.context = canvas.getContext('2d');
        this.context.fillRect(0, 0, canvas.width, canvas.height);
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

                <button onClick={this.stopDraw}>stop</button>
            </div>
        )
        }
    }
    export default Canvas