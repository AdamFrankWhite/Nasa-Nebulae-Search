import React from 'react'
import Card from './Card'
import QuantForm from './QuantForm'

class Gallery extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            searchTerm: "nebula",
            galleryData: {},
            randImgUrl: "",
            randImgCaption: "",
            imgQuant: "1",
            searchType: "",
            randImgs: []
    
        }
        this.getImages = this.getImages.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    updateGallery() {
        fetch(`https://images-api.nasa.gov/search?q=nebula%20${this.state.searchTerm}`)
            .then(response => response.json())
            .then(response => {
                const {items} = response.collection
                this.setState({galleryData: items, isLoading: false})
            })
    }
    componentDidMount() {
        this.updateGallery()
        
    }

    getImages(e) {
        
        const imgArray = []
        const duplicateCheck = [] // cannot easily compare objects, so create stringified list
        for (let i=0; i<this.state.imgQuant; i++) {
            const randNum = Math.floor(Math.random() * this.state.galleryData.length)
            const randImgData =  this.state.galleryData[randNum]
            const id = randImgData.data[0].nasa_id
            const randImgUrl = randImgData.links[0].href
            const randImgCaption = randImgData.data[0].title
            const imgObj = {
                randImgUrl: randImgUrl, 
                randImgCaption: randImgCaption,
                id: id,
                picSizes: [
                    `http://images-assets.nasa.gov/image/${id}/${id}~orig.jpg`,
                    `http://images-assets.nasa.gov/image/${id}/${id}~medium.jpg`,
                    `http://images-assets.nasa.gov/image/${id}/${id}~small.jpg`,
                    `http://images-assets.nasa.gov/image/${id}/${id}~thumb.jpg`,
                ]
            }
           
            duplicateCheck.includes(JSON.stringify(imgObj)) ? i -= 1: imgArray.push(imgObj)
            duplicateCheck.push(JSON.stringify(imgObj))
            e.preventDefault()
            
        }
        
        this.setState({
            randImgs: imgArray
        })
        console.log(this.state.randImgs)
    }

    handleChange(e) {
        if (e.target.name === "searchTerm" && e.target.value) {
            this.setState({searchTerm: e.target.value}, ()=> {
                this.updateGallery()
                console.log(this.state.searchTerm)
            })
            
        } 
        e.target.name === "quant" && this.setState({imgQuant: e.target.value })
        // e.target.name === "category" && this.setState()
    }
    render() {
        return (
            <div className="main-cont">
                <QuantForm 
                    handleChange={this.handleChange} 
                    quant={this.state.imgQuant} 
                    searchTermValue={this.state.searchTerm}
                    clickHandle={this.getImages}
                />
                {this.state.isLoading ? <h2>...loading</h2> : null}
                <div className="card-cont">
                    {this.state.randImgs &&
                    this.state.randImgs.map( (img) => {
                        return (
                            <Card 
                                src={img.randImgUrl}
                                caption={img.randImgCaption}
                                multi={this.state.randImgs.length}
                                key={img.id}
                                imgData={img.picSizes}
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