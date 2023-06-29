
import React from 'react';
import { useState } from 'react';
import{useForm} from 'react-hook-form';


import PostService from '../../API/PostService';
import imageRegister from '../../assets/success-imageSuccessFullyRegistere.png';


import './form.scss';


export default function Form({setPage,setCartArr}) {
  const [imageName,setImageName] = useState('');
  const [serverError,setServerError] = useState(false);
  const [registerUser,setRegisterUser] = useState(false);

  const {register,formState:{errors},handleSubmit,reset} = useForm({
    mode:'onChange',
    reValidateMode: 'onChange'
  });

  function handleChange(e){
    setImageName(e.target.files[0].name);
  }  
  async function onSubmit(data){
    let formData = new FormData();
    formData.append('name',data.name);
    formData.append('email',data.email);
    formData.append('phone',data.phone);
    formData.append('position_id', data.position);
    formData.append('photo',data.img[0]);
    let token = await PostService.getToken();
    try{
      let res = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', { method: 'POST', body: formData, headers: { 'Token': token}})

      if(res.ok){
        reset();
        setImageName('');
        setPage(1);
        setCartArr([]);
        setRegisterUser(true);
      }
      else{
        setServerError(true);
      }
    }
    catch(err){
      setServerError(true);
    }

  }
   if(registerUser){
    return(
      <section className='form-page'> 
        <div className="form-page__container">
            <div className="form__register__true">
              <img src={imageRegister} alt="" />
            </div>
        </div>
      </section>
    )
   }
  
  return (
    <section className='form-page'>
        <div className="form-page__container">
            <div className="form-page__title">Working with POST request</div>
            <form className='form-submit' onSubmit={handleSubmit(onSubmit)}>
                <input className={`${errors?.name && "error"} form-submit__input ` } type="text" placeholder='Your name' {...register("name",
                { required: "Required field",minLength:{
                  value:2,
                  message:"Min number of characters 2"},
                  maxLength:{
                    value:60,
                    message:"Min number of characters 60"
                  } })}/>
                <label className='input__text error__text'>{errors?.name && errors?.name?.message}</label>
                <input className={`${errors?.email && "error"} form-submit__input ` } type="email" placeholder='Email'{...register("email",
                { required: "Required field",
                minLength:{
                  value:2,
                  message:"Min number of characters 2"},
                  maxLength:{
                    value:100,
                    message:"Min number of characters 100"
                  },
                  pattern:{
                    value:/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
                    message: 'User email, must be a valid email according to RFC2822'
                  }
                 })}/>
                <label className='input__text error__text'>{errors?.email && errors?.email?.message}</label>
                <input className={`${errors?.phone && "error"} form-submit__input ` } type="phone" placeholder='Phone number'{...register("phone",{ 
                  required: "Required field",
                  pattern:{
                    value:/^[\+]{0,1}380([0-9]{9})$/,
                    message:'User phone number. Number should start with code of Ukraine +380'
                  }
                  })}/>
                <label className='input__text'>{errors?.phone ? errors?.phone?.message :'+38 (XXX) XXX - XX - XX'}</label>
                <div className='form-submit__radio position-radio'>
                  <div className="position-radio__label">Select your position</div> 
                  <div className="position__item">
                    <input type="radio" value="1" name="position" className="position__item__input" id='input__security'{...register("position",{ required: "Required field" })}/>
                    <label htmlFor="input__security" className='form__label'>Security</label>
                  </div>
                  <div className="position__item">
                    <input type="radio" value="2" name="position" className="position__item__input" id='input__designer' {...register("position",{ required: "Required field" })} />
                    <label htmlFor="input__designer" className='form__label'>Designer</label>
                  </div>
                  <div className="position__item">
                    <input type="radio" value="3" name="position" className="position__item__input" id='input__content_manager' {...register("position",{ required: "Required field" })}/>
                    <label htmlFor="input__content_manager" className='form__label'>Content manager</label>
                  </div>
                  <div className="position__item">
                    <input type="radio" value="4" name="position" className="position__item__input" id='input__lawyer' {...register("position",{ required: "Required field" })}/>
                    <label htmlFor="input__lawyer" className='form__label'>Lawyer</label>
                  </div>
                </div>

                <div className="form-submit__file file">
                  <div className="file__item">
                    <input accept='.jpg, .png, .gif' type="file" name='img'  className='file__input' {...register("img",{
                       required: "Required field",
                       validate:{
                        lessThan5MB: (files) => files[0]?.size < 40000000 || "Max 5Mb",
                        acceptedFormats: (files) =>
                              /jpg|jpeg/.test(files[0]?.name) || "The photo format must be jpeg/jpg type"
                       }
                       })}  onChange={e=>handleChange(e)} />
                    <div className="file__button">Upload</div>
                    <input type="text" className={`file__label ${errors?.name ? "error" :''}`} placeholder={imageName ? imageName :'Upload your photo'} />
                    <label className={`input__text file__label__message ${errors?.img ? 'error__text':''}`}>{errors?.img && errors?.img?.message}</label>
                  </div>
                </div>

                <div className="form-submit__button-submit">
                {
                    serverError && <label className='input__server__error error__text'>Server Error</label>
                }
                  <input type="submit" className='button button-submit' value='Sign up' />

                </div>
            </form>
        </div>
    </section>
  )
}
