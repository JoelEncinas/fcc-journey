import React from "react"
import image from "./../images/shut-up-and-take-my-money.jpg"
import memesData from "../memesData"

function Meme() {
    const [meme, setMeme] = React.useState({
        image: image, 
        top: '', 
        bot: ''
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        let random = Math.floor(Math.random() * memesData.data.memes.length)
        const url = memesArray[random].url
        setMeme(prevMeme => ({
            ...prevMeme,
            image: url
        }))
    }

    function handleMouseEnter(){
        // console.log('entered img')
    }

    /* CHALLENGE
    let thingsArray = ['Thing 1']

    function addItemToArray(){
        thingsArray.push('Thing ' + (thingsArray.length + 1))
        console.log(thingsArray.length)
        console.log(thingsArray)
    }
    */

    return (
        <div>
            <main className="meme">
                <div className="meme__form">
                    <div className="meme__inputs">
                        <input className="meme__input" type='text' placeholder="Top text"></input>
                        <input className="meme__input" type='text' placeholder="Bottom text"></input>
                    </div>
                    <button className="meme__input-submit" onClick={getMemeImage}>Generate meme</button>
                    <div className="meme__image-container">
                    <img className="meme__image" onMouseEnter={handleMouseEnter} src={meme.image} alt="meme"/>
                    <h2 className="meme__text top">One does not simply</h2>
                    <h2 className="meme__text bottom">Walk into mordor</h2>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Meme
