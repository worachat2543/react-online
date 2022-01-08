import React from 'react'
import React from "react";
import { Table, Image, Badge, Spinner } from "react-bootstrap"
import axios from "axios";

const IndexPage = () => {
    const [product, setProduct] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const getData = async () => {
        try{
            setLoading(true) // เริ่มหมุนติ้วๆตรงนี้
            const resp = await axios.get('https://api.codingthailand.com/api/course')
            // console.log(resp.data)
            setProduct(resp.data.data)
        } catch(error){
            // console.log(error.response)
            setError(error)
        }         
        finally {
            setLoading(false) // หยุดตรงนี้ทุกกรณีที่ทำเสร็จว่าว่าจะ try หรือ catch ก็ตาม
        }

    }

    React.useEffect(() => {
        getData()
    },[])

    if (loading === true){
        return(
            <div className="text-center mt-5">
                 <Spinner animation="border" variant="primary" />
            </div>
        )
    }

    if (error){
        return(
            <div className="text-center mt-5 text-danger">
                <h4>Error from API, plese try again</h4>
                <p>{error.response.data.message}</p>
            </div>
        )
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4">
          <h2>Product Page</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>nane</th>
                <th>Detail</th>
                <th>View</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>





              {
                  product.map((p, index) => {
                    return (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.detail} <button onClick={showMe} scr="https://www.flaticon.com/free-icon/html_121537" href="DetaiPage.js">Click!!</button> </td>
                            <td><Badge variant="success">{p.view}</Badge></td>
                            {/* <td>{p.picture}</td> */}
                            <td><Image src={p.picture} rounded width={60} /></td>
                        </tr>
                    )
                  })
              }
              
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
            }
export default IndexPage;
