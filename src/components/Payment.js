import React, {useState} from "react";
import poster from "./assets/playback.jpeg"
import mpesalogo from "./assets/mpesalogo.png"
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

function Payment({setPaymentStatusHelper}) {

    const [phone, setNumber] = useState(7)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 7000)

        if(event.target.phonenumber.value.length === 9) {
            fetch("https://fresheye-transactions.herokuapp.com/buyticket", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    phonenumber: event.target.phonenumber.value
                })
            })
            .then(response => {
                
                return response.json()
            })
            .then(data => {
                setLoading(false)
                setPaymentStatusHelper(data)
                
                navigate("/token")
            })
        }
    }

    return (
        <div className="payment-page">
            {loading ? <Loading /> : null}
            <div className="payment">
            <div className="poster">
                <img src={poster} alt="POSTER"/>
                <div className="event-calendar">
                    <span>4TH</span>
                    <span>Sat</span>
                </div>
            </div>
            <div className="payment-form">
                <h1>Buy Ticket</h1>
                <form onSubmit={handleSubmit}>
                    <div className="paybill-number">
                        <div className="mpesa-logo">
                            <img src={mpesalogo} alt="Mpesa" />
                        </div>
                        <h1>522522</h1>
                    </div>
                    <div className="phone-number">
                        <span className="country-code">+254</span>
                        <input name="phonenumber" value={phone} type="number" onChange={(e) => {
                            if(e.target.value.length <= 9) {
                                setNumber((e.target.value))
                            }
                        }} placeholder="796584498" />
                    </div>
                    <input type="submit" value="Buy Ticket" />
                </form>
            </div>
        </div>
        </div>
    )
}

export default Payment;