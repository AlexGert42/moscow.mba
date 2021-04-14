import Head from 'next/head'
import Link from 'next/link'
import setString from '../components/hooks/setString'
import lang from '../translation/data/index'
import langMenu from '../translation/data/menu'
import langHeader from '../translation/data/header'
import langMonths from '../translation/data/months'
// import Lang from '../components/hooks/Lang'

// import { useEffect } from 'react'
// import loadJs from 'loadjs'

export default function Home({ programs }) {
  const { data } = programs
  // useEffect(() => {
  //   loadJs(
  //     [
  //       '/assets/js/slick.min.js',
  //       '/assets/js/lazysizes.min.js',
  //       '/assets/js/jquery.magnific-popup.min.js',
  //       '/assets/js/myjs.js',
  //     ],
  //     {
  //       async: false,
  //     }
  //   )
  // }, [])
  // Lang.init('ru')

  return (
    <>
      <Head>
        <title>Moscow Business Academy</title>
      </Head>
      {/* jumbotron-section */}
      <section className='jumbotron-section main-jumbotron'>
        <div className='image'>
          <img src='/assets/images/jumbotron_1.jpg' alt='' />
        </div>
        <div className='container'>
          <div className='jumbotron-content'>
            <div className='jumbotron-flex'>
              <div className='jumbotron-text'>
                <div className='image-text'>
                  <img src='/assets/images/mba_text.png' alt='' />
                </div>
                <h1>Moscow Business Academy</h1>
                <div className='desc main-desc'>
                  {setString(lang.headerSubtitle)}
                </div>
              </div>
            </div>
            <Link href='/programs' locale='ru'>
              <a className='jumbotron-squad'>
                <p>{setString(lang.redCubeLink)}</p>
                <div className='arrow'>
                  <img src='/assets/images/arrow_diagonal.svg' alt='' />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <div className='container'>
        {/* about-section */}
        <section className='about-section section-pl'>
          <div className='title-pl'>{setString(lang.aboutTitle)}</div>
          <div className='about-flex'>
            <div className='title-desc'>
              <p>{setString(lang.aboutTxtFirst)}</p>
              <p>{setString(lang.aboutTxtSecond)}</p>
            </div>
            <ul className='about-list'>
              <li>
                <div className='number'>
                  {setString(lang.aboutBenefitTitleFirst)}
                </div>
                <p>{setString(lang.aboutBenefitDicsFirst)}</p>
              </li>
              <li>
                <div className='number'>9000+</div>
                <p>{setString(lang.aboutBenefitDicsSecond)}</p>
              </li>
              <li>
                <div className='number'>25%</div>
                <p>{setString(lang.aboutBenefitDicsThird)}</p>
              </li>
              <li>
                <div className='number'>150+</div>
                <p>{setString(lang.aboutBenefitDicsFourth)}</p>
              </li>
            </ul>
          </div>
        </section>

        {/* organization-section */}
        <section className='organization-section section-pl'>
          <div className='circle'></div>
          <div className='organization-flex'>
            <div className='organization-text'>
              <h2>
                {setString(lang.orgTitleFirst)}{' '}
                <span className='red'>{setString(lang.orgTitleSecond)}</span>
              </h2>
              <p className='title-desc'>{setString(lang.orgDisc)}</p>
              <div className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/organization_1.jpg'
                  alt=''
                />
              </div>
            </div>
            <div className='organization-image'>
              <div className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/organization_2.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </section>

        {/* branches-section */}
        <section className='branches-section section-pl'>
          <h2>{setString(lang.foreignAffiliatesTitle)}</h2>
          <p className='title-desc'>{setString(lang.foreignAffiliatesDisc)}</p>
          <div className='branches-flex'>
            <ul className='branches-images'>
              <li>
                <div className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/campuses/campus-1.jpg'
                    alt=''
                  />
                </div>
              </li>
              <li>
                <div className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/campuses/campus-2.jpg'
                    alt=''
                  />
                </div>
              </li>
              <li>
                <div className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/campuses/campus-3.jpg'
                    alt=''
                  />
                </div>
              </li>
              <li>
                <div className='circle'>
                  <div className='number'>
                    5 000 м<sup>2</sup>
                  </div>
                  <div className='line'></div>
                  <p>{setString(lang.foreignAffiliatesSurfaceArea)}</p>
                </div>
              </li>
            </ul>
            <div className='branches-map'>
              <img
                className='lazyload'
                data-src='/assets/images/branches_map.png'
                alt=''
              />
            </div>
          </div>
        </section>

        {/* world-mba-section */}
        <section className='world-mba-section'>
          <div className='world-mba-flex'>
            <div className='world-mba-text'>
              <h2>{setString(lang.mbaWorldTitle)}</h2>
              <p className='title-desc'>{setString(lang.mbaWorldDics)}</p>
            </div>
            <div className='world-mba-image'>
              <div className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/world_mba_1.jpg'
                  alt=''
                />
              </div>
              <div className='info'>
                <span>{setString(lang.mbaWorldMoreThan)}</span>
                <strong>20</strong>
                <span>{setString(lang.mbaWorldCountries)}</span>
              </div>
            </div>
          </div>
        </section>

        {/* clients-section */}
        <section className='clients-section'>
          <div className='section-pl'>
            <div className='clients-text'>
              <h2>
                {setString(lang.corporateClientsTitleTop)} <br />
                {setString(lang.corporateClientsTitleBottom)}
              </h2>
              <p>{setString(lang.corporateClientsDics)}</p>
            </div>
          </div>
          <div className='clients-slider js-slick'>
            <ul className='clients-slider-block'>
              <li>
                <div className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/clients/client_1.jpg'
                    alt=''
                  />
                </div>
              </li>
              <li>
                <div className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/clients/client_2.jpg'
                    alt=''
                  />
                </div>
              </li>
              <li>
                <div className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/clients/client_3.jpg'
                    alt=''
                  />
                </div>
              </li>
              <li>
                <div className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/clients/client_4.jpg'
                    alt=''
                  />
                </div>
              </li>
            </ul>
            <ul className='clients-slider-block'>
              <li>
                <div className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/clients/client_5.jpg'
                    alt=''
                  />
                </div>
              </li>
              <li>
                <div className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/clients/client_6.jpg'
                    alt=''
                  />
                </div>
              </li>
              <li>
                <div className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/clients/client_7.jpg'
                    alt=''
                  />
                </div>
              </li>
              <li>
                <div className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/clients/client_8.jpg'
                    alt=''
                  />
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* program-options-section */}
        <section className='program-options-section'>
          <div className='program-options-flex'>
            <div className='program-options-left'>
              <h2>{setString(langHeader.programsBtn)}</h2>
              <ul className='program-options-tabs'>
                <li>
                  <a
                    href=''
                    data-tab='#program-options-1'
                    className='active-tab'
                  >
                    Mini MBA
                  </a>
                </li>
                <li>
                  <a href='' data-tab='#program-options-2'>
                    Professional MBA
                  </a>
                </li>
                <li>
                  <a href='' data-tab='#program-options-3'>
                    Industry MBA
                  </a>
                </li>
              </ul>
            </div>
            <div className='program-options-right'>
              <div
                id='program-options-1'
                className='program-tabs-content visible'
              >
                <div className='top-info'>
                  <div className='prog-time'>
                    <i>
                      1 {setString(langMenu.categoryYear)} 6{' '}
                      {setString(langMenu.categoryMonth)}{' '}
                    </i>
                    <span>27 {setString(langMenu.qtSubjects)} </span>
                  </div>
                  <div className='prog-status'>
                    {setString(langMenu.newestPrograms)} 2021{' '}
                    {setString(langMenu.newestProgramsYear)}
                  </div>
                </div>
                <div className='desc'>
                  {setString(langMenu.categoryDiscMini)}
                </div>
                <ul className='program-options-block-tabs'>
                  <li>
                    <a href='#program-options-1-1' className='active'>
                      ONLINE
                    </a>
                  </li>
                  <li>
                    <a href='#program-options-1-2'>BLENDED</a>
                  </li>
                </ul>
                <div className='program-options-detail'>
                  <div
                    id='program-options-1-1'
                    className='program-options-block'
                  >
                    <div className='name'>
                      {setString(langMenu.onlineTitle)}
                      <div className='discount'>
                        <div className='size'>-30%</div>
                        <span>
                          {setString(langMenu.discountUntil)} 20{' '}
                          {setString(langMonths.april)}
                        </span>
                      </div>
                    </div>
                    <div className='directions-count'>
                      18 {setString(langMenu.qtPrograms)}
                    </div>
                    <div className='price'>
                      {setString(langMenu.price)}:{' '}
                      <i className='new-price'> 490 000 Р.</i>
                      <i className='old-price'> 540 000 Р.</i>
                    </div>
                    <div className='info-list'>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img
                            src='/assets/images/icon_check_circle.svg'
                            alt=''
                          />
                        </div>
                        <span>{setString(langMenu.formatRemote)}</span>
                      </div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img src='/assets/images/icon_monitor.svg' alt='' />
                        </div>
                        <span>27 {setString(langMenu.qtSubjects)}</span>
                      </div>
                    </div>
                    <ul className='program-options-block-list'>
                      {data.map((item) => {
                        if (
                          item.mbaTypeOfProgram === 'mini' &&
                          item.mbaFormat === 'online'
                        ) {
                          return (
                            <li>
                              <Link
                                href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item._id}`}
                                locale='ru'
                              >
                                <a>{setString(item, true)}</a>
                              </Link>
                            </li>
                          )
                        }
                      })}
                    </ul>
                  </div>
                  <div
                    id='program-options-1-2'
                    className='program-options-block'
                  >
                    <div className='name'>
                      {setString(langMenu.blendedTitle)}
                    </div>
                    <div className='directions-count'>
                      18 {setString(langMenu.qtPrograms)}
                    </div>
                    <div className='price'>
                      {setString(langMenu.price)}:{' '}
                      <i className='simple-price'> 540 000 Р.</i>
                    </div>
                    <div className='info-list'>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img
                            src='/assets/images/icon_check_circle.svg'
                            alt=''
                          />
                        </div>
                        <span>{setString(langMenu.formatBlended)}</span>
                      </div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img src='/assets/images/icon_monitor.svg' alt='' />
                        </div>
                        <span>27 {setString(langMenu.qtSubjects)}</span>
                      </div>
                    </div>
                    <ul className='program-options-block-list'>
                      {data.map((item) => {
                        if (
                          item.mbaTypeOfProgram === 'mini' &&
                          item.mbaFormat === 'blended'
                        ) {
                          return (
                            <li>
                              <Link
                                href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item._id}`}
                                locale='ru'
                              >
                                <a>{setString(item, true)}</a>
                              </Link>
                            </li>
                          )
                        }
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div id='program-options-2' className='program-tabs-content'>
                <div className='top-info'>
                  <div className='prog-time'>
                    <i>
                      2 {setString(langMenu.categoryYear)} 3{' '}
                      {setString(langMenu.categoryMonth)}{' '}
                    </i>
                    <span>20 {setString(langMenu.qtSubjects)} </span>
                  </div>
                  <div className='prog-status'>
                    {setString(langMenu.newestPrograms)} 2021{' '}
                    {setString(langMenu.newestProgramsYear)}
                  </div>
                </div>
                <div className='desc'>
                  {setString(langMenu.categoryDiscProfessional)}
                </div>
                <ul className='program-options-block-tabs'>
                  <li>
                    <a href='#program-options-2-1' className='active'>
                      ONLINE
                    </a>
                  </li>
                  <li>
                    <a href='#program-options-2-2'>BLENDED</a>
                  </li>
                </ul>
                <div className='program-options-detail'>
                  <div
                    id='program-options-2-1'
                    className='program-options-block'
                  >
                    <div className='name'>
                      {setString(langMenu.onlineTitle)}
                      <div className='discount'>
                        <div className='size'>-25%</div>
                        <span>
                          {setString(langMenu.discountUntil)} 20{' '}
                          {setString(langMonths.april)}
                        </span>
                      </div>
                    </div>
                    <div className='directions-count'>
                      18 {setString(langMenu.qtPrograms)}
                    </div>
                    <div className='price'>
                      {setString(langMenu.price)}:{' '}
                      <i className='new-price'> 490 000 Р.</i>
                      <i className='old-price'> 540 000 Р.</i>
                    </div>
                    <div className='info-list'>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img
                            src='/assets/images/icon_check_circle.svg'
                            alt=''
                          />
                        </div>
                        <span>{setString(langMenu.formatRemote)}</span>
                      </div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img src='/assets/images/icon_monitor.svg' alt='' />
                        </div>
                        <span>27 {setString(langMenu.qtSubjects)}</span>
                      </div>
                    </div>
                    <ul className='program-options-block-list'>
                      {data.map((item) => {
                        if (
                          item.mbaTypeOfProgram === 'professional' &&
                          item.mbaFormat === 'online'
                        ) {
                          return (
                            <li>
                              <Link
                                href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item._id}`}
                                locale='ru'
                              >
                                <a>{setString(item, true)}</a>
                              </Link>
                            </li>
                          )
                        }
                      })}
                    </ul>
                  </div>
                  <div
                    id='program-options-2-2'
                    className='program-options-block'
                  >
                    <div className='name'>
                      {setString(langMenu.blendedTitle)}
                    </div>
                    <div className='directions-count'>
                      18 {setString(langMenu.qtPrograms)}
                    </div>
                    <div className='price'>
                      {setString(langMenu.price)}:{' '}
                      <i className='simple-price'> 540 000 Р.</i>
                    </div>
                    <div className='info-list'>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img
                            src='/assets/images/icon_check_circle.svg'
                            alt=''
                          />
                        </div>
                        <span>{setString(langMenu.formatBlended)}</span>
                      </div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img src='/assets/images/icon_monitor.svg' alt='' />
                        </div>
                        <span>27 {setString(langMenu.qtSubjects)}</span>
                      </div>
                    </div>
                    <ul className='program-options-block-list'>
                      {data.map((item) => {
                        if (
                          item.mbaTypeOfProgram === 'professional' &&
                          item.mbaFormat === 'blended'
                        ) {
                          return (
                            <li>
                              <Link
                                href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item._id}`}
                                locale='ru'
                              >
                                <a>{setString(item, true)}</a>
                              </Link>
                            </li>
                          )
                        }
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div id='program-options-3' className='program-tabs-content'>
                <div className='top-info'>
                  <div className='prog-time'>
                    <i>
                      3 {setString(langMenu.categoryYear)} 4{' '}
                      {setString(langMenu.categoryMonth)}{' '}
                    </i>
                    <span>15 {setString(langMenu.qtSubjects)} </span>
                  </div>
                  <div className='prog-status'>
                    {setString(langMenu.newestPrograms)} 2021{' '}
                    {setString(langMenu.newestProgramsYear)}
                  </div>
                </div>
                <div className='desc'>
                  {setString(langMenu.categoryDiscIndustry)}
                </div>
                <ul className='program-options-block-tabs'>
                  <li>
                    <a href='#program-options-3-1' className='active'>
                      ONLINE
                    </a>
                  </li>
                  <li>
                    <a href='#program-options-3-2'>BLENDED</a>
                  </li>
                </ul>
                <div className='program-options-detail'>
                  <div
                    id='program-options-3-1'
                    className='program-options-block'
                  >
                    <div className='name'>
                      {setString(langMenu.onlineTitle)}
                      <div className='discount'>
                        <div className='size'>-15%</div>
                        <span>
                          {setString(langMenu.discountUntil)} 20{' '}
                          {setString(langMonths.april)}
                        </span>
                      </div>
                    </div>
                    <div className='directions-count'>
                      18 {setString(langMenu.qtPrograms)}
                    </div>
                    <div className='price'>
                      {setString(langMenu.price)}:{' '}
                      <i className='new-price'> 490 000 Р.</i>
                      <i className='old-price'> 540 000 Р.</i>
                    </div>
                    <div className='info-list'>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img
                            src='/assets/images/icon_check_circle.svg'
                            alt=''
                          />
                        </div>
                        <span>{setString(langMenu.formatRemote)}</span>
                      </div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img src='/assets/images/icon_monitor.svg' alt='' />
                        </div>
                        <span>27 {setString(langMenu.qtSubjects)}</span>
                      </div>
                    </div>
                    <ul className='program-options-block-list'>
                      {data.map((item) => {
                        if (
                          item.mbaTypeOfProgram === 'industry' &&
                          item.mbaFormat === 'online'
                        ) {
                          return (
                            <li>
                              <Link
                                href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item._id}`}
                                locale='ru'
                              >
                                <a>{setString(item, true)}</a>
                              </Link>
                            </li>
                          )
                        }
                      })}
                    </ul>
                  </div>
                  <div
                    id='program-options-3-2'
                    className='program-options-block'
                  >
                    <div className='name'>
                      {setString(langMenu.blendedTitle)}
                    </div>
                    <div className='directions-count'>
                      18 {setString(langMenu.qtPrograms)}
                    </div>
                    <div className='price'>
                      {setString(langMenu.price)}:{' '}
                      <i className='simple-price'> 540 000 Р.</i>
                    </div>
                    <div className='info-list'>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img
                            src='/assets/images/icon_check_circle.svg'
                            alt=''
                          />
                        </div>
                        <span>{setString(langMenu.formatBlended)}</span>
                      </div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <img src='/assets/images/icon_monitor.svg' alt='' />
                        </div>
                        <span>27 {setString(langMenu.qtSubjects)}</span>
                      </div>
                    </div>
                    <ul className='program-options-block-list'>
                      {data.map((item) => {
                        if (
                          item.mbaTypeOfProgram === 'industry' &&
                          item.mbaFormat === 'blended'
                        ) {
                          return (
                            <li>
                              <Link
                                href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item._id}`}
                                locale='ru'
                              >
                                <a>{setString(item, true)}</a>
                              </Link>
                            </li>
                          )
                        }
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* executive-section */}
        <section className='executive-section'>
          <div className='executive-flex'>
            <div className='executive-detail'>
              <div className='label'>
                <span>Premium</span>
              </div>
              <h2>Executive MBA</h2>
              <p className='title-desc'>
                {setString(lang.executiveMBADicsFirst)}
              </p>
              <p className='title-desc'>
                {setString(lang.executiveMBADicsSecond)}
              </p>
              <ul className='count-list'>
                <li>
                  1 {setString(lang.executiveMBAYear)} 6{' '}
                  {setString(lang.executiveMBAMonth)}
                </li>
                <li>2 {setString(lang.executiveOfflineModules)}</li>
                <li>27 {setString(langMenu.qtSubjects)}</li>
              </ul>
              <div className='price'>
                {setString(langMenu.price)}:{' '}
                <i className='new-price'> 1 900 000 Р.</i>
                <i className='old-price'> 2 500 000 Р.</i>
              </div>
              <a href='' className='button empty-button'>
                {setString(lang.learnMoreBtn)}
              </a>
            </div>
            <div className='dobble-images executive-images'>
              <div className='image pic-1'>
                <img
                  className='lazyload'
                  data-src='/assets/images/executive_pic_1.jpg'
                  alt=''
                />
              </div>
              <div className='image pic-2'>
                <img
                  className='lazyload'
                  data-src='/assets/images/executive_pic_2.jpg'
                  alt=''
                />
              </div>
              <div className='count'>
                <strong>200+</strong>
                <span>{setString(lang.graduates)}</span>
              </div>
            </div>
          </div>
        </section>

        {/* support-section */}
        <section className='support-section'>
          <h2>{setString(lang.helpToChooseTitle)}</h2>
          <div className='text'>{setString(lang.helpToChooseDics)}</div>
          <form action='#' method='post' className='simple-form support-form'>
            <div className='inputs-flex'>
              <div className='input-block width-33'>
                <input type='text' />
                <div className='input-placeholder'>
                  {setString(lang.inputName)}
                </div>
              </div>
              <div className='input-block width-33'>
                <input type='text' />
                <div className='input-placeholder'>
                  {setString(lang.inputPhone)}
                </div>
              </div>
              <div className='input-block width-33'>
                <button type='submit' className='button white-button'>
                  {setString(lang.inputSubmit)}
                </button>
              </div>
            </div>
            <div className='personal-datas'>
              {setString(lang.privacyPolicyFirst)}{' '}
              <a href=''>{setString(lang.privacyPolicySecond)}</a>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}
