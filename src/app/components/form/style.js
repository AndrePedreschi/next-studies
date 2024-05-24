import styled from "styled-components"

export const Forms = styled.form`
  margin: 0 auto;
  width: 400px;
  padding: 24px;
  border: 1px solid #000000;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.75);

  label {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    color: #2f363d;
    font-weight: 500;
    font-size: 15px;
  }
  
  input[type="submit"]{
    width: 75px;
    margin: 16px auto 0px;
    
  }
`

export const InputContainer = styled.div`
display: flex;
align-items: center;
gap: 0.25rem;
`


export const ErrorContainer = styled.div`
  height: 14px;

  p {
    font-weight: 700;
    color: #ff786f;
    font-size: 12px;
    font-style: italic;
  }
`

