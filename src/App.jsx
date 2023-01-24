import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { changeLocale } from "./services/language/actions";

function App() {
  const locale = useSelector((state) => state.language.locale, shallowEqual);
  const dispatch = useDispatch();

  return (
    <div>
      {locale}
      <button onClick={() => dispatch(changeLocale("vi"))}>Change</button>
    </div>
  );
}

export default App;
