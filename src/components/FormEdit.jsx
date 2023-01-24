import Input from "./Input"
export default function FormEdit(props) {
  const {editSubmit, value, id, name, changeName, changeValue, valuePlaceholder, namePlaceholder} = props;
  return(
    <form className="form form_edit" >
      <Input type="text" 
      minLength={4} 
      placeholder={namePlaceholder} 
      value={name} 
      onChange={changeName}
      />
      <Input type="text" 
      minLength={4} 
      placeholder={valuePlaceholder} 
      value={value} 
      onChange={changeValue}
      />
      <Input type="hidden" value={id}/>
      <button className="form__btn" type="submit" onClick={editSubmit}>Изменить данные</button>
    </form>
  )
}