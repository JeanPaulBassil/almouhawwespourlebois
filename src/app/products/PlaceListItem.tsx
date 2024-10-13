'use client'

import React from 'react'
import { Button, Chip, Image, Skeleton } from '@nextui-org/react'
import { cn } from '@/lib/utils'
import { Icon, Star } from 'lucide-react'

export type PlaceListItemColor = {
  name: string
  hex: string
}

export type PlaceItem = {
  id: string
  name: string
  href: string
  price: number
  isNew?: boolean
  rating?: number
  ratingCount?: number
  description?: string
  imageSrc: string
  tag?: string
  size?: string
}

export type PlaceListItemProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'id'> & {
  isPopular?: boolean
  isLoading?: boolean
  removeWrapper?: boolean
} & PlaceItem

const PlaceListItem = React.forwardRef<HTMLDivElement, PlaceListItemProps>(
  (
    { name, price, rating, isLoading, description, imageSrc, removeWrapper, tag, size, className, ...props },
    ref
  ) => {
    const [isLiked, setIsLiked] = React.useState(false)

    return (
      <div
        ref={ref}
        className={cn(
          'relative flex w-full flex-none flex-col gap-3',
          {
            'rounded-none bg-background shadow-none': removeWrapper,
          },
          className
        )}
        {...props}
      >
        <Image
          isBlurred
          isZoomed
          alt={name}
          className="aspect-square w-full hover:scale-110"
          isLoading={isLoading}
          src={imageSrc ? imageSrc : 'placeholder.webp'}
        />
        <div className="mt-1 flex flex-col gap-2 px-1">
          {isLoading ? (
            <div className="my-1 flex flex-col gap-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200" />
              </Skeleton>
              <Skeleton className="mt-3 w-4/5 rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200" />
              </Skeleton>
              <Skeleton className="mt-4 w-2/5 rounded-lg">
                <div className="h-3 w-2/5 rounded-lg bg-default-300" />
              </Skeleton>
            </div>
          ) : (
            <>
              <div className="flex items-start justify-between gap-1">
                <h3 className="text-small font-medium text-default-700">{name}</h3>
                {tag ? <Chip color="primary" size='sm'>{tag}</Chip> : null}
              </div>
              {description ? <p className="text-small text-default-500">{description}</p> : null}
              {size ? <p className="text-small text-default-500">{size}</p> : null}
            </>
          )}
        </div>
      </div>
    )
  }
)

PlaceListItem.displayName = 'PlaceListItem'

export default PlaceListItem
