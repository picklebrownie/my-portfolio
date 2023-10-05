import { socials } from '../../utils/socials'

import { cn } from '../../utils/utils'

export default function Footer({
  textColor = 'purple-100',
  iconColor = 'purple-100',
  iconHoverColor = 'slate-50',
}: {
  textColor?: string
  iconColor?: string
  iconHoverColor?: string
}) {
  return (
    <footer className="mx-auto max-w-5xl">
      <div className="mx-auto px-6 py-12 md:flex md:items-center md:justify-between md:px-12">
        <div className="flex justify-center space-x-6 md:order-2">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                '',
                'text-' + iconColor,
                'hover:text-' + iconHoverColor
              )}
            >
              <span className="sr-only">{item.name}</span>
              <item.icon
                className="h-6 w-6 transition duration-300 ease-in-out hover:scale-125"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p
            className={cn('text-center text-xs leading-5', 'text-' + textColor)}
          >
            © 2023 Created by Kayla.
          </p>
        </div>
      </div>
    </footer>
  )
}
