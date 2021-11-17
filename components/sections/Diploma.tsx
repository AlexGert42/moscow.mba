import stls from '@/styles/components/sections/Diploma.module.sass'
import classNames from 'classnames'
import { useState } from 'react'
import { useAt } from '@/helpers/index'
import Pagination from '@/components/general/Pagination'
import Image from 'next/image'
import { base64pixel } from '@/config/index'

const Diploma = ({ darkBackground = false }) => {
  const at = useAt()
  const typeOfPage = at.mbl ? 'mba' : at.onWhichPage
  const atPrograms = at.mini || at.mba || at.mbl

  const diplomaPaginationImages = at.course
    ? [
        {
          title: 'Сертификат академии',
          image: (
            <Image
              key={`diplomaImage-${1}`}
              src={'/assets/diplomas/courses/certificate-courses.jpg'}
              alt='Ваш сертификат'
              width={532}
              height={376}
              layout={'responsive'}
              placeholder='blur'
              blurDataURL={base64pixel}
            />
          )
        },
        {
          title: 'Удостоверение установленного образца',
          image: (
            <Image
              key={`diplomaImage-${2}`}
              src={
                '/assets/diplomas/courses/qualification-certificate-courses.jpg'
              }
              alt='Ваше удостоверение'
              width={532}
              height={376}
              layout={'responsive'}
              placeholder='blur'
              blurDataURL={base64pixel}
            />
          )
        }
      ]
    : [
        {
          title: 'Сертификат академии',
          image: (
            <Image
              key={`diplomaImage-${1}`}
              src={'/assets/diplomas/profession/certificate-profession.jpg'}
              alt='Сертификат академии'
              width={532}
              height={376}
              layout={'responsive'}
              placeholder='blur'
              blurDataURL={base64pixel}
            />
          )
        },
        {
          title: 'Диплом установленного образца',
          image: (
            <Image
              key={`diplomaImage-${2}`}
              src={
                '/assets/diplomas/profession/qualification-diploma-profession.jpg'
              }
              alt='Диплом установленного образца'
              width={532}
              height={376}
              layout={'responsive'}
              placeholder='blur'
              blurDataURL={base64pixel}
            />
          )
        }
      ]

  const [currentDiploma, setCurrentDiploma] = useState(0)

  const diplomasPerPage = 1
  const numberOfPages = diplomaPaginationImages.length / diplomasPerPage

  const showNextDiplomaImage = newPage => {
    setCurrentDiploma(newPage)
  }

  const renderPaginationAndTitle = () => {
    return !atPrograms && !at.promo ? (
      <>
        <div className={stls.paginationContainer}>
          <Pagination
            numberOfPages={numberOfPages}
            itemsPerPage={diplomasPerPage}
            totalItems={diplomaPaginationImages.length}
            showNextPage={showNextDiplomaImage}
            onlyPagination
            semiTransparentBg
          />
        </div>
        <h3 className={stls.imageTitle}>
          {diplomaPaginationImages[currentDiploma].title}
        </h3>
      </>
    ) : null
  }

  const renderDiplomaImage = () =>
    atPrograms || at.promo ? (
      <Image
        src={`/assets/images/diplomas/mba-${typeOfPage}-diploma.jpg`}
        alt='Ваш будущий диплом'
        width={532}
        height={376}
        layout={'responsive'}
        placeholder='blur'
        blurDataURL={base64pixel}
      />
    ) : (
      diplomaPaginationImages[currentDiploma].image
    )

  return (
    <section
      className={classNames(stls.container, {
        [stls.noMobileMb]: at.profession || at.course,
        [stls.darkBg]: darkBackground
      })}>
      <div className={stls.imageContainer}>
        {renderPaginationAndTitle()}
        <div className={stls.image}>{renderDiplomaImage()}</div>
      </div>
      <div className={stls.content}>
        <h2>
          {at.profession || at.course
            ? 'Ваши будущие дипломы'
            : 'Ваш будущий диплом'}
        </h2>
        <div className={stls.desc}>
          {at.mini || at.mba || at.promo || at.mbl ? (
            'Международный диплом установленного образца с присвоением степени «Мастер делового администрирования» с европейским приложением'
          ) : (
            <>
              Мы производим обучение на основании государственной лицензии
              №041221. Вы получите{' '}
              {at.course
                ? 'удостоверение установленного образца'
                : 'диплом о профессиональной переподготовке'}{' '}
              и сертификат академии, которые можно добавить в портфолио и
              показать работодателю
            </>
          )}
        </div>
        {(at.online || at.promo || at.mbl) && (
          <div className={stls.note}>
            Диплом {atPrograms ? 'MBA Online' : 'дистанционных'}{' '}
            {!atPrograms && 'программ'} не отличается от дипломов очных программ
            за счет того, что преподают те же спикеры по тем же учебным планам
          </div>
        )}
      </div>
    </section>
  )
}

export default Diploma
