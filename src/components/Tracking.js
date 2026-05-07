import { useState } from "react";
import "../styles/tracking.css";

function Tracking() {

  const [loading, setLoading] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [shipment, setShipment] = useState(null);

  const handleTracking = () => {
  setLoading(true);
  setShipment(null);

  setTimeout(() => {
    if (trackingNumber === "JMS0001") {
      setShipment({
        status: "In Transit",
        location: "Colombo",
        delivery: "Tomorrow",
      });
    } else if (trackingNumber === "JMS0002") {
      setShipment({
        status: "Delivered",
        location: "Kandy",
        delivery: "Completed",
      });
    } else {
      setShipment({
        status: "Tracking Number Not Found",
      });
    }

    setLoading(false);
  }, 1200);
}

  return (
    <section className="tracking" id="tracking">

      <h2>TRACK YOUR SHIPMENT</h2>

      <p>
        Enter your tracking number below to check shipment status.
      </p>

      <div className="tracking-box">

        <input
          type="text"
          placeholder="Enter Tracking Number"
          value={trackingNumber}
          onChange={(e) =>
            setTrackingNumber(e.target.value)
          }
        />

       <button onClick={handleTracking}>
      {loading ? "TRACKING..." : "TRACK"}
      </button>

      </div>

      {shipment && (

        <div className={`tracking-result ${shipment.status === "Delivered" ? "delivered" : shipment.status === "In Transit" ? "transit" : "not-found"}`}>

          <h3>
            Shipment Status
          </h3>

          <p>
            <strong>Status:</strong> {shipment.status}
          </p>

          {shipment.location && (
            <p>
              <strong>Current Location:</strong> {shipment.location}
            </p>
          )}

          {shipment.delivery && (
            <p>
              <strong>Estimated Delivery:</strong> {shipment.delivery}
            </p>
          )}

        </div>

      )}

    </section>
  );
}

export default Tracking;