import React from 'react'
import { Button } from '../styles/style'
import Tiile from '../styles/title/Title'
import Logo from './Logo'
import Sidebar from './Sidebar'
import Menu from './Menu'


const Header = () => {
    let companyName = "TNI"
    const companyAddress = <p>Bangkok</p>
    const showMessage = () => {
        return companyName + ".com"
    }
    const isLogin = true;

    const showMe = () => {
        alert('Hello react')
    }
    const users = [
        {id: 1,name: 'Cola'},
        {id: 2,name: 'Fanta'}
    ]

    return (
        <div>
            <Tiile>Project react</Tiile>
            <h1>Hello {showMessage()}</h1>
            {
                //isLogin && <p>Welcome , Student</p>
                /*isLogin && (<div
                ><p>Welcome</p>
                <p> Student</p>
                </div>)
               isLogin === true ? (
               <p>Welcome , Student</p>
                ) : (
                <p>Welcome , Master</p>)*/
            }

            { isLogin ? <Logo/> : <p>Unlock</p>}


            

            <hr />
            <button onClick={showMe}>Click Me!</button>
            <Button onClick={showMe}>Click Me!
            </Button>

           <ul> {
                users.map((product,index) => {
                    return (<li key={index}>{index+1}{product.name}</li>)
                })
            }
            </ul>
            <Sidebar></Sidebar>
            <Menu></Menu>



        </div>
    )
}

export default Header
