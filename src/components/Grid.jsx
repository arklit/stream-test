import GridItem from "./Grid-item";

export default function Grid(props) {
  const {data, removeData, uploadData, editData} = props;

  function reverseColumns() {
    document.querySelector('.grid-items').classList.toggle("grid_reverse");
  }

  function handleSort(e) {
    const element = e.target;
    element.classList.toggle('grid-item_sort_active');
    reverseColumns()
  }

  return (
    <div className="grid">
      <div className="grid__head">
        <div className="grid-item">
          <p className="grid-item__title grid-item_sort" 
          onClick={handleSort}>name</p>
          <p className="grid-item__value">value</p>
        </div>
      </div>
      <div className="grid-items">
      {data.map((item) => (
          <GridItem
            element={item}
            key={item.id}
            removeData={removeData}
            uploadData={uploadData}
            editData={editData}
          />
        ))}
      </div>
    </div>
  );
}
