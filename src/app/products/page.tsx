'use client'

import React from 'react'
import PlaceListItem, { PlaceItem } from './PlaceListItem'
import { cn } from '@/lib/utils'
import BlurFade from '../_components/magic-ui/BlurFade'

const places: PlaceItem[] = [
  {
    id: '1',
    name: 'Iroko',
    rating: 4.5,
    href: '#',
    price: 49.99,
    description:
      'Tropical African wood, initially yellow-brown, darkening with age. Durable and rot-resistant, ideal for outdoor applications, cabinetry, and furniture.',
    imageSrc: '/products/iroko.png',
  },
  {
    id: '2',
    name: 'American Black Walnut',
    rating: 4.84,
    href: '#',
    price: 29.99,
    description: 'Rich, dark wood known for its durability and warp resistance. Ideal for fine furniture and cabinetry.',
    imageSrc: '/products/American-Black-Walnut.png',
  },
  {
    id: '3',
    name: 'Beech Wood',
    rating: 3.94,
    href: '#',
    price: 39.99,
    description: 'Light beige wood with versatile properties, used globally in veneer, flooring, and musical instruments.',
    imageSrc: '/products/Beech-Wood.jpg',
  },
  {
    id: '4',
    name: 'White Wood',
    rating: 4.2,
    href: '#',
    price: 49.99,
    description: 'Pale yellow to white wood, excellent for home construction and paneling, easy to nail and paint.',
    imageSrc: '/products/White-Wood.png',
  },
  {
    id: '5',
    name: 'Swedish Wood',
    rating: 3.5,
    href: '#',
    price: 29.99,
    description: 'Soft or semi-hard, easy to work with for roofing and furniture. Great for carpentry and interior designs.',
    imageSrc: '/products/Swedish-Wood.png',
  },
  {
    id: '6',
    name: 'Fraké Wood',
    rating: 4.9,
    href: '#',
    price: 39.99,
    description: 'Tropical hardwood with unique grains, suited for high-end furniture and decorative panels.',
    imageSrc: '/products/Fraké-Wood.png',
  },
  {
    id: '7',
    name: 'Medium Density Fiberboard (MDF)',
    rating: 4.5,
    href: '#',
    price: 49.99,
    description: 'Smooth, knot-free synthetic wood. Perfect for furniture and cabinetry needing a clean finish.',
    imageSrc: '/products/Medium-Density-Fiberboard.png',
  },
  {
    id: '8',
    name: 'MDF-MR (Moisture Resistant)',
    rating: 4.84,
    href: '#',
    price: 29.99,
    description: 'Engineered for humid environments, ideal for bathrooms and moisture-prone areas.',
    imageSrc: '/products/Moisture-Resistant-MDF.png',
  },
  {
    id: '9',
    name: 'Tubular Chipboard',
    rating: 3.94,
    href: '#',
    price: 39.99,
    description: 'Lightweight yet stable, used in door cores, furniture, and lightweight panels.',
    imageSrc: '/products/Tubular-Chipboard.png',
  },
  {
    id: '10',
    name: 'Oriented Strand Board (OSB)',
    rating: 4.2,
    href: '#',
    price: 49.99,
    description: 'Engineered wood panel for load-bearing uses in construction and decoration.',
    imageSrc: '/products/OSB.avif',
  },
  {
    id: '11',
    name: 'Masonite',
    rating: 3.5,
    href: '#',
    price: 29.99,
    description: 'Compressed wood fibers offering strength and smoothness for construction and furniture back panels.',
    imageSrc: '/products/Masonite.jpg',
  },
  {
    id: '12',
    name: 'Block Board',
    rating: 4.9,
    href: '#',
    price: 39.99,
    description: 'Engineered wood that resists warping, used in furniture and construction for its lightweight and durability.',
    imageSrc: '/products/Block-Board.png',
  },
  {
    id: '13',
    name: 'Okal',
    rating: 4.5,
    href: '#',
    price: 49.99,
    description: 'Manufactured wood panel, smooth and ideal for painting and edge work.',
    imageSrc: '/products/Okal.jpg',
  },
  {
    id: '14',
    name: 'Plywood',
    rating: 4.84,
    href: '#',
    price: 29.99,
    description: 'Cross-grain structure reduces expansion and splitting, high strength for construction and furniture.',
    imageSrc: '/products/Plywood.png',
  },
]

export default function page({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'my-auto grid w-screen grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
        className
      )}
    >
      {places.map((place, index) => (
        <BlurFade key={place.id} delay={0.1 * index} inView>
          <PlaceListItem key={place.id} {...place} />
        </BlurFade>
      ))}
    </div>
  )
}
