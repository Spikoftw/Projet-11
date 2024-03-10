import { useState } from "react";
import { useDispatch } from "react-redux";
import { putMe } from "../redux/authThunks";

function EditUser({ userName, firstName, lastName, onCancel }) {
  const [userNameInput, setUserName] = useState([userName]);
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  const onSave = () => {
    dispatch(putMe(token, userNameInput));
    onCancel();
  };

  return (
    <form className="edit_form" action="">
      <div className="input-wrapper">
        <label>
          User name :
          <input
            value={userNameInput}
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
      </div>
      <div className="input-wrapper">
        <label>
          First name :
          <input defaultValue={firstName} type="text" readOnly />
        </label>
      </div>
      <div className="input-wrapper">
        <label>
          Last name :
          <input defaultValue={lastName} type="text" readOnly />
        </label>
      </div>
      <div className="edit-btn_wrapper">
        <button type="button" className="edit-btn" onClick={() => onSave()}>
          Save
        </button>
        <button type="button" className="edit-btn" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default EditUser;
