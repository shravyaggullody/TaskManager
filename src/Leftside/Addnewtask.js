import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
function Addnewtask(){
    return(
    <div className="nav-item">
        <button className="btn btn1 mt-2" style={{ backgroundColor: 'rgb(170, 5, 247)', color: 'white', width: '150px' }}>
          Add New Task
        </button>
      </div>
    );
}
export default Addnewtask;