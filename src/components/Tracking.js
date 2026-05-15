import { useState } from "react";
import "../styles/tracking.css";

function Tracking() {
  const [loading, setLoading] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [shipment, setShipment] = useState(null);

  const handleTracking = () => {
    if (!trackingNumber.trim()) {
      setShipment({ status: "Please Enter Tracking Number" });
      return;
    }

    setLoading(true);
    setShipment(null);

    setTimeout(() => {
      const code = trackingNumber.trim().toUpperCase();

      if (code === "JMS0001") {
        setShipment({
          status: "In Transit",
          location: "Colombo",
          delivery: "Tomorrow",
        });
      } else if (code === "JMS0002") {
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
  };

  return (
    <section className="tracking" id="tracking">
      <div className="tracking-main">
        <div className="tracking-left">
          <span>Shipment Tracking</span>

          <h2>Track your shipment instantly</h2>

          <p>
            Enter your shipment reference number to check the latest delivery
            status and location updates.
          </p>

          <div className="tracking-note">
            <strong>Need help?</strong>
            <p>
              If your tracking number is not working, please contact JMS
              customer support for assistance.
            </p>
          </div>
        </div>

        <div className="tracking-panel">
          <div className="tracking-box">
            <input
              type="text"
              placeholder="Enter Shipment Reference Number"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleTracking()}
            />

            <button onClick={handleTracking}>
              {loading ? "CHECKING..." : "TRACK"}
            </button>
          </div>

          {shipment && (
            <div
              className={`tracking-result ${
                shipment.status === "Delivered"
                  ? "delivered"
                  : shipment.status === "In Transit"
                  ? "transit"
                  : "not-found"
              }`}
            >
              <h3>Shipment Status</h3>

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
        </div>
      </div>
    </section>
  );
}

export default Tracking;