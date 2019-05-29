import React from 'react'

class Canvas extends React.Component {

    width = 640;
    height = 480;

    drawCircle = () => {
        // codice dell'effetto 1
        let cx = Math.floor(Math.random() * this.width); 
        let cy = Math.floor(Math.random() * this.height); 

        this.context.beginPath();
        this.context.arc(cx, cy, 50, 0, 2 * Math.PI);
        this.context.strokeStyle = "#FF0000";
        this.context.stroke();
    }

    onClickEffect2 = () => {
        // codice dell'effetto 1
        alert('hai applicato l\'effetto 2');
    }

    onClickEffect3 = () => {
        // codice dell'effetto 1
        alert('hai applicato l\'effetto 3');
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
                <button onClick={this.onClickEffect2} >Effetto 2</button>
                <button onClick={this.onClickEffect3} >Effetto 3</button>
            </div>
        )
        }
    }
    export default Canvas