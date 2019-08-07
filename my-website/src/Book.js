import React from 'react'
import './Book.css'
import FlipPage from 'react-flip-page'
import Pages from '../components/Pages'

class Book extends React.Component {


  render(){

   const onePage = this.props.pages.map(page => {
     return <Pages currentPage={this.props.currentPage} clickedStickerOnPage={this.clickedStickerOnPage} removeStickerFromPage={this.props.removeStickerFromPage} stickers={this.props.stickers} key={page.id} page={page} />
   })
   return(
     <div className="Book">
       <h1>Sticker Book</h1>
        <FlipPage onPageChange={(pageIndex) => this.props.handlehandleFlipChange(pageIndex)} orientation="horizontal">
          {onePage}
        </FlipPage>
    </div>
   )
  }
}

export default Book
