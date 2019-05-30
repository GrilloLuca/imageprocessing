import React from 'react'

class Canvas extends React.Component {

    width = 640;
    height = 480;

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

    drawTriangle = () => {
        // per generare immagine diddDI000

        let p1x = Math.floor(Math.random() * this.width); 
        let p1y = Math.floor(Math.random() * this.height); 

        let p2x = Math.floor(Math.random() * this.width); 
        let p2y = Math.floor(Math.random() * this.height); 

        let p3x = Math.floor(Math.random() * this.width); 
        let p3y = Math.floor(Math.random() * this.height); 

        this.context.beginPath();
        this.context.moveTo(p1x , p1y);
        this.context.lineTo(p2x, p2y);
        this.context.lineTo(p3x, p3y);
        this.context.lineTo(p1x, p1y);

        this.context.strokeStyle = this.getRandomColor();    
        this.context.stroke();
        
    }

    onClickEffect3 = () => {
        // codice dell'effetto 1
        alert('hai applicato l\'effetto 3');
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
                <button onClick={this.drawCircle} >DrawCircle</button>
                <button onClick={this.drawTriangle} >RANDOM GOD</button>
                <button onClick={this.onClickEffect3} >Effetto 3</button>
            </div>
        )
        }
    }
    export default Canvas