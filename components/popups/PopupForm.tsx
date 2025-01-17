import stls from '@/styles/components/popups/PopupForm.module.sass'
import { SetString } from '@/helpers/index'
import lang from '@/data/translation/index'
import { onSubmitForm } from '@/helpers/index'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { handlePlaceholder } from '@/helpers/index'
import Popup from 'reactjs-popup'
import PopupThankyou from '@/components/popups/PopupThankyou'
import PopupLoader from '@/components/popups/PopupLoader'
import { IconClose } from '@/components/icons'
import { useRouter } from 'next/router'

type FormValues = {
  name: string
  phone: string
  email: string
}

const Form = ({
  closePopUpForm,
  programTitle = null,
  programId = null,
  title = SetString(lang.helpToChooseTitle),
  disc = SetString(lang.helpToChooseDics),
  promoCourseLink = null
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>()

  const [open, setOpen] = useState(false)
  const [openLoader, setOpenLoader] = useState(false)
  const closeModal = () => setOpen(false)
  const closeLoadingModal = () => setOpenLoader(false)
  const { asPath } = useRouter()

  // useEffect(() => {
  //   const utms = sessionStorage.getItem('utms')
  //   console.log(JSON.parse(utms))
  // }, [])

  const onSubmitFormThis = async values => {
    setOpenLoader(o => !o)
    values.programTitle = programTitle
    values.leadPage = promoCourseLink ? promoCourseLink : asPath
    const utms = JSON.parse(sessionStorage.getItem('utms'))
    values.utms = utms
    sessionStorage.removeItem('utms')
    const referer = JSON.parse(sessionStorage.getItem('referer'))
    values.referer = referer
    sessionStorage.removeItem('referer')
    const req = await onSubmitForm(values)
    if (req === 200) {
      closeLoadingModal()
      setOpen(o => !o)
      reset()
    } else {
      console.log('err')
    }
  }

  const handleKeyUp = e => {
    handlePlaceholder(e)
  }

  return (
    <div id='teachersModal' className='popup-modal'>
      <Popup open={openLoader} onClose={closeLoadingModal}>
        <PopupLoader closePopUp={closeLoadingModal} />
      </Popup>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <PopupThankyou
          closePopUp={closeModal}
          programId={programId}
          programTitle={programTitle}
        />
      </Popup>
      <div className='popup-content-origin red-bg'>
        <h2>{title}</h2>
        <div className='desc'>
          {!programTitle && disc}{' '}
          {programTitle &&
            !promoCourseLink &&
            `Оставьте заявку и получите консультацию по программе ${programTitle}, узнайте возможные варианты скидок и требования к поступлению`}
          {promoCourseLink &&
            'Оставьте заявку и получите консультацию по программе MBA, узнайте точную стоимость, возможные варианты скидок и требования к поступлению'}
        </div>
        <form
          method='post'
          className='simple-form support-form'
          onSubmit={handleSubmit(onSubmitFormThis)}>
          <div className='inputs-flex'>
            <div className='input-block width-33'>
              <input
                type='text'
                aria-label={SetString(lang.inputName)}
                {...register('name', {
                  maxLength: {
                    value: 32,
                    message: `*${SetString(lang.formErrLongName)}`
                  }
                })}
                onKeyUp={handleKeyUp}
              />
              <div className='input-placeholder'>
                {SetString(lang.inputName)}
              </div>
              <p className='inpt-err-msg'>
                {errors.name && errors.name.message}
              </p>
            </div>
            <div className='input-block width-33'>
              <input
                type='tel'
                aria-label={SetString(lang.inputPhone)}
                {...register('phone', {
                  required: `*${SetString(lang.formErrEmptyPhone)}`,
                  minLength: {
                    value: 5,
                    message: `*${SetString(lang.formErrShortPhone)}`
                  }
                })}
                onKeyUp={handleKeyUp}
              />
              <div className='input-placeholder'>
                {SetString(lang.inputPhone)}
              </div>
              <p className='inpt-err-msg'>
                {errors.phone && errors.phone.message}
              </p>
            </div>
            <div className='input-block width-33'>
              <input
                type='text'
                aria-label={SetString(lang.inputEmail)}
                {...register('email', {
                  pattern: {
                    value:
                      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                    message: `*${SetString(lang.formErrInvalidEmail)}`
                  }
                })}
                onKeyUp={handleKeyUp}
              />
              <div className='input-placeholder'>
                {SetString(lang.inputEmail)}
              </div>
              <p className='inpt-err-msg'>
                {errors.email && errors.email.message}
              </p>
            </div>
            <div className='input-block width-33'>
              <button
                type='submit'
                className={`button white-button ${
                  errors.name || errors.phone ? 'btn-disabled' : ''
                }`}
                disabled={errors.name || errors.phone ? true : false}>
                {SetString(lang.inputSubmit)}
              </button>
            </div>
          </div>
          <div className='personal-datas'>
            {SetString(lang.privacyPolicyFirst)}{' '}
            {/* <a href=''>{SetString(lang.privacyPolicySecond)}</a> */}
            {SetString(lang.privacyPolicySecond)}
          </div>
        </form>
        <button className='mfp-close' type='button' onClick={closePopUpForm}>
          <IconClose />
        </button>
      </div>
    </div>
  )
}

export default Form
