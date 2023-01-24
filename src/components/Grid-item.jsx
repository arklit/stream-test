export default function GridItem(props) {
  
  const {element, removeData, uploadData, editData} = props;
  return(
    <div className="grid-item">
      <div className="grid-item__title">
        <p>{element.name}</p>
        <button className="grid-item__btn grid-item__btn_trash" 
        onClick={() =>removeData(element)}>
        </button>
        <button className="grid-item__btn grid-item__btn_edit" 
        onClick={() =>editData(element)}>
        </button>
        <button className="grid-item__btn grid-item__btn_upload"
        onClick={() =>uploadData(element)}>
        </button>
      </div>
      <p className="grid-item__text">{element.value}</p>
    </div>
  ) 
}