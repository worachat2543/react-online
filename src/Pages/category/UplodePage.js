import React, { useState } from "react";
const UploadImg = () => {
const [file, setFile] = useState({}) 
const [imagePreviewUrl, setImagePreviewUrl] = useState(null) 
const handleUploadImage = (e) => { 
    const file = e.target.files[0] 
    const reader = new FileReader(); 
    reader.onloadend = () => { 
        setFile(file) 
        setImagePreviewUrl(reader.result)
    }
    reader.readAsDataURL(file) 
}
return(
<React.Fragment>
   <input 
     type="file"
     onChange={handleUploadImage} 
   />
   <button> Upload </button>
</React.Fragment>
)
}
export default UploadPage