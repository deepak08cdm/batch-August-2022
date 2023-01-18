import React,{useContext, useState} from 'react'
export const MainContext = React.createContext()
function MainProvider(props) {
    const [data,setData] = useState('asd')
  return (
    <MainContext.Provider value={{name:data, changeName:(val)=>setData(val)}} >
        {props.children}
    </MainContext.Provider>
  )
}

export default MainProvider