import { useDispatch, useSelector } from "react-redux";
import { fetchMe } from "../redux/authThunks";
import { selectAuth } from "../redux/auth.selector";
import EditUser from "../components/EditUser";
import { useState } from "react";

function User() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const { me } = useSelector(selectAuth);
  const [isEditingMode, setIsEditingMode] = useState(false);

  if (!token) {
    window.location = "/";
    return;
  } else if (!me.userName) {
    dispatch(fetchMe(token));
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        {isEditingMode && <h1>Edit user info</h1>}
        {!isEditingMode && (
          <>
            <h1>
              Welcome back
              <br />
              {me?.firstName} {me?.lastName}
            </h1>
            <button
              onClick={() => setIsEditingMode(true)}
              className="edit-button"
            >
              Edit Name
            </button>
          </>
        )}
      </div>
      {isEditingMode && (
        <div>
          <EditUser
            userName={me?.userName}
            firstName={me?.firstName}
            lastName={me?.lastName}
            onCancel={() => setIsEditingMode(false)}
          />
        </div>
      )}
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default User;
