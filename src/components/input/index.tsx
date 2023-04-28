interface InputProps {
  placeholder: string
  onChange?: any
  onKeyUp?: any
}

export const Input = ({ placeholder, onChange, onKeyUp }: InputProps) => {
  return (<>
    <input placeholder={placeholder} onChange={onChange} onKeyUp={onKeyUp} />
  </>)
}