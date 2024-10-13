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
      'Native to tropical Africa, features yellow to medium brown heartwood that darkens over time. It has a medium texture with interlaced veins and is generally easy to work with, responding well to adhesion and finishing. Iroko is highly Durable and resistant to rot and insect attacks. It’s particularly well-suited for a variety of outdoor applications, also a popular choice in cabinetry, constructions, flooring, furniture, specialty items and boatbuilding.',
    imageSrc: '/products/irokoWood.png',
    tag: 'Highly Durable',
    size: 'Available thickness: 26mm, 52mm',
  },
  {
    id: '2',
    name: 'American Black Walnut',
    rating: 4.84,
    href: '#',
    price: 29.99,
    description:
      'Native to tropical Africa, features yellow to medium brown heartwood that darkens over time. It has a medium texture with interlaced veins and is generally easy to work with, responding well to adhesion and finishing. Iroko is highly Durable and resistant to rot and insect attacks. It’s particularly well-suited for a variety of outdoor applications, also a popular choice in cabinetry, constructions, flooring, furniture, specialty items and boatbuilding.',
    imageSrc: '/products/American-Black-Walnut.png',
    tag: 'Robust Durability',
    size: 'Available thickness 26mm, 52mm',
  },
  {
    id: '3',
    name: 'Beech Wood',
    rating: 3.94,
    href: '#',
    price: 39.99,
    description:
      'Typically features a light beige color with a slightly darker rind. It is widely used globally due to its desirable properties. Beech is highly responsive to finishing, gluing, and screwing. Common applications include veneer, flooring, stairs, boat building, door frames, furniture, cabinets, musical instruments and plywood.',
    imageSrc: '/products/Beech-Wood.png',
    tag: 'Resilient',
    size: 'Available thickness 26mm, 52mm',
  },
  {
    id: '4',
    name: 'White Wood',
    rating: 4.2,
    href: '#',
    price: 49.99,
    description:
      'Known for its pale yellow to white color, is primarily used in home construction and paneling due to its moderate strength and excellent workability. It can hold nails well and is easy to shape and paint, making it a versatile choice for multi-dimensional lumber applications. This wood type is favored for its aesthetic appeal and practical functionality in building and joinery projects.',
    imageSrc: '/products/White-Wood.png',
    tag: 'Versatile',
  },
  {
    id: '5',
    name: 'Swedish Wood',
    rating: 3.5,
    href: '#',
    price: 29.99,
    description:
      'Categorized as soft or semi-hard wood, is renowned for its ease of workability and adaptability in various applications, including roofing, carpentry, and interior furniture manufacturing. It can be easily peeled, tightened with nails, cut, and shaped using hand or machine tools. Its versatility and ease of use make it a popular choice for both structural and decorative purposes in construction and furniture making.',
    imageSrc: '/products/Swedish-Wood.png',
    tag: 'Adaptable',
  },
  {
    id: '6',
    name: 'Fraké Wood',
    rating: 4.9,
    href: '#',
    price: 39.99,
    description:
      'A premium tropical hardwood known for its unique grain patterns and color variations from light yellow-brown to dark brown with black streaks. It is highly suitable for high-end furniture, veneers, and decorative panels due to its ease of working, allowing for precise cuts and smooth finishes. The wood offers moderate durability with good resistance to decay and pests, making it versatile for both indoor and outdoor use. Its applications extend to furniture, cabinetry, flooring, boat building, and musical instruments.',
    imageSrc: '/products/Fraké-Wood.png',
    tag: 'Elegant & Versatile',
    size: 'Available thickness 26mm, 52mm',
  },
  {
    id: '7',
    name: 'Medium Density Fiberboard (MDF)',
    rating: 4.5,
    href: '#',
    price: 49.99,
    description:
      'A synthetic material composed of recycled wood fibers and particles bound with wax or resin and compressed at high temperatures to form flat panels. MDF is known for its smooth, knot-free surfaces and uniform density, making it an excellent choice for furniture, cabinetry, and other interior applications where a clean finish is desired. Its weight and stability make it a reliable option for various construction and design projects.',
    imageSrc: '/products/Medium-Density-Fiberboard.png',
    tag: 'Ease to workability',
    size: 'Available in the following dimensions: \nLength: 2440mm, 3660mm \nWidth: 1220mm, 183mm \nThicknesses: 3mm, 4mm, 6mm, 8mm, 10mm, 12mm, 15mm, 18mm, 22mm, 25mm',
  },
  {
    id: '8',
    name: 'MDF-MR (Moisture Resistant)',
    rating: 4.84,
    href: '#',
    price: 29.99,
    description: 'Specifically engineered to endure humid environments, making it ideal for use in bathrooms and other moisture-prone areas. These boards, distinguished by green stamps on their edges, offer enhanced resistance to moisture compared to standard MDF. This property ensures durability and longevity in settings where high humidity is a concern.',
    imageSrc: '/products/Moisture-Resistant-MDF.png',
    tag: 'moisture resistant',
    size: 'Available in the following dimensions: \nLength: 2440mm, 3660mm \nWidth: 1220mm, 183mm \nThicknesses: 3mm, 4mm, 6mm, 8mm, 10mm, 12mm, 15mm, 18mm, 22mm, 25mm',
  },
  {
    id: '9',
    name: 'Tubular Chipboard',
    rating: 3.94,
    href: '#',
    price: 39.99,
    description: 'Produced using an extrusion compression system, achieving an optimal balance of lightweight and stability. It offers about 60% weight reduction compared to standard particle boards, with minimal swelling in panel thickness, high impact resistance, and excellent dimensional stability. These panels have become the industry standard for door gaskets and are also perfect for crafting interior doors of all types, furniture construction, partition walls, and lightweight shelves and panels. They deliver a superior blend of weight, strength, and stability.',
    imageSrc: '/products/Tubular-Chipboard.png',
    tag: 'Integrated',
    size: 'Available in the following dimensions: \nLength: 2090mm \nWidth: 700mm, 800mm, 900mm \nThicknesses: 33mm',
  },
  {
    id: '10',
    name: 'Oriented Strand Board (OSB)',
    rating: 4.2,
    href: '#',
    price: 49.99,
    description: 'An engineered wood panel made from layers of wood chips and slices bonded with wax and adhesive resin. Known for its excellent mechanical properties, OSB is ideal for high load-bearing applications and is commonly used in construction, flooring, roofing, wall cladding, and interior decoration. It offers strength, dimensional stability, and resistance to deflection and corrosion.',
    imageSrc: '/products/OSB.png',
    tag: 'High performance',
    size: 'Available thickness: 9mm, 12mm, 18mm',
  },
  {
    id: '11',
    name: 'Masonite',
    rating: 3.5,
    href: '#',
    price: 29.99,
    description:
      'Created from compressed wood fibers, prized for its strength, density, and smooth surface. It is extensively used in construction for flooring underlayment, wall paneling, and interior doors; in furniture manufacturing for back panels and drawer bottoms; and in packaging for protective materials and in construction for paneling and interior doors',
    imageSrc: '/products/Masonite.jpg',
    tag: 'Multifunctional',
    size: 'Available in the following dimensions: \nLength: 2440mm, 3660mm \nWidth: 1220mm, 183mm \nThicknesses: 3mm, 6mm',
  },
  {
    id: '12',
    name: 'Block Board',
    rating: 4.9,
    href: '#',
    price: 39.99,
    description:
      'An engineered wood product created by inserting pieces of wood between layers of solid wood and bonding them under high heat and pressure. It offers good bolt-holding ability and resistance to warping, making it ideal for applications such as partitions, doors, tables and shelves. In the furniture industry, wood panels are prized for their lightweight veneers, durability, and flat surfaces ',
    imageSrc: '/products/Block-Board.png',
    tag: 'distinguished',
    size: 'Available thickness: 15mm, 18mm, 22mm',
  },
  {
    id: '13',
    name: 'Okal',
    rating: 4.5,
    href: '#',
    price: 49.99,
    description: 'A type of manufactured wood panel made from sawdust and wood scraps that are mixed with resin, compressed, and fired into solid boards. It features a smooth, uniform surface without voids, splinters, or cracks, making it ideal for painting and edge work. Its consistency allows for easy routing to create a variety of smooth edge profiles.',
    imageSrc: '/products/Okal.jpg',
    size: 'Available in the following dimensions: \nLength: 2440mm, 3660mm \nWidth: 1220mm, 183mm \nThicknesses: 18mm',
  },
  {
    id: '14',
    name: 'Plywood',
    rating: 4.84,
    href: '#',
    price: 29.99,
    description:
      'Provides numerous benefits, such as reduced expansion, contraction, and moisture exposure, along with minimized splitting when nailed at the edges. This enhances its tensile strength, screw tightness, durability, and vertical stiffness. With a high strength-to-weight ratio and impact resistance, plywood is ideal for construction with wood formwork, mobile homes, cabinets, furniture, boat building, stairs, and flooring.',
    imageSrc: '/products/Plywood.png',
    size: 'Available thickness: 4mm, 6mm, 8mm, 12mm, 15mm, 18mm',
  },
]

export default function page() {
  return (
    <div
      className={cn(
        'my-auto grid w-screen grid-cols-1 gap-5 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'
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
