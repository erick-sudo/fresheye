import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom"
import Livestream from './components/Livestream';
import Payment from './components/Payment';
import { FaShieldAlt } from "react-icons/fa"
import { VscUnverified } from "react-icons/vsc"
import { useState } from 'react';

function AccessDenied() {
  return (
    <div className="access-denied">
      <h1>Access Denied</h1>
      <div className='shield-access'><FaShieldAlt /></div>
    </div>
  )
}

function PaymentStatus({paymentStatus}) {
  return (
      <div className='daraja-response-page'>
          <h1>Daraja Response</h1>
          {
            Object.keys(paymentStatus).map((entry, index) => {
              return (
                <div key={index}>
                  <h3>{entry}</h3>
                  <h5>{paymentStatus[entry]}</h5>
                </div>
              )
            })
          }
      </div>

  )
}

function Access() {

  const [code, setCode] = useState("")

  const navigate = useNavigate()

  return (
    <div className="input-token" >
        <div className='verify-icon'>
          <VscUnverified />
        </div>
        <form onSubmit={(e) => {
          e.preventDefault()
          if(code.length === 10) {
            navigate(`/live/${code}`)
          }
        }}>
            <h1>Verify Code</h1>
            <input value={code} className="mpesa-code" onChange={(e) => {
              if(e.target.value.length <= 10) {
                setCode(e.target.value.toUpperCase().split(" ").join(""))
              }
            }} type="text" placeholder="RXXXXXXXXX" />
            <input className="request-access" type="submit" value="Verify" />
        </form>
    </div>
  )
}

function App() {

  const [ paymentStatus, setPaymentStatus ] = useState({})

  function setPaymentStatusHelper(status) {
    setPaymentStatus(status)
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/token" element={<Access />}/>
        <Route path="/" element={<Payment setPaymentStatusHelper={setPaymentStatusHelper} />} />
        <Route path="/live/:accessToken" element={<Livestream />} />
        <Route path="/invalidaccess" element={<AccessDenied />} />
        <Route path="/paymentstatus" element={<PaymentStatus paymentStatus={paymentStatus}/>} />

      </Routes>
    </div>
  );
}

export default App;
