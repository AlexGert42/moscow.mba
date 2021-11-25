import stls from '@/styles/components/sections/ProgramsModules.module.sass'
import classNames from 'classnames'
import {
  useAt,
  createProgramModulesBase,
  createProgramModulesSpecialized
} from '@/helpers/index'
import ProgramsModule from '@/components/general/ProgramsModule'
import Stickers from '@/components/general/Stickers'
import Sticker from '@/components/general/Sticker'
import { IconCheckCircleAltDim } from '@/components/icons'
import ProgramSubjects from '@/components/general/ProgramSubjects'

const ProgramsModules = ({ program, smallerMb = false }) => {
  const at = useAt()

  const programModulesBase = createProgramModulesBase(program)
  const programModulesSpecialty = createProgramModulesSpecialized(program)


  // console.log(program.specializedSubjects)
  // console.log(programbaseSubjects)

  return (
    <section
      className={classNames(stls.container, { [stls.smallMb]: smallerMb })}>
      <div className={stls.pl}>
        <h2>Программа обучения</h2>
        <ul className={stls.redRectangle}>
          <li className={stls.redItem}>
            <div className={stls.number}>
              {at.executive ? (
                <ProgramSubjects subjects='base' />
              ) : (
                program && program.baseSubjects?.length
              )}
            </div>
            <p className={stls.p}>
              {program.programModulesCounters?.leftCounter ===
              'specializedlAcademicDisciplines'
                ? 'профильных дисциплин'
                : program.programModulesCounters?.leftCounter ===
                'academicDisciplines'
                  ? 'дисциплин'
                  : program.programModulesCounters?.leftCounter ===
                  'generalAcademicDisciplines'
                    ? 'дисциплин базовой части'
                    : 'дисциплин'}
            </p>
          </li>
          <li className={stls.redItem}>
            {program.programModulesCounters?.rightCounter === 'icon' ? (
              <>
                <div className={stls.number}>
                  <IconCheckCircleAltDim />
                </div>
                <p className={stls.p}>Практика и защита дипломной работы</p>
              </>
            ) : program.programModulesCounters?.rightCounter ===
            'specializedlAcademicDisciplines' ? (
              <>
                <div className={stls.number}>
                  {program.specializedSubjects.length}
                </div>
                <p className={stls.p}>дисциплин специализации</p>
              </>
            ) : program.programModulesCounters?.rightCounter ===
            'practiceAndExam' ? (
              <>
                <div className={stls.number}>
                  <IconCheckCircleAltDim />
                </div>
                <p className={stls.p}>Практика и защита дипломной работы</p>{' '}
              </>
            ) : (
              ''
            )}
          </li>
        </ul>
      </div>
      {
        program && program.baseSubjects?.length > 0 && !at.executive && !at.profession && !at.course &&
        <div className={stls.pl}>
          <h3 className={stls.h3}>Базовые дисциплины</h3>
        </div>
      }
      {program && program.baseSubjects?.length > 0 && !at.executive && (
        <div className={stls.list}>
          {programModulesBase.map((module, idx) => (
            <ProgramsModule
              key={module.id}
              title={`${idx + 1} модуль`}
              subTitle={module.title && module.title}
              items={module.subjects}
              fadeOutEffect={
                at.profession ||
                (at.course &&
                  (idx === programModulesBase.length - 1 ||
                    (idx === programModulesBase.length - 2 &&
                      programModulesBase.length % 2 === 0)))
              }
            />
          ))}
        </div>
      )}
      {program && program.specializedSubjects?.length > 0 && !at.profession && !at.course && (
        <div className={stls.pl}>
          <h3 className={stls.h3}>Специализированные дисциплины</h3>
        </div>
      )}
      <div className={stls.list}>
        {program.specializedSubjects?.length > 0 && (
          <>
            {programModulesSpecialty.map((module, idx) => (
              <ProgramsModule
                key={module.id}
                title={`${idx + 1} модуль`}
                subTitle={module.title && module.title}
                items={module.subjects}
              />
            ))}
          </>
        )}
        {program.specializedSubjectsAddons?.Practice ? (
          <ProgramsModule
            title='Практика'
            subTitle=''
            items={[
              'Работа над собственным проектом',
              'Групповые задания и нетворкинг',
              'Кейс-методы',
              'Эссе'
            ]}
          />
        ) : program.specializedSubjectsAddons?.OfflineModule ? (
          <ProgramsModule
            title='Очный модуль'
            subTitle=''
            items={[
              'Живое общение со спикерами',
              'Групповые проекты и разбор кейсов',
              'Домашние задания и курсовая работа',
              'Защита проектов и выпускной вечер'
            ]}
          />
        ) : program.specializedSubjectsAddons?.diplomaProtection ? (
          <ProgramsModule
            title='Защита диплома'
            items={[
              'Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)',
              'Защита итоговой дипломной работы'
            ]}
          />
        ) : (
          <></>
        )}
      </div>

      {program.subjectsStickerType && (
        <div className={stls.list}>
          {program.subjectsStickerType === 'finalAttestation' ? (
            <Sticker
              type={'long'}
              clr={'light'}
              title={'Итоговая аттестация'}
              listItems={[
                'Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)',
                'Защита итоговой аттестационной работы'
              ]}
            />
          ) : program.subjectsStickerType === 'fullTimeModuleInMoscow' ? (
            <Sticker
              type={'long'}
              clr={'light'}
              title={'Очный модуль в Москве'}
              listItems={[
                'Живое общение со спикерами',
                'Групповые проекты и разбор кейсов',
                'Домашние задания и курсовая работа',
                'Защита проектов и выпускной вечер'
              ]}
            />
          ) : program.subjectsStickerType ===
          'practiceModulesAndFinalAttestation' ? (
            <Stickers>
              <Sticker
                type={'short'}
                clr={'light'}
                title={'Практические модули'}
                listItems={[
                  'Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе'
                ]}
              />
              <Sticker
                type={'short'}
                clr={'light'}
                title={'Итоговая аттестация'}
                listItems={[
                  'Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)',
                  'Защита итоговой аттестационной работы'
                ]}
              />
            </Stickers>
          ) : (
            <></>
          )}
        </div>
      )}
    </section>
  )
}

export default ProgramsModules
