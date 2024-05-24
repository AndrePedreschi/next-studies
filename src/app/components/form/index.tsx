"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import { Forms, ErrorContainer, InputContainer } from "./style"
import { useRouter } from "next/navigation"


enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  firstName: string
  lastName: string
  age: number
  gender: GenderEnum
  candy: string[]
  developer: boolean
}

export default function Form() {
  const router = useRouter()
  
  const {
    register,
    formState: { errors, isValid, touchedFields },
    handleSubmit,
  } = useForm<IFormInput>()
  
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    let dados = { ...data, auth: false }
    if (dados.developer == true) dados.auth = true
    
    localStorage.setItem('user', JSON.stringify(dados))
    router.push("/login")
  }

  function isFildValid(fild: string): boolean {
    console.log(errors, fild);
    
    if (errors.hasOwnProperty(`${fild}`)) {
      return true
    }
    return false
  }
  
  return (
    <Forms onSubmit={handleSubmit(onSubmit)}>
      <label>
        First Name
        <input
          {...register("firstName", {
            pattern: {
              value: /^[A-Za-z]/,
              message: "Insira um nome válido",
            },
            required: { value: true, message: "Insira o seu nome" },
            maxLength: {
              value: 20,
              message: "Insire um nome menor que 20 caracteres",
            },
          })}
          onBlur={() => { errors.firstName ? "true" : "false" }}
          aria-invalid={errors.firstName ? "true" : "false"}
        />
        {/* {errors.firstName?.type === "required" && (
          <p role="alert">First name is required</p>
        )} */}
        <ErrorContainer>
          {/* {isFildValid("firstName") && (
            <p role="alert">{errors.firstName.message}</p>
          )} */}
          {errors.firstName && <p role="alert">{errors.firstName.message}</p>}
          {/* {!errors.firstName && touchedFields.firstName && (
            <p role="alert">Responda!</p>
          )} */}
        </ErrorContainer>
      </label>

      <label>
        Last Name
        {/* <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /> */}
        <input
          {...register("lastName", {
            pattern: {
              value: /^[A-Za-z]/,
              message: "Insira um sobrenome válido",
            },
            required: { value: true, message: "Insira um sobrenome" },
            maxLength: { value: 20, message: "Insire um sobrenome abreviado" },
          })}
          aria-invalid={errors.lastName ? "true" : "false"}
        />
        <ErrorContainer>
          {errors.lastName && <p role="alert">{errors.lastName.message}</p>}
        </ErrorContainer>
      </label>

      <label>
        Age
        <input
          type="number"
          {...register("age", {
            required: { value: true, message: "Insira a sua idade" },
            min: { value: 18, message: "Você tem de ser maior de idade" },
            max: { value: 99, message: "Ultrapassou 99 anos" },
          })}
          aria-invalid={errors.firstName ? "true" : "false"}
        />
        <ErrorContainer>
          {errors.age && <p role="alert">{errors.age.message}</p>}
        </ErrorContainer>
      </label>

      <label>
        Gender Selection
        <select
          defaultValue=""
          {...register("gender", {
            required: { value: true, message: "Selecione uma opção" },
          })}
          aria-invalid={errors.gender ? "true" : "false"}
        >
          <option disabled value="">
            Selecione uma opção
          </option>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <ErrorContainer>
          {errors.gender && <p role="alert">{errors.gender.message}</p>}
        </ErrorContainer>
      </label>

      <div>
        <p>Doce que gosta?</p>

        <label>
          <InputContainer>
            <input
              type="checkbox"
              id="1"
              value="Rapadura"
              {...register("candy", {
                required: { value: true, message: "Doce requerido" },
              })}
            />
            <p>Rapadura</p>
          </InputContainer>
        </label>

        <label>
          <InputContainer>
            <input
              type="checkbox"
              id="2"
              value="Bombom"
              {...register("candy", {
                required: { value: true, message: "Doce requerido" },
              })}
            />
            <p>Bombom</p>
          </InputContainer>
        </label>

        <label>
          <InputContainer>
            <input
              type="checkbox"
              id="3"
              value="Brigadeiro"
              {...register("candy", {
                required: { value: true, message: "Doce requerido" },
              })}
            />
            <p>Brigadeiro</p>
          </InputContainer>
        </label>

        <label>
          <InputContainer>
            <input
              type="checkbox"
              id="4"
              value="Olho-de-sogra"
              {...register("candy", {
                required: { value: true, message: "Doce requerido" },
              })}
            />
            <p>Olho de sogra</p>
          </InputContainer>
        </label>

        <ErrorContainer>
          {errors.candy && <p role="alert">{errors.candy.message}</p>}
        </ErrorContainer>
      </div>

      <div>
        <p>É desenvolvedor?</p>

        <label>
          <InputContainer>
            <input
              {...register("developer", {
                required: { value: true, message: "Se decide aí pô" },
              })}
              type="radio"
              value={1}
            />
            <p>Sim</p>
          </InputContainer>
        </label>
        <label>
          <InputContainer>
            <input
              {...register("developer", {
                required: { value: true, message: "Se decide aí pô" },
              })}
              type="radio"
              value={0}
            />
            <p>Não</p>
          </InputContainer>
        </label>
        <ErrorContainer>
          {errors.developer && <p role="alert">{errors.developer.message}</p>}
        </ErrorContainer>
      </div>

      <input type="submit" />
    </Forms>
  )
}
