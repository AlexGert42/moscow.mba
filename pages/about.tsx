import stls from '@/styles/pages/About.module.sass'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import JumbotronMain from '@/components/sections/JumbotronMain'
import About from '@/components/sections/About'
import ConferencesInEurope from '@/components/sections/ConferencesInEurope'
import ForeignAffiliates from '@/components/sections/ForeignAffiliates'
import StudentsInternational from '@/components/sections/StudentsInternational'
import CorporateClients from '@/components/sections/CorporateClients'
import Teachers from '@/components/sections/Teachers'
import UpToDateContent from '@/components/sections/UpToDateContent'
import Accreditation from '@/components/sections/Accreditation'
import { handleGetStaticProps, SetString } from '@/helpers/index'
import lang from '@/data/translation/about'
import langIndex from '@/data/translation/index'
import StandardECTS from '@/components/sections/StandardECTS'


const about = ({ programs }) => {
  return (
    <>
      <NextSeo
        title={`${SetString(lang.title)} MBA`}
        description={truncate(`${SetString(langIndex.headerSubtitle)}`, 120)}
        canonical={'https://moscow.mba/about'}
      />

      <JumbotronMain />

      <div className={stls.container}>
        <About />
        <ConferencesInEurope />
        <ForeignAffiliates />
        <StudentsInternational />
        <CorporateClients />
        <Teachers />
        <UpToDateContent />
        <Accreditation />
        {/*<ContactUs />*/}
        <StandardECTS/>
      </div>
    </>
  )
}

export const getStaticProps = async () => handleGetStaticProps()

export default about
