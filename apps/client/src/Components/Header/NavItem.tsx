import React, { FC } from "react"
import Link from "Components/EmptyLink"


export interface NavItemProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  to: string,
}

export const NavItem: FC<NavItemProps> = ({
  to,
  onClick,
  children
}) => {
  return (
    <Link to={to}><button onClick={onClick}>{children}</button></Link>
  )
}

export default NavItem
