import React from 'react'
import BlurFade from '../_components/magic-ui/BlurFade'
import ShineBorder from '../_components/magic-ui/ShineBorder'
import { Button, Image, Input, Textarea } from '@nextui-org/react'
import { MessageCircle, Phone, User } from 'lucide-react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <div className="relative">
        <BlurFade inView className="mt-16 w-full">
          <ShineBorder className="flex w-[70%] flex-col items-start gap-10 bg-[#F1DED0] px-10 py-5 lg:w-[90%] lg:py-20 lg:pl-16 2xl:w-[75%]">
            <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl">
              <BlurFade inView delay={0.2}>
                ABOUT US
              </BlurFade>
            </span>
            <BlurFade inView delay={0.5}>
              <p className="max-w-[300px] text-sm md:text-base lg:max-w-[350px] lg:text-lg xl:max-w-[470px] xl:text-2xl">
                Welcome to Al Mouhawess Wood, a distinguished name in the wood industry renowned for
                our unwavering commitment to honesty, integrity, and excellence. Founded in 1983 by
                Iskandar Al Mouhawess, our journey began as a modest wood shop in the historic souks
                of Batroun. Through Iskandar’s dedication to superior quality and exceptional
                service, we have built a legacy of trust and loyalty with our customers. In 2011, In
                2011, Iskandar's son, Farjallah Al Mouhawess, took control and expanded the
                business, transforming it into the esteemed company it is today. Customer
                satisfaction is foremost in our approach. We pride ourselves on fostering enduring
                relationships with our clients, offering personalized service and dependable
                solutions. Whether you are involved in construction, manufacturing, or any industry
                requiring high-quality wood materials, Al Mouhawess Wood is your trusted partner.
              </p>
            </BlurFade>
          </ShineBorder>
        </BlurFade>
        <BlurFade inView delay={0.4} className="absolute left-[67%] top-[10%] 2xl:left-[57%]">
          <Image
            src="AboutUs/2.png"
            className="hidden h-[100px] object-cover lg:block lg:h-[150px] xl:h-full xl:w-[100%]"
          />
        </BlurFade>
        <BlurFade inView delay={0.8} className="absolute left-[50%] top-[25%] 2xl:left-[40%]">
          <Image
            src="AboutUs/1.png"
            className="hidden h-[200px] object-cover lg:block lg:h-[250px] xl:h-[300px] xl:w-[100%]"
          />
        </BlurFade>
        <BlurFade inView delay={1} className="absolute left-[65%] top-[60%] 2xl:left-[55%]">
          <Image
            src="AboutUs/3.png"
            className="hidden h-[100px] object-cover lg:block lg:h-[150px] xl:h-full xl:w-[100%]"
          />
        </BlurFade>
      </div>
      <div className="mt-20 w-full">
        <div className="flex w-full justify-end px-10 lg:px-20">
          <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl">
            <BlurFade inView delay={0.2}>
              Any questions?
            </BlurFade>
          </span>
        </div>
        <div className="mt-10 flex w-full flex-col items-end justify-between gap-5 px-10 lg:px-20">
          <BlurFade inView delay={0.4} className="flex w-full justify-end">
            <Input
              placeholder="Your Name"
              className="w-full lg:w-[400px]"
              radius="sm"
              variant="bordered"
              classNames={{
                inputWrapper: 'px-0',
                innerWrapper: 'px-2',
              }}
              startContent={<User />}
            />
          </BlurFade>
          <BlurFade inView delay={0.6} className="flex w-full justify-end">
            <Input
              placeholder="Your Phone Number"
              className="w-full lg:w-[400px]"
              radius="sm"
              variant="bordered"
              classNames={{
                inputWrapper: 'px-0',
                innerWrapper: 'px-2',
              }}
              startContent={<Phone />}
            />
          </BlurFade>
          <BlurFade inView delay={0.8} className="flex w-full justify-end">
            <Textarea
              placeholder="Your Question"
              className="w-full lg:w-[400px]"
              radius="sm"
              variant="bordered"
              classNames={{
                inputWrapper: 'p-0',
                innerWrapper: 'py-2 px-2',
              }}
              startContent={<MessageCircle />}
            />
          </BlurFade>
          <BlurFade inView delay={1} className="flex w-full justify-end">
            <Button className="w-[100px] bg-[#728BAD] font-bold text-[#ffffff]" radius="sm">
              Send
            </Button>
          </BlurFade>
        </div>
      </div>
    </div>
  )
}

export default page
