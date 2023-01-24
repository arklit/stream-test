import Header from "./Header";
import FormAdd from "./FormAdd";
import { useState, useRef} from "react";
import Grid from "./Grid";
import FormEdit from "./FormEdit";
function App() {

  const [data, setData] = useState([
    {
      name: "one",
      value: "any info",
      id: '1'
    },
    {
      name: "two",
      value: "any info",
      id: '2'
    },
    {
      name: "three",
      value: "any info",
      id: '3'
    },
  ])
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [json, setJson] = useState();
  const errorElem = useRef()
  const [namePlaceholder, setNamePlaceholder] = useState('');
  const [valuePlaceholder, setValuePlaceholder] = useState('')
  const [id, setId] = useState('')

const addData = (e) => {
  e.preventDefault()
  const newData = {
    id: Date.now(),
    name,
    value
  }
  if(name === '' || value === '') {
    errorElem.current.textContent = "Поля не должны быть пустыми"
  } else {
    setData([...data, newData])
    document.querySelector('.form').reset()
    errorElem.current.textContent = "";
    setName('')
    setValue('')
  }
}

function removeData(elem) {
  setData(data.filter(i => i.id !== elem.id))
}

 function changeValue(e) {
  setValue(e.target.value)
 }

 function changeName(e) {
  setName(e.target.value)
 }

 function uploadData(elem) {
  const toJson = JSON.stringify(elem);
  setJson(toJson)
 }

 function editData(elem) {
  const form = document.querySelector('.form_edit');
  form.reset()
  form.classList.add('form_edit_visible')
  setNamePlaceholder(elem.name);
  setValuePlaceholder(elem.value);
  setId(elem.id);
 }

 const editSubmit = (e) => {
  e.preventDefault()
  let items = data.filter(i => i.id === id);
  let item = items[0];
  item.name = name;
  item.value = value;
  setName('')
  setValue('')
 }

  return (
    <div className="app">
      <Header/>
      <Grid 
        data={data} 
        removeData={removeData} 
        uploadData={uploadData} 
        editData={editData}
      />
      <div class="forms">
        <FormAdd
          addData={addData} 
          changeName={changeName} 
          changeValue={changeValue}
          errorElem={errorElem}/>
        <textarea 
          class="textarea" 
          value={json} 
          type="text" 
          cols="30" 
          rows="10"
          placeholder="Здесь скоро появятся данные в формате JSON">
        </textarea>
        <FormEdit
          editSubmit={editSubmit} 
          changeName={changeName} 
          changeValue={changeValue}
          namePlaceholder={namePlaceholder}
          valuePlaceholder={valuePlaceholder}/>
      </div>
    </div>
  );
}

export default App;
