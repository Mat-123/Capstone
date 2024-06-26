import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ExpiryModal from '../Components/ExpiryModal';



const Home = () => {

  const user = useSelector((state) => state.user);
    const [showModal, setShowModal] = useState(false);
    const [daysLeft, setDaysLeft] = useState(0);

    useEffect(() => {
      if (user && user.role === 'premium') {
          const today = new Date();
          const expiryDate = new Date(user.premium_expiry);
          const timeDiff = expiryDate - today;
          const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

          if (daysDiff <= 3) {
              setDaysLeft(daysDiff);
              setShowModal(true);
          }
      }
  }, [user]);


    return (
        <div className="card mt-5 card-bg-color text-white rounded-4">
          <div className="card-body">
            <h4 className="card-title">Cryptracker</h4>
            <p className="card-text">Cryptracker is a free tool designed to assist you in tracking your cryptocurrency investments. By registering, you can save all the coins you own, record your transactions, and generate reports on your overall portfolio value as well as individual coin performance. Our calculations are based on closing prices from the American market. We ensure the privacy of your data; we do not store any personal data or wallet information—simply sign up with your email address.

To enhance your experience, we’ve integrated data provided by CoinMarketCap, processed by our server to offer as many tools as possible at no cost. However, maintaining the site incurs expenses. Therefore, I’ve decided to offer basic tools completely free of charge, while other features, such as the historical value of your wallet, are available through our premium service. This service comes at a very low annual cost, which helps cover the operational costs.

If you appreciate the service you’re using and wish to support my work, you can make a donation in cryptocurrency. Your contributions help us continue to provide and improve this valuable service.

Thank you for choosing Cryptracker, and happy investing!

            </p>
          </div>
          {user && (
                <ExpiryModal 
                    show={showModal} 
                    daysLeft={daysLeft} 
                    onHide={() => setShowModal(false)} 
                />
            )}
        </div>
    )
}

export default Home;