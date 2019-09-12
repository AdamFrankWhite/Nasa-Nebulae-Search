import React from 'react'
import Card from './Card'
import QuantForm from './QuantForm'

class Gallery extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            galleryData: {},
            randImgUrl: "",
            randImgCaption: "",
            imgQuant: "1",
            randImgs: []
        }
        this.getRandomImg = this.getRandomImg.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }


    componentDidMount() {
        console.log("hello")
        fetch("https://images-api.nasa.gov/search?q=nebula")
            .then(response => response.json())
            .then(response => {
                const {items} = response.collection
                console.log(items)
                this.setState({galleryData: items, isLoading: false})
            })
        
    }

    getRandomImg() {
        const imgArray = []
        for (let i=0; i<this.state.imgQuant; i++) {
            const randNum = Math.floor(Math.random() * this.state.galleryData.length)
            imgArray.push({
                randImgUrl: this.state.galleryData[randNum].links[0].href, 
                randImgCaption: this.state.galleryData[randNum].data[0].description
            })
            
        }
        
        this.setState({
            randImgs: imgArray
        })
    }

    handleChange(e) {
        this.setState({imgQuant: e.target.value })
    }
    render() {
        return (
            <div className="main-cont">
                <h2>Gallery</h2>
                <QuantForm handleChange={this.handleChange} value={this.state.imgQuant}/>
                {this.state.isLoading ? <h2>...loading</h2> : null}
                <button onClick={this.getRandomImg}>Random Nebula</button>
                <div className="card-cont">
                    {this.state.randImgs &&
                    this.state.randImgs.map( (img) => {
                        return (
                            <Card 
                                src={img.randImgUrl}
                                caption={img.randImgCaption}
                                // TO DO - avoid duplicates!!
                            />
                        )
                    })
                    
                }
                </div>
               
            </div>
            
        )
    } 
}

export default Gallery