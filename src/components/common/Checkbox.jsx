import { useState } from 'react';
import './Checkbox.module.scss';

export default function Checkbox({
  id,
  name,
  checked,
  value,
  children,
  caseImg,
  onChange,
  // checkedCaseHandler,
}) {
  // const [isChecked, setIsChecked] = useState(false);
  // const checkHandler = ({ target }) => {
  //   setIsChecked(!isChecked);
  //   checkedCaseHandler(id, target.checked);
  // };
  return (
    <label>
      <input
        id={id}
        name={name}
        checked={checked}
        type="checkbox"
        value={value}
        onChange={onChange}
        // checked={isChecked}
        // onChange={(e) => checkHandler(e)}
      />
      <img src={caseImg} alt={caseImg} />
      {children}
    </label>
  );
}
