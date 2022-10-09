import React from 'react'

const PropertyList = () => {
  return (
    <div className="pList">
       <div className="pListItem"> 
         <img src="https://images.pexels.com/photos/1208781/pexels-photo-1208781.jpeg?auto=compress&cs=tinysrgb&w=300" alt="feature_image_1" className="pListImg" ></img>
           <div className="pListTitles">
              <h1>Dublin</h1>
              <h3>$123</h3>
           </div>
       </div>
       
       <div className="pListItem"> 
         <img src="https://images.pexels.com/photos/10953009/pexels-photo-10953009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="feature_image_1" className="pListImg" ></img>
           <div className="pListTitles">
              <h1>Munich</h1>
              <h3>$123</h3>
           </div>
       </div>
       <div className="pListItem"> 
         <img src="https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=300" alt="feature_image_1" className="pListImg" ></img>
           <div className="pListTitles">
              <h1>New York</h1>
              <h3>$123</h3>
           </div>
       </div>
       <div className="pListItem"> 
         <img src="https://images.pexels.com/photos/13521864/pexels-photo-13521864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="feature_image_1" className="pListImg" ></img>
           <div className="pListTitles">
              <h1>Ahemedabad</h1>
              <h3>$123</h3>
           </div>
       </div>
       
    </div>
  )
}

export default PropertyList
