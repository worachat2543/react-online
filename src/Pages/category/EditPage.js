import React from 'react'

const EditPage = () => {

    const [version, setVersion] = React.useState("")

    const getData = async() => {
        const resp = await axios.get('https://api.codingthailand.com/api/version')
        // console.log(resp.data.data.version)
        setVersion(resp.data.data.version)
    }

    React.useEffect(() => {

        getData()

    },[])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-4">
                    <h2>Edit</h2>
                </div>
            </div>            
        </div>
    )
}


export default EditPage
