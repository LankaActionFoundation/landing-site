import React, { useCallback, useEffect, useState } from "react";

const useStateWithValidation = (validationFunc, errors, initialValue) => {
  const [state, setState] = useState(initialValue);
  const [error, setError] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (isBlur) {
      setIsValid(validationFunc(state, errors, setError, isTouched));
    }
  }, [isBlur]);

  const onChange = useCallback(
    (nextState) => {
      setIsBlur(false);
      const value =
        typeof nextState === "function" ? nextState(state) : nextState;
      setState(value);
      setIsValid(validationFunc(value, errors, setError, isTouched));
    },
    [validationFunc]
  );

  return [state, onChange, isValid, error, setIsTouched, setIsBlur];
};

export default useStateWithValidation;
