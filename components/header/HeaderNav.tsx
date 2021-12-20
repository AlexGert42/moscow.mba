import stls from "@/styles/components/header/HeaderNav.module.sass"
import SetString from "@/helpers/SetString"
import lang from '@/data/translation/header'
import classnames from "classnames"
import Link from "next/link"
import WrapperComponent from "@/components/layout/WrapperComponent"
import getClassNames from "@/helpers/getClassNames"
import useWindowWidth from "@/helpers/useWindowWidth"
import contactData from "@/config/contactData"



const HeaderNav = ({ links, handleMenu, openMenu, classNames = [] }) => {
    const container = getClassNames({ classNames })
    const contactInfo = contactData()
    const widthWindowMobile = useWindowWidth() < 1020

    return (
        <div className={classnames([stls.container], container)}>
            <WrapperComponent classNames={widthWindowMobile ? [stls.wrapper] : []} row={!widthWindowMobile}>
                <div className={stls.menu}>
                    <div
                        className={classnames(stls.toggle, {
                            [stls.opened]: openMenu
                        })}
                        onClick={() => handleMenu(!openMenu)}
                    >
                        <div className={stls.icon}>
                            <i className={stls.line} />
                            <i className={stls.line} />
                        </div>
                        <span>{SetString(lang.programsBtn)}</span>
                    </div>
                </div>
                <ul className={stls.list}>
                        {links.map((item, idx) => (
                            <li key={item.val + idx} className={stls.item}>
                                <Link href={item.href} locale={item.locale}>
                                    <a
                                        onClick={() => handleMenu(false)}
                                        className={classnames(stls.link, {
                                            [stls.last]: idx + 1 === links.length,
                                            [stls.active]: item.red
                                        })}>
                                        {item.val}
                                    </a>
                                </Link>
                            </li>
                        ))}
                </ul>
                    {/* <>
                        <div className={stls.logos}>
                            <span className={stls.rabo}>
                                <ImgLogoRabo />
                            </span>
                            <span className={stls.mde}>
                                <ImgLogoMde />
                            </span>
                        </div>
                        <div className={stls.address}>
                            <IconLocation />
                            {SetString(contactInfo.ru.address.city)},{' '}
                            {SetString(contactInfo.ru.address.street)}
                        </div>
                    </> */}
            </WrapperComponent>
        </div>
    )
}

export default HeaderNav


