import stls from '@/styles/components/icons/IconClock.module.sass'

const IconClock = ({ fill = '#FF3535' }) => {
  return (
    <div className={stls.container}>
      <svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Время</title>
        <path
          d='M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM11 10H15V12H9V5H11V10Z'
          fill={fill}
        />
      </svg>
    </div>
  )
}

export default IconClock
