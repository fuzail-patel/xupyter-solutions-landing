export type NavItem = {
  label: string
  href: string
}

export type DesktopNavProps = {
  pathname: string
  activeSection: string
}

export type MobileDrawerProps = {
  open: boolean
  onClose: () => void
  pathname: string
  activeSection: string
}
