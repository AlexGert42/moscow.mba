import stls from '@/styles/components/icons/geometrics/IconGeometricTwoRotatedRectangles.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeIconGeometricTwoRotatedRectanglesProps = TypeClassNames

const IconGeometricTwoRotatedRectangles = ({
  classNames
}: TypeIconGeometricTwoRotatedRectanglesProps) => {
  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 190 190' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_1_1071)'>
          <rect width='190' height='190' fill={colors.epsilon} />
          <rect
            x='-28.5858'
            y='96'
            width='80'
            height='80'
            transform='rotate(-45 -28.5858 96)'
            stroke={colors.psi}
            strokeWidth='2'
          />
          <rect
            x='29.3966'
            y='94.9829'
            width='80'
            height='80'
            transform='rotate(-45 29.3966 94.9829)'
            stroke={colors.psi}
            strokeWidth='2'
          />
        </g>
        <defs>
          <clipPath id='clip0_1_1071'>
            <rect width='190' height='190' fill={colors.psi} />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default IconGeometricTwoRotatedRectangles
