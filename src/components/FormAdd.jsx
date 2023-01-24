import Input from "./Input"
export default function Form(props) {
  const {addData, value, name, changeName, changeValue, errorElem} = props;
  return(
    <form className="form">
      <Input type="text" 
      minLength={4} 
      placeholder="name" 
      value={name} 
      onChange={changeName}
      />
      <Input 
      type="text" 
      minLength={4} 
      placeholder="value" 
      value={value} 
      onChange={changeValue}
      />
      <button className="form__btn" type="submit" onClick={addData}>Добавить данные</button>
      <p className="error" ref={errorElem}></p>
    </form>
  )
}