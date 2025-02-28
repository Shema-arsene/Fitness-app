import { JSX } from "react"

export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  id: Number
  icon: JSX.Element
  // icon: React.ReactNode
  title: string
  description: string
}
