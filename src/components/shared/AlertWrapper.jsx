import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { deleteAlert } from "../../redux/actions";

function AlertWrapper(props) {
  const alertState = useSelector((state) => state.alert);
  const dispatch = useDispatch()

  useEffect(()=>{
    setTimeout(()=>{
        dispatch(deleteAlert(alertState.id))
    },window.alertDuration);
  },[dispatch,alertState])

  if(!alertState.isVisible) return null
  return (
    <div className="container">
      <div className="row mb justify-content-end">
        <div className="col-6">
            <div className={`alert alert-${alertState.type} alert-dismissible fade show alert-custom`} role="alert">
                <h4 className="alert-heading">{alertState.title}</h4>
                <p>{alertState.message}</p>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={props.onClose}/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AlertWrapper;
