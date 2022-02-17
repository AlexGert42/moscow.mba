import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import { useAt } from '@/helpers/index'
import src from '@/public/assets/images/clients/executive_pic_2.jpg'

const ImgSmallerCircle = ({
    classNames,
    width,
    height
}: TypeClassNames & TypeImg) => {
    const at = useAt()
    return (
      <ImgTemplate
        src={src}
        width={width}
        height={height}
        alt={at.en ? 'Expert is giving talk during conference' : 'На конференции спикер со сцены даёт речь'}
        classNames={classNames}
      />
    )
}  

export default ImgSmallerCircle