import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Form } from 'react-bootstrap';

const schema = yup.object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  }).required();

const CreatePage = () => {

    const [version, setVersion] = React.useState("")

    const getData = async() => {
        const resp = await axios.get('https://api.codingthailand.com/api/version')
        // console.log(resp.data.data.version)
        setVersion(resp.data.data.version)
    }

    React.useEffect(() => {

        getData()

    },[])
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      const onSubmit= (data) => {
          console.log(data)
      }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-4">
                    <h2>Create</h2>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Form>
                </div>
            </div>            
        </div>
    )
}


export default CreatePage
