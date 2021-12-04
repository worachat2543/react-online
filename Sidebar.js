import React from 'react'

const Sidebar = () => {
    //let fullname = 'John'

    const [isShow, setIsShow] = React.useState(true)
    const [fullname,setFullname] = React.useState('John')

    const changeName = () => {
        //fullname = "Marry"
        setFullname("Marry")
        setIsShow(false)
    }

    React.useEffect(()=>{
        console.log("sidebar useEffect")
        //ทำงานทุกครั้ง
    })

    React.useEffect(()=>{
        console.log("sidebar useEffect one time only")
        //ทำงานครั้งแรกครั้งเดียว
    },[])

    React.useEffect(()=>{
        console.log("sidebar useEffect fullname")
        //ทำงานครั้งแรกตอนเล่นเด่อ และอีครั้งตอนเปลี่นยนชื่อ
    },[fullname])
    /*const [fullname,setFullname] = React.useState('John')*/
    return (
        <div>
            <p>สวัสดี {fullname}</p>
            {
                isShow ? <p>Hello</p> : <p>World</p>
            }
            <button onClick={changeName}>Change Name</button>
            
        </div>
    )
}

export default Sidebar
